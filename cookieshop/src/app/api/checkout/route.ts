import { NextResponse } from 'next/server'
import Stripe from 'stripe'
import { headers } from 'next/headers'

export const runtime = 'nodejs'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2023-10-16',
})

export async function POST(req: Request) {
  try {
    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json({ error: 'Missing STRIPE_SECRET_KEY' }, { status: 500 })
    }

    const { items } = await req.json()
    if (!Array.isArray(items) || items.length === 0) {
      return NextResponse.json({ error: 'No items to checkout' }, { status: 400 })
    }

    const origin = headers().get('origin') || 'http://localhost:3000'

    const line_items = items.map((i: { name: string; price: number; quantity: number }) => ({
      price_data: {
        currency: 'usd',
        product_data: { name: i.name },
        unit_amount: i.price,
      },
      quantity: i.quantity,
      adjustable_quantity: { enabled: true, minimum: 1, maximum: 20 },
    }))

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      line_items,
      success_url: `${origin}/success`,
      cancel_url: `${origin}/cancel`,
    })

    return NextResponse.json({ checkoutUrl: session.url })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Checkout failed' }, { status: 500 })
  }
}