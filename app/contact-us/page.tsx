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
        body: JSON.stringify({ name, email, message, website: '' })
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
    <section className="space-y-8">
      <div className="flex items-center justify-between gap-3">
        <Link className="text-sm text-slate-700 hover:text-slate-900" href="/">
          {'<- Back to homepage'}
        </Link>
      </div>

      <article className="rounded-lg border border-slate-200 bg-white p-7 shadow-sm md:p-9">
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
          Contact Us
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
          Send us a message about products, sizing, or your order and we will get back to you as soon as possible.
        </p>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-500">
          We typically reply to all inquires within 24 hours.
        </p>
      </article>

      <form className="space-y-5 rounded-lg border border-slate-200 bg-white p-6 shadow-sm" onSubmit={onSubmit}>
        <input autoComplete="off" className="hidden" name="website" tabIndex={-1} type="text" />
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-1">
            <label htmlFor="name">Name</label>
            <input
              autoComplete="name"
              className="w-full"
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
              className="w-full"
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
          className="bg-[#102a63] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#183b82] disabled:cursor-not-allowed disabled:opacity-70"
          disabled={loading}
          type="submit"
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </section>
  );
}
