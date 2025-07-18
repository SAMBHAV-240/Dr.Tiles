import os
import smtplib
from email.message import EmailMessage
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

EMAIL = os.getenv("EMAIL")
EMAIL_PASS = os.getenv("EMAIL_PASS")
EMAIL_RECEIVER = os.getenv("EMAIL_RECEIVER")

msg = EmailMessage()
msg['Subject'] = 'Test Email'
msg['From'] = EMAIL
msg['To'] = EMAIL_RECEIVER
msg.set_content('This is a test email from my Python script.')

try:
    with smtplib.SMTP_SSL('smtp.gmail.com', 465) as smtp:
        smtp.login(EMAIL, EMAIL_PASS)
        smtp.send_message(msg)
    print("Email sent successfully.")
except Exception as e:
    print(f"Error: {e}")
