export default function CancelPage() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-16 text-center">
      <h1 className="text-3xl font-bold">Checkout canceled</h1>
      <p className="text-gray-600 mt-2">No worries—your cart is saved. You can complete your purchase anytime.</p>
      <a href="/" className="inline-block mt-6 px-4 py-2 rounded-md bg-brand text-white hover:bg-brand-dark">Return to shop</a>
    </main>
  )
}