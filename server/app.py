from flask import Flask, request, jsonify
from flask_cors import CORS
import smtplib
from email.mime.text import MIMEText
from dotenv import load_dotenv
import os

app = Flask(__name__)
CORS(app)
load_dotenv()

@app.route('/send-enquiry', methods=['POST'])
def send_enquiry():
    data = request.json
    name = data.get('name')
    email = data.get('email')
    phone = data.get('phone')
    message = data.get('message')

    # Prepare email content
    subject = "New Tile Work Enquiry"
    body = f"""
    New enquiry received:
    
    Name: {name}
    Email: {email}
    Phone: {phone}
    Message: {message}
    """
    msg = MIMEText(body)
    msg['Subject'] = subject
    msg['From'] = os.environ.get("EMAIL")
    msg['To'] = os.environ.get("EMAIL_RECEIVER")

    try:
        server = smtplib.SMTP_SSL('smtp.gmail.com', 465)
        server.login(os.environ.get("EMAIL"), os.environ.get("EMAIL_PASS"))
        server.send_message(msg)
        server.quit()
        return jsonify({"status": "success", "message": "Enquiry sent"})
    except Exception as e:
        print("Error:", e)
        return jsonify({"status": "error", "message": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
