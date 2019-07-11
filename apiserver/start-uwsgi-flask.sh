#!/bin/bash
if [[ ! -z $APISERVER_ENV_PATH ]]; then
  source $APISERVER_ENV_PATH/bin/activate
else
  echo "Expected APISERVER_ENV_PATH to be set"
  exit 1
fi

set -e -x -o pipefail

uwsgi --socket 0.0.0.0:5000 --protocol=http -w swagger_server.server:app

deactivate
