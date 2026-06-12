import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email(),
  message: z.string().trim().min(1).max(5000),
  website: z.string().optional()
});

const rateLimitWindowMs = 60 * 60 * 1000;
const maxMessagesPerWindow = 5;
const contactAttempts = new Map<string, { count: number; resetAt: number }>();

function getClientKey(request: Request) {
  const forwardedFor = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim();
  return forwardedFor || request.headers.get('x-real-ip') || 'unknown';
}

function isRateLimited(key: string) {
  const now = Date.now();
  const current = contactAttempts.get(key);

  if (!current || current.resetAt < now) {
    contactAttempts.set(key, { count: 1, resetAt: now + rateLimitWindowMs });
    return false;
  }

  current.count += 1;
  return current.count > maxMessagesPerWindow;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: 'Please fill in all required fields.' }, { status: 400 });
    }

    if (parsed.data.website) {
      return NextResponse.json({ ok: true });
    }

    if (isRateLimited(getClientKey(request))) {
      return NextResponse.json({ error: 'Too many messages. Please try again later.' }, { status: 429 });
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
    const safeName = parsed.data.name.replace(/[\r\n]/g, ' ').trim();

    await transporter.sendMail({
      from: `"USA Coin Collector Contact Form" <${SMTP_USER}>`,
      to: contactTo,
      replyTo: parsed.data.email,
      subject: `Contact Form: ${safeName}`,
      text: `Name: ${safeName}\nEmail: ${parsed.data.email}\n\nMessage:\n${safeMessage}`
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Unable to send message right now. Please try again.' }, { status: 500 });
  }
}
