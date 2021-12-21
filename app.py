from random import randint
from flask import Flask

app = Flask(__name__)
    
@app.route('/chatbot/<message>')
def endpoint_chatbot(message):
    return 'Nechceš se zeptat na něco jiného, než ' + message


@app.route('/')
def index():
    return app.send_static_file('tryout.html')

@app.route('/ucitel.js')
def index_js():
    return app.send_static_file('ucitel.js')

@app.route('/data.json')
def index_json():
    return app.send_static_file('data.json')
