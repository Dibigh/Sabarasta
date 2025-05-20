const express = require('express');
require('dotenv').config();
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors()); // To allow cross-origin requests
app.use(bodyParser.json()); // To parse incoming JSON requests

// Configure Nodemailer SMTP Transporter
const transporter = nodemailer.createTransport({
    service: 'gmail', // You can use services like Gmail, or specify your SMTP server details here
    auth: {
       user: process.env.EMAIL_USER, // Use environment variables
       pass: process.env.EMAIL_PASS
    }
});

// POST route to handle email sending
app.post('/send-email', (req, res) => {
    const { name, email,phone,budget,start,info,message } = req.body;

    const mailOptions = {
        from: email,// The user's email
        to: 'thesabrasta@gmail.com', // The email address you want to receive the form data
        subject: 'New Contact Form Submission',
        text: `Name: ${name}\nEmail: ${email}\nphone: ${phone}\nbudget: ${budget}\nstart: ${start}\ninfo: ${info}\nmessage:${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            return res.status(500).json({ success: false, message: 'Error sending email' });
        }
        console.log('Email sent:', info.response);
        res.status(200).json({ success: true, message: 'Email sent successfully' });
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
