import { prisma } from '../../../lib/prisma';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const dynamic = 'force-dynamic';

// Create reusable transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function POST(request) {
  try {
    const body = await request.json();

    // Validate inputs
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    // 1. Save to database
    const contact = await prisma.contact.create({
      data: {
        name: body.name,
        email: body.email,
        message: body.message,
      },
    });

    // 2. Send email notification to site owner
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      replyTo: body.email,
      subject: `📬 New Message from ${body.name} — Portfolio`,
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0f0f1a; color: #e2e8f0; border-radius: 12px; overflow: hidden; border: 1px solid #2d2d5e;">
          <div style="background: linear-gradient(135deg, #6366f1, #8b5cf6); padding: 32px 40px; text-align: center;">
            <h1 style="margin: 0; font-size: 24px; color: #fff;">📬 New Contact Message</h1>
            <p style="margin: 8px 0 0; color: rgba(255,255,255,0.8); font-size: 14px;">Someone sent you a message via your portfolio</p>
          </div>

          <div style="padding: 32px 40px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #2d2d5e; color: #94a3b8; font-size: 13px; width: 100px; vertical-align: top;">👤 Name</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #2d2d5e; font-weight: 600; font-size: 15px;">${body.name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #2d2d5e; color: #94a3b8; font-size: 13px; vertical-align: top;">📧 Email</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #2d2d5e;">
                  <a href="mailto:${body.email}" style="color: #818cf8; text-decoration: none;">${body.email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 16px 0 0; color: #94a3b8; font-size: 13px; vertical-align: top;">💬 Message</td>
                <td style="padding: 16px 0 0;"></td>
              </tr>
            </table>

            <div style="background: #1a1a2e; border: 1px solid #2d2d5e; border-radius: 8px; padding: 20px; margin-top: 8px; line-height: 1.7; font-size: 15px; white-space: pre-wrap;">${body.message}</div>

            <div style="margin-top: 32px; text-align: center;">
              <a href="mailto:${body.email}?subject=Re: Your message on Sagor's Portfolio" 
                 style="display: inline-block; background: linear-gradient(135deg, #6366f1, #8b5cf6); color: #fff; font-weight: 600; text-decoration: none; padding: 14px 32px; border-radius: 8px; font-size: 15px;">
                ↩️ Reply to ${body.name}
              </a>
            </div>
          </div>

          <div style="padding: 20px 40px; border-top: 1px solid #2d2d5e; text-align: center; color: #475569; font-size: 12px;">
            Sent at ${new Date().toLocaleString('en-BD', { timeZone: 'Asia/Dhaka' })} (Dhaka time) · Sagor Ahmed Portfolio
          </div>
        </div>
      `,
    });

    // 3. Send auto-reply to the sender
    await transporter.sendMail({
      from: `"Sagor Ahmed" <${process.env.EMAIL_USER}>`,
      to: body.email,
      subject: `Thanks for reaching out, ${body.name}! 🙏`,
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0f0f1a; color: #e2e8f0; border-radius: 12px; overflow: hidden; border: 1px solid #2d2d5e;">
          <div style="background: linear-gradient(135deg, #6366f1, #8b5cf6); padding: 32px 40px; text-align: center;">
            <h1 style="margin: 0; font-size: 24px; color: #fff;">Thanks for reaching out! 🙏</h1>
          </div>
          <div style="padding: 32px 40px; line-height: 1.8;">
            <p>Hi <strong>${body.name}</strong>,</p>
            <p>I've received your message and will get back to you as soon as possible — usually within a few hours.</p>
            <p style="background: #1a1a2e; border: 1px solid #2d2d5e; border-radius: 8px; padding: 16px; font-style: italic; color: #94a3b8;">"${body.message}"</p>
            <p>In the meantime, feel free to connect with me on WhatsApp: <a href="https://wa.me/8801960795537" style="color: #818cf8;">+880 1960 795537</a></p>
            <p style="margin-top: 32px;">Best regards,<br><strong>Sagor Ahmed</strong><br><span style="color: #94a3b8; font-size: 13px;">Full Stack Developer · Dhaka, Bangladesh</span></p>
          </div>
          <div style="padding: 20px 40px; border-top: 1px solid #2d2d5e; text-align: center; color: #475569; font-size: 12px;">
            This is an automated confirmation. Please do not reply to this email.
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true, contact }, { status: 201 });
  } catch (error) {
    console.error('Contact error:', error);
    return NextResponse.json({ error: 'Failed to submit form' }, { status: 500 });
  }
}

export async function GET(request) {
  try {
    const contacts = await prisma.contact.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json(contacts);
  } catch (error) {
    return NextResponse.json({ error: 'Failed' }, { status: 500 });
  }
}
