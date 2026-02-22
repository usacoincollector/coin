import Link from 'next/link';
import { redirect } from 'next/navigation';
import { createServerClient } from '@/lib/supabase-server';

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const supabase = createServerClient();
  const {
    data: { user }
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/login');
  }

  return (
    <section className="space-y-4">
      <div>
        <Link className="text-sm text-gray-600 hover:text-gray-900" href="/">
          ← Back to homepage
        </Link>
      </div>
      {children}
    </section>
  );
}
