import os
import json
from flask import Flask, Response, request

app = Flask(__name__, static_folder='', static_url_path='')

@app.route('/')
@app.route('/index.html')
def root():
    return app.send_static_file('index.html')

@app.route('/src/timestamp.js')
def js_server():
    return app.send_static_file('src/timestamp.js')

@app.route('/days.json', methods=['GET', 'POST'])
def days_handler():
    with open('days.json', 'r') as file:
        days = json.loads(file.read())

    return Response(json.dumps(days), mimetype='application/json', headers={'Cache-Control': 'no-cache'})

if __name__ == '__main__':
    app.run(port=int(os.environ.get("PORT",3000)))
