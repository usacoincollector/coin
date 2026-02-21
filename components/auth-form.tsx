'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { createBrowserClient } from '@/lib/supabase-browser';

export function AuthForm({ mode }: { mode: 'login' | 'signup' }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    const supabase = createBrowserClient();

    const { error: authError } =
      mode === 'login'
        ? await supabase.auth.signInWithPassword({ email, password })
        : await supabase.auth.signUp({ email, password });

    if (authError) {
      setError(authError.message);
      setLoading(false);
      return;
    }

    router.push('/dashboard');
    router.refresh();
  };

  return (
    <section className="mx-auto max-w-md space-y-4 rounded-lg border border-line bg-surface p-6">
      <h1 className="text-xl font-semibold">{mode === 'login' ? 'Log in' : 'Create account'}</h1>
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
        <div className="space-y-1">
          <label htmlFor="password">Password</label>
          <input
            autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
            id="password"
            minLength={8}
            onChange={(e) => setPassword(e.target.value)}
            required
            type="password"
            value={password}
          />
        </div>

        {error && <p className="text-sm text-red-600">{error}</p>}

        <button className="w-full bg-accent font-medium text-white" disabled={loading} type="submit">
          {loading ? 'Please wait...' : mode === 'login' ? 'Log in' : 'Create account'}
        </button>
      </form>

      {mode === 'login' ? (
        <p className="text-sm text-gray-600">
          Need an account?{' '}
          <Link className="underline" href="/signup">
            Sign up
          </Link>
        </p>
      ) : (
        <p className="text-sm text-gray-600">
          Already have an account?{' '}
          <Link className="underline" href="/login">
            Log in
          </Link>
        </p>
      )}
    </section>
  );
}
