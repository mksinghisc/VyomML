"use client"

import { useState } from 'react'
import { useCart } from './CartProvider'

export default function CartDrawer() {
  const { items, itemCount, totalCents, isOpen, close, removeItem, updateQuantity } = useCart()

  return (
    <div className={`fixed inset-0 z-40 ${isOpen ? '' : 'pointer-events-none'}`} aria-hidden={!isOpen}>
      <div
        className={`absolute inset-0 bg-black/40 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0'}`}
        onClick={close}
      />
      <aside
        className={`absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl transition-transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        role="dialog" aria-label="Cart Drawer"
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">Your Cart ({itemCount})</h2>
          <button className="text-sm text-gray-600 hover:text-gray-900" onClick={close}>Close</button>
        </div>
        <div className="p-4 space-y-4 overflow-y-auto h-[calc(100%-160px)]">
          {items.length === 0 && (
            <p className="text-sm text-gray-600">Your cart is empty.</p>
          )}
          {items.map(item => (
            <div key={item.id} className="flex gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md border" />
              <div className="flex-1">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="font-medium leading-tight">{item.name}</p>
                    <p className="text-sm text-gray-600">${(item.price / 100).toFixed(2)}</p>
                  </div>
                  <button className="text-xs text-red-600 hover:underline" onClick={() => removeItem(item.id)}>Remove</button>
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <button className="px-2 py-1 border rounded" onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                  <span className="text-sm w-6 text-center">{item.quantity}</span>
                  <button className="px-2 py-1 border rounded" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="p-4 border-t">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-gray-600">Subtotal</span>
            <span className="font-medium">${(totalCents / 100).toFixed(2)}</span>
          </div>
          <CheckoutButton disabled={items.length === 0} />
        </div>
      </aside>
    </div>
  )
}

function CheckoutButton({ disabled }: { disabled?: boolean }) {
  const { items } = useCart()
  const [loading, setLoading] = useState(false)

  const onCheckout = async () => {
    try {
      setLoading(true)
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items: items.map(i => ({ id: i.id, name: i.name, price: i.price, quantity: i.quantity })) })
      })
      if (!res.ok) throw new Error('Failed to start checkout')
      const data = await res.json()
      if (data.checkoutUrl) {
        window.location.href = data.checkoutUrl
      } else {
        throw new Error('No checkout url returned')
      }
    } catch (err) {
      console.error(err)
      alert('Checkout failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <button
      className="w-full px-4 py-2 rounded-md bg-brand text-white hover:bg-brand-dark disabled:opacity-50 disabled:cursor-not-allowed"
      disabled={disabled || loading}
      onClick={onCheckout}
    >
      {loading ? 'Redirecting…' : 'Checkout'}
    </button>
  )
}