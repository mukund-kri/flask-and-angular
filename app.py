from flask import Flask


# create the flask app
app = Flask(__name__)
app.debug = True

# register blueprints -----------------------------------------------------------
from common import commonbp
app.register_blueprint(commonbp, url_prefix='/common')

from quiz.views import quizbp
app.register_blueprint(quizbp, url_prefix='/quiz')

from experiments.views import experimentbp
app.register_blueprint(experimentbp, url_prefix='/experiments')

@app.route('/')
def hello():
    return "hello"

# from admin import adminbp
# app.register_blueprint(adminbp, prefix='/admin')
