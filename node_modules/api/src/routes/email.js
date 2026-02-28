import 'dotenv/config';
import express from 'express';
import { Resend } from 'resend';
import logger from '../utils/logger.js';

const router = express.Router();
const resend = new Resend(process.env.RESEND_API_KEY);

router.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  // Validate all fields are present and non-empty
  if (!name || typeof name !== 'string' || name.trim() === '') {
    throw new Error('Name field is required and must be non-empty');
  }

  if (!email || typeof email !== 'string' || email.trim() === '') {
    throw new Error('Email field is required and must be non-empty');
  }

  if (!message || typeof message !== 'string' || message.trim() === '') {
    throw new Error('Message field is required and must be non-empty');
  }

  const timestamp = new Date().toISOString();

  // Create HTML body with formatted contact details
  const htmlBody = `
    <html>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h2>New Contact Form Submission</h2>
        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px;">
          <p><strong>Sender Name:</strong> ${name}</p>
          <p><strong>Sender Email:</strong> ${email}</p>
          <p><strong>Message Content:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
          <p><strong>Timestamp:</strong> ${timestamp}</p>
        </div>
      </body>
    </html>
  `;

  // Send email using Resend
  const result = await resend.emails.send({
    from: 'noreply@resend.dev',
    to: 'yunus1962000@gmail.com',
    subject: `New Contact Form Submission from ${name}`,
    html: htmlBody,
  });

  if (result.error) {
    throw new Error(`Failed to send email: ${result.error.message}`);
  }

  logger.info(`Email sent successfully from ${email} to yunus1962000@gmail.com`);

  res.json({
    success: true,
    message: 'Email sent successfully',
  });
});

export default router;