from flask import Flask, request, jsonify

app = Flask(__name__)

# Replace with your own user information
user_info = {
    "full_name": "John Doe",
    "dob": "17091999",
    "email": "john@xyz.com",
    "roll_number": "ABCD123"
}

@app.route('/bfhl', methods=['POST'])
def bfhl_post():
    try:
        data = request.json.get("data", [])
        
        # Extracting numbers and alphabets from the input data
        numbers = [str(item) for item in data if str(item).isdigit()]
        alphabets = [item for item in data if str(item).isalpha()]
        
        # Finding the highest alphabet
        highest_alphabet = max(alphabets, default=None, key=lambda x: x.lower())
        
        response_data = {
            "is_success": True,
            "user_id": f"{user_info['full_name']}_{user_info['dob']}",
            "email": user_info["email"],
            "roll_number": user_info["roll_number"],
            "numbers": numbers,
            "alphabets": alphabets,
            "highest_alphabet": [highest_alphabet] if highest_alphabet else []
        }
        
        return jsonify(response_data), 200
    except Exception as e:
        return jsonify({"is_success": False, "error_message": str(e)}), 400

@app.route('/bfhl', methods=['GET'])
def bfhl_get():
    return jsonify({"operation_code": 1}), 200

if __name__ == '__main__':
    app.run()
