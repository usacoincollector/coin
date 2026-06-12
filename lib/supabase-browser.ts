import { createBrowserClient as createClient } from '@supabase/ssr';
import { getSupabaseConfig } from '@/lib/supabase-config';

export function createBrowserClient() {
  const { url, anonKey } = getSupabaseConfig();

  return createClient(url, anonKey);
}
