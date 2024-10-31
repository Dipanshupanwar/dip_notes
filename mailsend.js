
const nodemailer = require('nodemailer');

// Create a transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 465, // Use the number 465 instead of a string
    secure: true, // Secure should be true when using port 465
  auth: {
    user: 'diprdx2598@gmail.com', // Your Gmail address
    pass: 'xysl ouyd know ejfd'
  },
});

// Define email options
const mailOptions = {
  from: 'diprdx2598@gamil.com', // Sender's email address
  to: 'workdipanshu07@gmail.com', // Receiver's email address
  subject: 'Test Email',
  text: 'Hello! This is a test email sent from Nodemailer.',
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log('Error:', error);
  }
  console.log('Email sent:', info.response);
});
