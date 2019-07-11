import connexion
from flask_cors import CORS
import os

import logging
logging.getLogger().setLevel(os.environ.get("LOG_LEVEL", logging.INFO))

# Import the database at start time to make sure it works
import swagger_server.database

app = connexion.App(__name__, specification_dir='./swagger/')
app.add_api("swagger.yaml", arguments={"title": "Variant server"})
CORS(app.app)

if __name__ == "__main__":
    app.run()
