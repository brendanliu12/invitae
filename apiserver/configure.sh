#!/bin/bash
script=$0
function usage {
  echo "Usage: $script /path/to/uwsgi/config /path/to/nginx/config"
  echo "               /path/to/apiserver.environment"
  echo ""
  echo "Add all configuration files to the desired system paths"
}

if [[ -z $1 || -z $2 || -z $3 ]]; then
  usage
  exit 1
fi

set -x -e -o pipefail

# Set up environment variables
source ./environment
source ./configure.environment

# Install apt packages for app
sudo apt update
sudo apt -y upgrade
sudo apt install -y nginx
sudo apt install -y python3-pip \
  python3-dev \
  build-essential \
  libssl-dev \
  libffi-dev \
  python3-setuptools
sudo pip3 install virtualenv

# Build Python virtualenv for app
rm -rf $APISERVER_VENV_PATH
virtualenv --python=python3 $APISERVER_VENV_PATH
source ${APISERVER_VENV_PATH}/bin/activate
pip3 install wheel
pip3 install uwsgi
pip3 install connexion==1.1.15
pip3 install python_dateutil==2.6.0
pip3 install "setuptools>=21.0.0"
pip3 install pandas
pip3 install flask_cors
deactivate

# Set up uWSGI runner configuration
sudo cp $1 /etc/systemd/system/$(basename $1)
# https://serverfault.com/questions/700862/do-systemd-unit-files-have-to-be-reloaded-when-modified
sudo systemctl daemon-reload

# Set up log directory for uWSGI
sudo mkdir -p $UWSGI_LOG_PATH
sudo chown -R ${APISERVER_USER}:${APISERVER_GROUP} $UWSGI_LOG_PATH

# Set up Nginx configuration
sudo cp $2 ${NGINX_SITES_AVAILABLE_PATH}/
sudo rm -f $NGINX_SITES_ENABLED_PATH/$(basename $2)
sudo ln -s ${NGINX_SITES_AVAILABLE_PATH}/$(basename $2) $NGINX_SITES_ENABLED_PATH
sudo nginx -t
sudo ufw allow 'Nginx Full'

# Set up app configuration
sudo cp $3 /etc/$(basename $3)
