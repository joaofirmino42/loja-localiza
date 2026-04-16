import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { CartProvider, useCart } from '../components/CartContext'
import { Product } from '../types'

const mockProduct: Product = {
  id: 1,
  title: 'Test Product',
  price: 99.99,
  description: 'A test product description',
  category: 'electronics',
  image: 'https://example.com/image.jpg',
  rating: {
    rate: 4.5,
    count: 10,
  },
}

function CartConsumer() {
  const { cartItems, totalItems, addToCart, removeFromCart, clearCart } = useCart()

  return (
    <div>
      <div>Itens: {totalItems}</div>
      <button type="button" onClick={() => addToCart(mockProduct)}>
        Adicionar
      </button>
      <button type="button" onClick={() => removeFromCart(mockProduct.id)}>
        Remover
      </button>
      <button type="button" onClick={clearCart}>
        Limpar
      </button>
      <div>{cartItems.length > 0 ? `Quantidade: ${cartItems[0].quantity}` : 'Nenhum item'}</div>
    </div>
  )
}

describe('CartContext', () => {
  it('starts with an empty cart and updates totalItems correctly', () => {
    render(
      <CartProvider>
        <CartConsumer />
      </CartProvider>
    )

    expect(screen.getByText('Itens: 0')).toBeInTheDocument()
    expect(screen.getByText('Nenhum item')).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: /Adicionar/i }))
    expect(screen.getByText('Itens: 1')).toBeInTheDocument()
    expect(screen.getByText('Quantidade: 1')).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: /Adicionar/i }))
    expect(screen.getByText('Itens: 2')).toBeInTheDocument()
    expect(screen.getByText('Quantidade: 2')).toBeInTheDocument()
  })

  it('removes items and clears the cart', () => {
    render(
      <CartProvider>
        <CartConsumer />
      </CartProvider>
    )

    fireEvent.click(screen.getByRole('button', { name: /Adicionar/i }))
    expect(screen.getByText('Itens: 1')).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: /Remover/i }))
    expect(screen.getByText('Itens: 0')).toBeInTheDocument()
    expect(screen.getByText('Nenhum item')).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: /Adicionar/i }))
    expect(screen.getByText('Itens: 1')).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: /Limpar/i }))
    expect(screen.getByText('Itens: 0')).toBeInTheDocument()
    expect(screen.getByText('Nenhum item')).toBeInTheDocument()
  })
})
