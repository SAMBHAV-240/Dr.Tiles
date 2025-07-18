const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/quote', async (req, res) => {
  const { name, email, phone, suburb, serviceType, preferredDate, message } = req.body;

  if (!name || !email || !phone || !suburb || !serviceType) {
    return res.status(400).json({ success: false, message: 'Missing required fields' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO, // your friend's email
      subject: 'New Quote Request from Website',
      html: `
        <h3>New Quote Request</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Suburb:</strong> ${suburb}</p>
        <p><strong>Service Type:</strong> ${serviceType}</p>
        <p><strong>Preferred Date:</strong> ${preferredDate}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: 'Quote request sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Error sending email' });
  }
});

app.listen(5000, () => {
  console.log(`✅ Server running on http://localhost:5000`);
});

app.get('/', (req, res) => {
  res.send('Dr Tiles Backend is Live');
});

