import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().trim().min(1),
  email: z.string().trim().email(),
  message: z.string().trim().min(1)
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: 'Please fill in all required fields.' }, { status: 400 });
    }

    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
    const contactTo = process.env.CONTACT_TO_EMAIL || 'usacoincollector.amazon@gmail.com';

    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
      return NextResponse.json(
        { error: 'Contact email is not configured on the server yet.' },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: Number(SMTP_PORT) === 465,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS
      }
    });

    const safeMessage = parsed.data.message.replace(/\r\n/g, '\n').trim();

    await transporter.sendMail({
      from: `"USA Coin Collector Contact Form" <${SMTP_USER}>`,
      to: contactTo,
      replyTo: parsed.data.email,
      subject: `Contact Form: ${parsed.data.name}`,
      text: `Name: ${parsed.data.name}\nEmail: ${parsed.data.email}\n\nMessage:\n${safeMessage}`
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Unable to send message right now. Please try again.' }, { status: 500 });
  }
}
