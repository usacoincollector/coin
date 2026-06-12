import { cookies } from 'next/headers';
import { createServerClient as createClient } from '@supabase/ssr';
import { getSupabaseConfig } from '@/lib/supabase-config';

export function createRouteClient() {
  const cookieStore = cookies();
  const { url, anonKey } = getSupabaseConfig();

  return createClient(
    url,
    anonKey,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
        set(name: string, value: string, options: Record<string, unknown>) {
          cookieStore.set({ name, value, ...options });
        },
        remove(name: string, options: Record<string, unknown>) {
          cookieStore.set({ name, value: '', ...options });
        }
      }
    }
  );
}
