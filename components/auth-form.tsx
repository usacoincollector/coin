'use client';

import { useEffect, useState } from 'react';
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
  const [message, setMessage] = useState('');
  const [showVerifyPopup, setShowVerifyPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const duplicateEmailError =
    'This email address already has an account, please use the Forgot password link to reset your password.';

  useEffect(() => {
    if (mode !== 'login') return;

    if (emailVerified) {
      setMessage('Your email was verified successfully. You can now log in.');
    } else if (passwordReset) {
      setMessage('Your password was reset successfully. You can now log in.');
    }
  }, [emailVerified, mode, passwordReset]);

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError('');
    setMessage('');
    setShowVerifyPopup(false);

    const supabase = createBrowserClient();

    if (mode === 'signup') {
      try {
        const existsResponse = await fetch('/api/auth/check-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email })
        });

        const existsJson = await existsResponse.json();
        if (existsResponse.ok && existsJson.exists) {
          setError(duplicateEmailError);
          setLoading(false);
          return;
        }
      } catch (err) {
        // If server-side email precheck is unavailable, continue with normal signup flow.
        console.log('Email precheck unavailable, continuing signup flow.', err);
      }
    }

    const { data, error: authError } =
      mode === 'login'
        ? await supabase.auth.signInWithPassword({ email, password })
        : await supabase.auth.signUp({
            email,
            password,
            options: {
              emailRedirectTo: `${window.location.origin}/login?verified=1`
            }
          });

    if (authError) {
      if (mode === 'signup' && authError.message.toLowerCase().includes('already')) {
        setError(duplicateEmailError);
      } else {
        setError(authError.message);
      }
      setLoading(false);
      return;
    }

    if (mode === 'signup' && !data.session) {
      // Supabase can return a user without identities for already-registered emails.
      const existingUserSignup = data.user && Array.isArray(data.user.identities) && data.user.identities.length === 0;

      if (existingUserSignup) {
        setError(duplicateEmailError);
        setLoading(false);
        return;
      }

      setMessage('Check your email for the verification link, then return to log in.');
      setShowVerifyPopup(true);
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
        <div className="space-y-2">
          <label htmlFor="email">Email</label>
          <input
            autoComplete="email"
            className="ml-4"
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
            className="ml-4"
            id="password"
            minLength={8}
            onChange={(e) => setPassword(e.target.value)}
            required
            type="password"
            value={password}
          />
        </div>

        {error && <p className="text-sm text-red-600">{error}</p>}
        {message && <p className="text-sm text-green-700">{message}</p>}
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
          {' · '}
          <Link className="underline" href="/forgot-password">
            Forgot password?
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

      {mode === 'signup' && showVerifyPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-md rounded-lg border border-line bg-white p-5 shadow-xl">
            <h2 className="text-lg font-semibold text-gray-900">Verify Your Email</h2>
            <p className="mt-2 text-sm text-gray-700">
              We sent a verification email to <span className="font-semibold">{email}</span>. Please click the link in
              that email to activate your account.
            </p>
            <div className="mt-4 flex gap-2">
              <button
                className="w-full border border-line bg-white font-medium text-gray-800 hover:bg-gray-50"
                onClick={() => setShowVerifyPopup(false)}
                type="button"
              >
                Close
              </button>
              <Link className="w-full bg-accent px-3 py-2 text-center font-medium text-white" href="/login">
                Go to Login
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
