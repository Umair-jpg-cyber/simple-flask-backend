# from flask import Flask, request, jsonify
# from flask_cors import CORS

# app = Flask(__name__)
# CORS(app)

# @app.route('/api', methods=['POST'])
# def api():
#     user_input = request.json.get('message')  # <-- expects 'message' in the JSON body
#     print("Received:", user_input)  # helpful for debugging

#     if user_input == "hello world":
#         return jsonify({"reply": "hey there"})  # <-- sending 'reply' key back
#     return jsonify({"reply": "something went wrong"})

# if __name__ == '__main__':
#     app.run(debug=True, host='0.0.0.0')



from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)

# Allow CORS only from a specific origin (replace 'http://localhost:3000' with your frontend URL)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

@app.route('/api', methods=['POST', 'OPTIONS'])
def api():
    if request.method == 'OPTIONS':
        # Respond to preflight requests
        response = jsonify({"message": "Preflight response"})
        response.headers.add('Access-Control-Allow-Origin', 'http://localhost:3000')
        response.headers.add('Access-Control-Allow-Methods', 'POST, OPTIONS')
        response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
        return response

    # Handle the POST request
    user_input = request.json.get('message')
    print("Received:", user_input)

    if user_input == "hello world":
        return jsonify({"reply": "hey there"})
    return jsonify({"reply": "something went wrong"})

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')

