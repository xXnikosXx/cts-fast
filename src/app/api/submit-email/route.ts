import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const { email } = await req.json();

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
    from: `"Newsletter signup (ctsolutions.gr)" <${process.env.SMTP_USER}>`,
    to: 'nmotos@ctsolutions.gr', // Replace with the second recipient's email
    subject: 'New Newsletter Subscriber via ctsolutions.gr',
    text: `You have a new Newsletter subscriber:\n\nEmail: ${email}`,
    html: `<p>You have a new Newsletter subscriber:<br/><br/>Email: ${email}</p>`,
  };

  const mailOptionsCopy = {
    from: `"Custom Tech Solutions" <${process.env.SMTP_USER}>`,
    to: email, // User's email address
    subject: 'Newsletter Subscription',
    text: `Hello!\n\nThank you for subscribing to our newsletter. You will be included in future communications from us!\n\n\nYou can unsubscribe by clicking on the link below:\nhttps://www.ctsolutions.gr/unsubscribe`,
    html: `<p>Hello!<br/><br/>Thank you for subscribing to our newsletter. You will be included in future communications from us!<br/><br/><br/>You can unsubscribe by sending an email at:<br/><a href="mailto:info@ctsolutions.gr" style="color: red;">info@ctsolutions.gr</a></p>`,
  };


  try {
    await transporter.sendMail(mailOptions);
    await transporter.sendMail(mailOptionsCopy);
    return NextResponse.json({ message: 'Form submitted successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Error sending email' }, { status: 500 });
  }
}
