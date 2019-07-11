#Variant Search Coding Assignment from Invitae

##Github link
https://github.com/brendanliu12/invitae

##Live app link
http://ec2-18-216-144-242.us-east-2.compute.amazonaws.com:3000/


## Tech Stack Used
Front-end - ReactJS
Back-end - Nginx, uWSGI, Connexion/Flask, Pandas Dataframe

Used Pandas dataframe because it is simple to use and operates in memory so response times are fast.

##Instruction on how to launch
##Backend
** Used Ubuntu 18.04
1. Add apiserver/etc/apiserver.environment file based on /apiserver/etc/apiserver.environment.template
replaceing the PLACEHOLDER with full path of data variants.tsv.zip file

2. Set up local environment
$ apiserver/configure.sh apiserver/etc/systemd/system/apiserver.service apiserver/etc/nginx/sites-available/apiserver apiserver/etc/apiserver.environment

3. Start local server
$ APISERVER_ENV_PATH=/path/to/apiserver_env DATABASE_URI=/path/to/variants.tsv.gz apiserver/start-uwsgi-flask.sh

## Front end
** Used Node 10.16
1. Go to invitae/frontend/Assignment
2. Install packages: npm install
3. Start the local server: npm start

## Tests - Using Python
There are no unit tests for the back end because adding unit tests is overkill for a small and fast-moving product.
Instead we add E2E tests to make sure that client-facing requirements are fulfilled.
Tests are in the apiserver/API_Test.py and apiserver/API_Test_local.py files
The first file will test against the deployed backend and the latter will test against the local backend.  
API_Test_local.py has a variable localhost in it that needs to be modified depending on the port that is being served.

To run first install urllib3 through the command
*pip install urllib3*.  Then run the test file.

##Rest Endpoints
There are 2 Rest Endpoints

**Get /variant** - finds all the variants on a particular gene

Input query parameters - gene(string)

Output - Array of Variant objects

UI: http://ec2-18-216-144-242.us-east-2.compute.amazonaws.com/invitae/bliu/variant?gene=ENG

**Get /gene** - finds all the genes that start with a certain prefix

Input query parameters - gene_prefix (string): case-sensitive prefix. Filter in genes that match the prefix

Output - Array of gene strings

UI: http://ec2-18-216-144-242.us-east-2.compute.amazonaws.com/invitae/bliu/gene?gene_prefix=CDKL

