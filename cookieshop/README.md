# Cookie Co

A simple cookie store built with Next.js (App Router), Tailwind CSS, and Stripe Checkout.

## Setup

1. Copy env example:

```bash
cp .env.local.example .env.local
```

2. Add your Stripe Secret Key to `.env.local` (use a test key like `sk_test_...`).

3. Install dependencies and run dev:

```bash
npm install
npm run dev
```

4. Open http://localhost:3000

## Notes
- Products are defined in `src/lib/products.ts`. Prices are in cents.
- Checkout session is created server-side in `src/app/api/checkout/route.ts` using on-the-fly price data.
- Cart state persists to localStorage and opens as a right-hand drawer.