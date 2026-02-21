import { redirect } from 'next/navigation';
import { AuthForm } from '@/components/auth-form';
import { createServerClient } from '@/lib/supabase-server';

export default async function LoginPage() {
  const supabase = createServerClient();
  const {
    data: { user }
  } = await supabase.auth.getUser();

  if (user) {
    redirect('/dashboard');
  }

  return <AuthForm mode="login" />;
}
