'use client';

import { useRouter } from 'next/navigation';
import { createBrowserClient } from '@/lib/supabase-browser';

export function LogoutButton() {
  const router = useRouter();

  const onLogout = async () => {
    const supabase = createBrowserClient();
    await supabase.auth.signOut();
    router.push('/login');
    router.refresh();
  };

  return (
    <button className="px-4 py-2 text-sm font-medium" onClick={onLogout} type="button">
      Log out
    </button>
  );
}
