'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { createBrowserClient } from '@/lib/supabase-browser';

type AuthFormProps = {
  mode: 'login' | 'signup';
  emailVerified?: boolean;
  passwordReset?: boolean;
};

export function AuthForm({ mode, emailVerified = false, passwordReset = false }: AuthFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [notice, setNotice] = useState(
    emailVerified
      ? 'Email address verified successfully!'
      : passwordReset
        ? 'Password reset successfully. Log in with your new password.'
        : ''
  );
  const router = useRouter();

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError('');
    setNotice('');

    const supabase = createBrowserClient();

    const { data, error: authError } =
      mode === 'login'
        ? await supabase.auth.signInWithPassword({ email, password })
        : await supabase.auth.signUp({
            email,
            password,
            options: {
              emailRedirectTo: `${window.location.origin}/login?emailVerified=1`
            }
          });

    if (authError) {
      setError(authError.message);
      setLoading(false);
      return;
    }

    if (mode === 'signup') {
      const accountAlreadyExists = Array.isArray(data?.user?.identities) && data.user.identities.length === 0;

      if (accountAlreadyExists) {
        window.alert(
          'An account with this email address already exists. If you forgot your password, use the Forgot password link on the login page.'
        );
        setLoading(false);
        return;
      }

      window.alert(
        "Account created successfully! We've sent a verification link to your email address. Please verify your email address before logging in."
      );
      router.push('/login');
      router.refresh();
      return;
    }

    router.push('/dashboard');
    router.refresh();
  };

  return (
    <section className="mx-auto max-w-md space-y-4 rounded-lg border border-line bg-surface p-6">
      <h1 className="text-xl font-semibold">{mode === 'login' ? 'Log in' : 'Create account'}</h1>
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
        <div className="space-y-2">
          <label htmlFor="password">Password</label>
          <input
            autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
            className="ml-1 w-[calc(100%-0.25rem)]"
            id="password"
            minLength={8}
            onChange={(e) => setPassword(e.target.value)}
            required
            type="password"
            value={password}
          />
        </div>

        {notice && <p className="text-sm text-green-700">{notice}</p>}
        {error && <p className="text-sm text-red-600">{error}</p>}

        <button className="w-full bg-accent font-medium text-white" disabled={loading} type="submit">
          {loading ? 'Please wait...' : mode === 'login' ? 'Log in' : 'Create account'}
        </button>
      </form>

      {mode === 'login' ? (
        <div className="flex items-center justify-between gap-2 text-sm text-gray-600">
          <p>
            Need an account?{' '}
            <Link className="underline" href="/signup">
              Sign up
            </Link>
          </p>
          <Link className="underline" href="/forgot-password">
            Forgot password?
          </Link>
        </div>
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
