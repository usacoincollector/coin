'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { createBrowserClient } from '@/lib/supabase-browser';

export default function ResetPasswordPage() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    if (password.length < 8) {
      setError('Password must be at least 8 characters long.');
      setLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      setLoading(false);
      return;
    }

    const supabase = createBrowserClient();
    const { error: updateError } = await supabase.auth.updateUser({ password });

    if (updateError) {
      setError(updateError.message);
      setLoading(false);
      return;
    }

    router.push('/login?passwordReset=1');
    router.refresh();
  };

  return (
    <section className="space-y-4">
      <Link className="text-sm text-gray-600 hover:text-gray-900" href="/login">
        ← Back to login
      </Link>
      <section className="mx-auto max-w-md space-y-4 rounded-lg border border-line bg-surface p-6">
        <h1 className="text-xl font-semibold">Set new password</h1>
        <form className="space-y-4 pl-1" onSubmit={onSubmit}>
          <div className="space-y-2">
            <label htmlFor="password">New password</label>
            <input
              autoComplete="new-password"
              className="ml-1 w-[calc(100%-0.25rem)]"
              id="password"
              minLength={8}
              onChange={(e) => setPassword(e.target.value)}
              required
              type="password"
              value={password}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="confirmPassword">Confirm new password</label>
            <input
              autoComplete="new-password"
              className="ml-1 w-[calc(100%-0.25rem)]"
              id="confirmPassword"
              minLength={8}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              type="password"
              value={confirmPassword}
            />
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}

          <button className="w-full bg-accent font-medium text-white" disabled={loading} type="submit">
            {loading ? 'Please wait...' : 'Update password'}
          </button>
        </form>
      </section>
    </section>
  );
}
