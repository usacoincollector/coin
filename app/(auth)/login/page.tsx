import { redirect } from 'next/navigation';
import Link from 'next/link';
import { AuthForm } from '@/components/auth-form';
import { createServerClient } from '@/lib/supabase-server';

type LoginPageProps = {
  searchParams?: { emailVerified?: string; passwordReset?: string };
};

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const supabase = createServerClient();
  const {
    data: { user }
  } = await supabase.auth.getUser();

  if (user) {
    redirect('/dashboard');
  }

  return (
    <section className="space-y-4">
      <Link className="text-sm text-gray-600 hover:text-gray-900" href="/">
        ← Back to homepage
      </Link>
      <AuthForm
        emailVerified={searchParams?.emailVerified === '1'}
        mode="login"
        passwordReset={searchParams?.passwordReset === '1'}
      />
    </section>
  );
}
