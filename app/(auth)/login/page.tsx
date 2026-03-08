import { redirect } from 'next/navigation';
import Link from 'next/link';
import { AuthForm } from '@/components/auth-form';
import { EmailVerifiedPopup } from '@/components/email-verified-popup';
import { createServerClient } from '@/lib/supabase-server';

export default async function LoginPage() {
  const supabase = createServerClient();
  const {
    data: { user }
  } = await supabase.auth.getUser();

  if (user) {
    redirect('/dashboard');
  }

  return (
    <section className="space-y-4">
      <EmailVerifiedPopup />
      <Link className="text-sm text-gray-600 hover:text-gray-900" href="/">
        {'<- Back to homepage'}
      </Link>
      <AuthForm mode="login" />
    </section>
  );
}
