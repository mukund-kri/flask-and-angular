from flask.ext.script import Manager

from app import app

# create a manager capable of running this app
manager = Manager(app)


# Run the development server
if __name__ == "__main__":
    manager.run()
