// app/api/submit-email/route.js
import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

const filePath = path.resolve('data/emails.json');

export async function POST(req) {
  try {
    const body = await req.json();
    const emailData = JSON.parse(fs.readFileSync(filePath, 'utf8') || '[]');

    // Check if the email already exists
    const existingEmail = emailData.find(entry => entry.email === body.email);
    if (existingEmail) {
      return NextResponse.json({ success: false, message: 'Email already submitted.' }, { status: 400 });
    }

    // Add the new email entry with timestamp and transaction
    const newEmailEntry = {
      email: body.email,
      timestamp: new Date().toISOString(),
      transaction: 'Subscribe',
    };
    emailData.push(newEmailEntry);

    // Write updated data back to the file
    fs.writeFileSync(filePath, JSON.stringify(emailData, null, 2));

    return NextResponse.json({ success: true, data: newEmailEntry }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}
