'use client';

import Link from 'next/link';
import { useState } from 'react';
import { createBrowserClient } from '@/lib/supabase-browser';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const supabase = createBrowserClient();
      const { error: resetError } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/login`
      });

      if (resetError) {
        throw resetError;
      }

      setSuccess('Password reset email sent. Please check your inbox.');
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Unable to send reset email right now.';
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="space-y-4">
      <Link className="text-sm text-gray-600 hover:text-gray-900" href="/login">
        {'<- Back to login'}
      </Link>

      <section className="mx-auto max-w-md space-y-4 rounded-lg border border-line bg-surface p-6">
        <h1 className="text-xl font-semibold">Forgot Password</h1>
        <form className="space-y-4" onSubmit={onSubmit}>
          <div className="space-y-1">
            <label htmlFor="email">Email</label>
            <input
              autoComplete="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              value={email}
            />
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}
          {success && <p className="text-sm text-green-700">{success}</p>}

          <button className="w-full bg-accent font-medium text-white" disabled={loading} type="submit">
            {loading ? 'Please wait...' : 'Send Reset Link'}
          </button>
        </form>
      </section>
    </section>
  );
}
