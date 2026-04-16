'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'
import { CartProvider } from './CartContext'

export default function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <CartProvider>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </CartProvider>
  )
}