'use client';

import { useState } from 'react';
import Link from 'next/link';
import { createBrowserClient } from '@/lib/supabase-browser';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError('');
    setMessage('');

    const supabase = createBrowserClient();
    const { error: resetError } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`
    });

    if (resetError) {
      setError(resetError.message);
      setLoading(false);
      return;
    }

    setMessage('If an account exists for that email, a password reset link has been sent.');
    setLoading(false);
  };

  return (
    <section className="space-y-4">
      <Link className="text-sm text-gray-600 hover:text-gray-900" href="/login">
        ← Back to login
      </Link>
      <section className="mx-auto max-w-md space-y-4 rounded-lg border border-line bg-surface p-6">
        <h1 className="text-xl font-semibold">Reset password</h1>
        <form className="space-y-4 pl-1" onSubmit={onSubmit}>
          <div className="space-y-2">
            <label htmlFor="email">Email</label>
            <input
              autoComplete="email"
              className="ml-1 w-[calc(100%-0.25rem)]"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              value={email}
            />
          </div>

          {message && <p className="text-sm text-green-700">{message}</p>}
          {error && <p className="text-sm text-red-600">{error}</p>}

          <button className="w-full bg-accent font-medium text-white" disabled={loading} type="submit">
            {loading ? 'Please wait...' : 'Send reset link'}
          </button>
        </form>
      </section>
    </section>
  );
}
