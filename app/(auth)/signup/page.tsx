import { redirect } from 'next/navigation';
import Link from 'next/link';
import { AuthForm } from '@/components/auth-form';
import { createServerClient } from '@/lib/supabase-server';

export default async function SignupPage() {
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
      <AuthForm mode="signup" />
    </section>
  );
}
