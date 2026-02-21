import { NextResponse } from 'next/server';
import { createRouteClient } from '@/lib/supabase-route';
import { getStripeClient } from '@/lib/stripe';

export async function POST() {
  const supabase = createRouteClient();
  const {
    data: { user }
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const stripe = getStripeClient();

  if (!stripe) {
    return NextResponse.json(
      {
        error: 'Stripe is not configured. Add STRIPE_SECRET_KEY to enable subscriptions.'
      },
      { status: 501 }
    );
  }

  return NextResponse.json(
    {
      message: 'Subscription checkout is stubbed in MVP v1.',
      customer_email: user.email
    },
    { status: 501 }
  );
}
