from flask import (
    Blueprint, 
    render_template
)


# create a bluprint holding the quiz module
quizbp = Blueprint('quiz', __name__, template_folder='templates')


@quizbp.route('/')
def home():
    return render_template('home.html')
