from flask import Blueprint, render_template


experimentbp = Blueprint(
    'experiment', 
    __name__, 
    template_folder='templates',
    static_folder='static'
)


@experimentbp.route('/')
def hello():
    return render_template('hello.html')

@experimentbp.route('/one')
def one():
    return render_template('one.html')

@experimentbp.route('/routing')
def routing():
    return render_template('routing.html')

@experimentbp.route('/uiroute')
def uiroute():
    return render_template('uiroute.html')

