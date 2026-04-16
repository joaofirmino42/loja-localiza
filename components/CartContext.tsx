'use client'

import { createContext, useContext, useMemo, useState, type ReactNode } from 'react'
import { Product } from '../types'

export interface CartItem extends Product {
  quantity: number
}

interface CartContextValue {
  cartItems: CartItem[]
  totalItems: number
  addToCart: (product: Product) => void
  removeFromCart: (id: number) => void
  clearCart: () => void
}

const CartContext = createContext<CartContextValue | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  const addToCart = (product: Product) => {
    setCartItems((current) => {
      const existing = current.find((item) => item.id === product.id)
      if (existing) {
        return current.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      }

      return [...current, { ...product, quantity: 1 }]
    })
  }

  const removeFromCart = (id: number) => {
    setCartItems((current) => current.filter((item) => item.id !== id))
  }

  const clearCart = () => {
    setCartItems([])
  }

  const totalItems = useMemo(
    () => cartItems.reduce((total, item) => total + item.quantity, 0),
    [cartItems]
  )

  return (
    <CartContext.Provider value={{ cartItems, totalItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within CartProvider')
  }
  return context
}
