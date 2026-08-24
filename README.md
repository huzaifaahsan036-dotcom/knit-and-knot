# Knit & Knot — production storefront

Next.js + React + TypeScript + Tailwind + Supabase storefront for Knit & Knot.

## Included
- Premium pink/cream boutique UI using the supplied logo
- Product catalogue, search, category filters and sorting
- Product variants and stock
- Persistent local cart
- Server-authoritative COD checkout via Supabase RPC
- Inventory decremented inside a database transaction with row locks
- Guest order confirmation protected by a per-order lookup token
- Supabase Storage image buckets
- Supabase Auth + RLS + admin role
- Admin dashboard for products, categories, orders, homepage copy and image uploads
- Responsive mobile navigation
- Reduced-motion support
- SEO metadata, sitemap and robots

## Environment
Copy `.env.local.example` to `.env.local` and set:
- NEXT_PUBLIC_SUPABASE_URL
- NEXT_PUBLIC_SUPABASE_ANON_KEY
- NEXT_PUBLIC_SITE_URL

The included public publishable key fallback is only a convenience for the supplied Supabase project; set Vercel environment variables for production.
Never add a service-role key to client code.

## Admin bootstrap
1. Open `/auth` and create the owner account.
2. In Supabase SQL Editor, replace the email in `supabase/admin-bootstrap.sql` and run it once.
3. Sign in again and open `/admin`.

## Commands
npm install
npm run dev
npm run build
npm start
