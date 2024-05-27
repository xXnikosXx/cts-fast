// server.js
import express from 'express';
import next from 'next';
import nodemailer from 'nodemailer';
import crypto from 'crypto';
import Database from 'better-sqlite3';
const db = new Database('emails.db');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Configure the Nodemailer transporter
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT ?? '587', 10),
    secure: process.env.SMTP_PORT === '465',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  server.use(express.json());

  // Handle POST request for submitting email
  server.post('/api/submit-email', async (req, res) => {
    console.log(req);
      const { email } = req.body;

      console.log(email)
    try {

      // Send an email to the specified address (you)
    await transporter.sendMail({
      from: `"Newsletter signup (ctsolutions.gr)" <${process.env.SMTP_USER}>`,
    to: 'nmotos@ctsolutions.gr', // Replace with the second recipient's email
    subject: 'New Newsletter Subscriber via ctsolutions.gr',
    text: `You have a new Newsletter subscriber:\n\nEmail: ${email}`,
    html: `<p>You have a new Newsletter subscriber:<br/><br/>Email: ${email}</p>`,
    });

    // Send a confirmation email to the user with the unsubscribe prompt
    await transporter.sendMail({
      from: `"Custom Tech Solutions" <${process.env.SMTP_USER}>`,
      to: email, // User's email address
      subject: 'Newsletter Subscription',
    text: `Hello!\n\nThank you for subscribing to our newsletter. You will be included in future communications from us!\n\n\nYou can unsubscribe by clicking on the link below:\nhttps://www.ctsolutions.gr/unsubscribe`,
    html: `<p>Hello!<br/><br/>Thank you for subscribing to our newsletter. You will be included in future communications from us!<br/><br/><br/>You can unsubscribe by sending an email at:<br/><a href="mailto:info@ctsolutions.gr" style="color: red;">info@ctsolutions.gr</a></p>`,
    });

      return res.status(201).json({ success: true });
    } catch (error) {
        console.log(error)
      return res.status(400).json({ success: false, error: error.message });
    }
  }
);

// POST route for form submission
server.post('/api/contact', async (req, res) => {
  const { firstName, lastName, phone, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT, 10),
    secure: process.env.SMTP_PORT === '465',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailOptions = {
    from: `"Custom Tech Solutions" <${process.env.SMTP_USER}>`,
    to: email,
    subject: 'We received your info and will contact you soon!',
    text: `Hello, ${firstName}!\n\nThank you for contacting us!\nWe received your info from our contact form and will make sure to call or email you in a timely manner.\nFor now, here's all the info we received, just to double-check ;)\n\nFirst Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\nPhone Number: ${phone ? phone : "N/A"}\nMessage: ${message}\n\n\nPlease do not reply at this email address, as it is not monitored. We will get back to you soon!`,
    html: `<p>Hello, ${firstName}!<br /><br/>Thank you for contacting us!<br />We received your info from our contact form and will make sure to call or email you in a timely manner.<br />For now, here's all the info we received, just to double-check ;)<br /><br /><strong>First Name:</strong> ${firstName}<br /><strong>Last Name:</strong> ${lastName}<br /><strong>Email:</strong> ${email}<br /><strong>Phone Number:</strong> ${phone ? phone : "N/A"}<br /><strong>Message:</strong> ${message}<br /><br /><br /> <u>Please, do <strong>NOT</strong> reply to this email address, as it is not monitored. We will get back to you soon!</u>`,
  };

  const mailOptionsCopy = {
    from: `"Contact Form (ctsolutions.gr)" <${process.env.SMTP_USER}>`,
    to: `nmotos@ctsolutions.gr`, // Replace with the second recipient's email
    subject: 'New Contact Form Submission via ctsolutions.gr',
    text: `You have a new contact form submission:\n\nFirst Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\nPhone Number: ${phone ? phone : "N/A"}\nMessage: ${message}`,
    html: `<p>You have a new contact form submission:<br /><strong>First Name:</strong> ${firstName}<br /><strong>Last Name:</strong> ${lastName}<br /><strong>Email:</strong> ${email}<br /><strong>Phone Number:</strong> ${phone ? phone : "N/A"}<br /><strong>Message:</strong> ${message}</p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    await transporter.sendMail(mailOptionsCopy);
    res.status(200).json({ message: 'Form submitted successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error sending email' });
  }
});

  // Handle other routes
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  const PORT = process.env.PORT || 3000;
  server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});
