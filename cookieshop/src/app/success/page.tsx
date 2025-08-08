export default function SuccessPage() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-16 text-center">
      <h1 className="text-3xl font-bold">Thank you for your order! 🍪</h1>
      <p className="text-gray-600 mt-2">A confirmation email is on its way. We are baking your cookies!</p>
      <a href="/" className="inline-block mt-6 px-4 py-2 rounded-md bg-brand text-white hover:bg-brand-dark">Back to shop</a>
    </main>
  )
}