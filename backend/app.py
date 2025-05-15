from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow all origins or set your actual frontend domain

@app.route('/api', methods=['POST', 'OPTIONS'])
def api():
    if request.method == 'OPTIONS':
        response = jsonify({"message": "Preflight response"})
        response.headers.add('Access-Control-Allow-Origin', '*')
        response.headers.add('Access-Control-Allow-Methods', 'POST, OPTIONS')
        response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
        return response

    user_input = request.json.get('message')
    print("Received:", user_input)

    if user_input == "hello world":
        return jsonify({"reply": "hey there"})
    return jsonify({"reply": "something went wrong"})

if __name__ == '__main__':
    app.run()  # This is fine for PythonAnywhere
