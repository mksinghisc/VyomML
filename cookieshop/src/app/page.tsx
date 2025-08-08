import ProductCard from '@/components/ProductCard'
import CartDrawer from '@/components/cart/CartDrawer'
import { products } from '@/lib/products'

export default function HomePage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <section className="mb-10">
        <h1 className="text-3xl font-bold">Freshly Baked Cookies</h1>
        <p className="text-gray-600 mt-2">Small-batch treats shipped the same day</p>
      </section>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </section>
      <CartDrawer />
    </main>
  )
}