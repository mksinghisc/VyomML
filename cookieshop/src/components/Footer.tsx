export default function Footer() {
  return (
    <footer className="border-t mt-12">
      <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-gray-600">
        © {new Date().getFullYear()} Cookie Co. All rights reserved.
      </div>
    </footer>
  )
}