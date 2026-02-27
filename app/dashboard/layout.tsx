import { redirect } from 'next/navigation';
import { DashboardBackLink } from '@/components/dashboard-back-link';
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
        <DashboardBackLink />
      </div>
      {children}
    </section>
  );
}
