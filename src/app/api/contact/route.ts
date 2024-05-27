import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const { firstName, lastName, email, phone, message } = await req.json();

  console.log("inside api route now...");

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT ?? '587', 10),
    secure: process.env.SMTP_PORT === '465',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailOptions = {
    from: `"Custom Tech Solutions" <${process.env.SMTP_USER}>`,
    to: email,
    bcc: `info@ctsolutions.gr`,
    subject: 'We received your info and will contact you soon!',
    text: `Hello, ${firstName}!\n\nThank you for contacting us!\nWe received your info from our contact form and will make sure to call or email you in a timely manner.\nFor now, here's all the info we received, just to double-check ;)\n\nFirst Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\nPhone Number: ${phone ? phone : "N/A"}\nMessage: ${message}\n\n\nPlease do not reply at this email address, as it is not monitored. We will get back to you soon!`,
    html: `<p>Hello, ${firstName}!<br /><br/>Thank you for contacting us!<br />We received your info from our contact form and will make sure to call or email you in a timely manner.<br />For now, here's all the info we received, just to double-check ;)<br /><br /><strong>First Name:</strong> ${firstName}<br /><strong>Last Name:</strong> ${lastName}<br /><strong>Email:</strong> ${email}<br /><strong>Phone Number:</strong> ${phone ? phone : "N/A"}<br /><strong>Message:</strong> ${message}<br /><br /><br /> <u>Please, do <strong>NOT</strong> reply to this email address, as it is not monitored. We will get back to you soon!</u>`,
  };

  const mailOptionsCopy = {
    from: `"Contact Form (ctsolutions.gr)" <${process.env.SMTP_USER}>`,
    to: 'nmotos@ctsolutions.gr', // Replace with the second recipient's email
    subject: 'New Contact Form Submission via ctsolutions.gr',
    text: `You have a new contact form submission:\n\nFirst Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\nPhone Number: ${phone ? phone : "N/A"}\nMessage: ${message}`,
    html: `<p>You have a new contact form submission:<br /><strong>First Name:</strong> ${firstName}<br /><strong>Last Name:</strong> ${lastName}<br /><strong>Email:</strong> ${email}<br /><strong>Phone Number:</strong> ${phone ? phone : "N/A"}<br /><strong>Message:</strong> ${message}</p>`,
  };

  console.log({firstName, lastName, email, phone, message});

  try {
    await transporter.sendMail(mailOptions);
    await transporter.sendMail(mailOptionsCopy);
    return NextResponse.json({ message: 'Form submitted successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Error sending email' }, { status: 500 });
  }
}
