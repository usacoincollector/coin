# Coin Shield Digital Vault (MVP)

Simple web app for collectors to track a personal coin collection.

## Stack

- Next.js (App Router)
- React + Tailwind CSS
- Supabase (Auth, Postgres, Storage)
- Stripe (stubbed endpoint for subscription-ready expansion)
- Deploy target: Vercel

## 1. Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy environment variables:
   ```bash
   cp .env.example .env.local
   ```
   On Windows PowerShell:
   ```powershell
   Copy-Item .env.example .env.local
   ```
3. Fill `.env.local` with your Supabase and Stripe keys.
4. In Supabase:
   - Enable Email/Password auth provider.
   - Run `supabase/schema.sql` in SQL Editor.
5. Run the app:
   ```bash
   npm run dev
   ```
6. Open `http://localhost:3000`.

## 2. Database

`supabase/schema.sql` creates:

- `public.coins` table
- `updated_at` trigger
- RLS policies so users can only CRUD their own rows
- Storage bucket `coin-images` with per-user upload/delete policies

## 3. Environment Variables

Use `.env.example`:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY` (reserved for future admin/server tasks)
- `NEXT_PUBLIC_APP_URL`
- `STRIPE_SECRET_KEY`
- `STRIPE_WEBHOOK_SECRET`

## 4. Routes

- `/` landing page
- `/digitalvault` app entry page
- `/login` login
- `/signup` signup
- `/dashboard` protected collection view
- `/dashboard/coins/new` add coin
- `/dashboard/coins/[id]/edit` edit coin
- `/api/coins` create coin
- `/api/coins/[id]` update/delete coin
- `/api/coins/export` CSV export
- `/api/upload` 1-3 image uploads
- `/api/stripe/checkout` Stripe subscription stub

## 5. Security

- Supabase RLS on `coins`
- Per-user storage upload/delete policy using path prefix (`{user_id}/...`)
- Input validation with `zod` on client and server
- Session refresh middleware for protected routes/API

## 6. Vercel Deployment

1. Push this repo to GitHub.
2. In Vercel, import the repo.
3. Add environment variables from `.env.example`.
4. Deploy.
5. In Supabase Auth settings, add your Vercel domain to Site URL and Redirect URLs.

## 7. MVP Scope Included

- Email/password authentication
- Protected dashboard
- Add/edit/delete coins
- Upload up to 3 images per coin
- CSV export
- Basic Stripe-ready stub (no live billing flow yet)

## 8. Non-goals Excluded

- Social features
- Price APIs
- AI valuation
- Advanced analytics
- Notifications
- Native mobile apps
