import { cookies } from 'next/headers';
import { createServerClient as createClient } from '@supabase/ssr';
import { getSupabaseConfig } from '@/lib/supabase-config';

export async function createServerClient() {
  const cookieStore = await cookies();
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
          try {
            cookieStore.set({ name, value, ...options });
          } catch {
            // Server Components can read cookies but cannot always set them.
          }
        },
        remove(name: string, options: Record<string, unknown>) {
          try {
            cookieStore.set({ name, value: '', ...options });
          } catch {
            // Server Components can read cookies but cannot always set them.
          }
        }
      }
    }
  );
}
