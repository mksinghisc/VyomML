"use client"

import Image from 'next/image'
import { Product } from '@/lib/products'
import { useCart } from './cart/CartProvider'

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart()

  return (
    <div className="rounded-lg border border-gray-200 overflow-hidden bg-white shadow-sm flex flex-col">
      <div className="relative h-48 w-full">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={product.image} alt={product.name} className="object-cover w-full h-full" />
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-sm text-gray-600 mt-1 flex-1">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-base font-medium">${(product.price / 100).toFixed(2)}</span>
          <button
            className="px-4 py-2 rounded-md bg-brand text-white hover:bg-brand-dark transition"
            onClick={() => addItem({ id: product.id, name: product.name, price: product.price, image: product.image })}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  )
}