import smtplib
import os
from dotenv import load_dotenv

load_dotenv()

EMAIL = os.getenv("EMAIL")
EMAIL_PASS = os.getenv("EMAIL_PASS")

try:
    with smtplib.SMTP("smtp.gmail.com", 587) as smtp:
        smtp.ehlo()
        smtp.starttls()
        smtp.login(EMAIL, EMAIL_PASS)
        print("✅ Login successful.")
except Exception as e:
    print("❌ Login failed:", e)
