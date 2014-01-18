from flask import Blueprint

commonbp = Blueprint(
    'common', 
    __name__, 
    static_folder='static',
    template_folder='layouts')

