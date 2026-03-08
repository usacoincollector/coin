import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { z } from 'zod';

const schema = z.object({
  email: z.string().trim().email()
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = schema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: 'Invalid email.' }, { status: 400 });
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !serviceRoleKey) {
      return NextResponse.json({ error: 'Server auth configuration is missing.' }, { status: 500 });
    }

    const adminClient = createClient(supabaseUrl, serviceRoleKey, {
      auth: { autoRefreshToken: false, persistSession: false }
    });

    const email = parsed.data.email.toLowerCase();
    const perPage = 200;
    let page = 1;
    let exists = false;

    while (page <= 20) {
      const { data, error } = await adminClient.auth.admin.listUsers({ page, perPage });
      if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
      }

      if (!data?.users?.length) {
        break;
      }

      if (data.users.some((user) => user.email?.toLowerCase() === email)) {
        exists = true;
        break;
      }

      if (data.users.length < perPage) {
        break;
      }

      page += 1;
    }

    return NextResponse.json({ exists });
  } catch {
    return NextResponse.json({ error: 'Unable to check email right now.' }, { status: 500 });
  }
}
