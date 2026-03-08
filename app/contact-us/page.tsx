'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function ContactUsPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message })
      });

      const json = await response.json();

      if (!response.ok) {
        throw new Error(json.error || 'Unable to send message right now.');
      }

      setSuccess('Message sent successfully. We will get back to you soon.');
      setName('');
      setEmail('');
      setMessage('');
    } catch (err) {
      const messageText = err instanceof Error ? err.message : 'Unable to send message right now.';
      setError(messageText);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="space-y-6 [font-family:'Trebuchet_MS','Lucida_Sans_Unicode','Lucida_Grande','Verdana',sans-serif]">
      <div className="flex items-center justify-between gap-3">
        <Link className="text-sm text-slate-700 hover:text-slate-900" href="/">
          {'<- Back to homepage'}
        </Link>
      </div>

      <article className="rounded-2xl border border-blue-900/20 bg-gradient-to-br from-[#12377a] via-[#17539d] to-[#2e92d6] p-8 text-white">
        <p className="inline-block rounded-full border border-white/45 bg-white/10 px-4 py-1 text-xs tracking-[0.22em]">
          CONTACT USA COIN COLLECTOR
        </p>
        <h1 className="mt-3 text-5xl leading-tight [font-family:'Impact','Haettenschweiler','Arial_Narrow_Bold',sans-serif]">
          Contact Us
        </h1>
        <p className="mt-3 max-w-3xl text-lg text-blue-50">
          Send us a message about products, sizing, or your order and we will get back to you as soon as possible.
        </p>
      </article>

      <form className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6" onSubmit={onSubmit}>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-1">
            <label htmlFor="name">Name</label>
            <input
              autoComplete="name"
              id="name"
              name="name"
              onChange={(e) => setName(e.target.value)}
              required
              type="text"
              value={name}
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="email">Email</label>
            <input
              autoComplete="email"
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              value={email}
            />
          </div>
        </div>

        <div className="space-y-1">
          <label htmlFor="message">Message</label>
          <textarea
            className="w-full"
            id="message"
            name="message"
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={7}
            value={message}
          />
        </div>

        {error && <p className="text-sm text-red-600">{error}</p>}
        {success && <p className="text-sm text-green-700">{success}</p>}

        <button
          className="bg-[#102a63] px-5 py-3 text-sm font-semibold text-white hover:bg-[#1a3d86]"
          disabled={loading}
          type="submit"
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </section>
  );
}
