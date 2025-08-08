import type { Metadata } from 'next'
import './globals.css'
import { CartProvider } from '@/components/cart/CartProvider'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Cookie Co | Fresh Cookies Delivered',
  description: 'Delicious cookies baked fresh and delivered to your door.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <CartProvider>
          <Header />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}