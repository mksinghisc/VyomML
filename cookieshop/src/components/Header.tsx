"use client"

import Link from 'next/link'
import { useCart } from './cart/CartProvider'

export default function Header() {
  const { itemCount, toggle } = useCart()

  return (
    <header className="border-b bg-white">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold">Cookie Co</Link>
        <nav className="flex items-center gap-4">
          <Link href="/" className="text-sm text-gray-700 hover:text-gray-900">Shop</Link>
          <button onClick={toggle} className="relative text-sm px-3 py-1 rounded-md border hover:bg-gray-50">
            Cart
            {itemCount > 0 && (
              <span className="ml-2 inline-flex items-center justify-center text-xs rounded-full bg-brand text-white w-5 h-5">
                {itemCount}
              </span>
            )}
          </button>
        </nav>
      </div>
    </header>
  )
}