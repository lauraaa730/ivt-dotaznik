from random import randint
from flask import Flask

app = Flask(__name__)
    
@app.route('/chatbot/<message>')
def endpoint_chatbot(message):
    return 'Nechceš se zeptat na něco jiného, než ' + message


@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.route('/index.js')
def index_js():
    return app.send_static_file('index.js')
