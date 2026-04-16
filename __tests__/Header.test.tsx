import { render, screen, fireEvent } from '@testing-library/react'
import Header from '../components/Header'
import { CartProvider } from '../components/CartContext'

const renderWithProviders = (component: React.ReactElement) => {
  return render(
    <CartProvider>
      {component}
    </CartProvider>
  )
}

describe('Header', () => {
  it('renders the store title as a link', () => {
    renderWithProviders(<Header />)

    const titleLink = screen.getByRole('link', { name: /fake store/i })
    expect(titleLink).toBeInTheDocument()
    expect(titleLink).toHaveAttribute('href', '/')
  })

  it('renders navigation links', () => {
    renderWithProviders(<Header />)

    expect(screen.getByRole('link', { name: /início/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /quem somos/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /contato/i })).toBeInTheDocument()
  })

  it('renders cart button with initial count', () => {
    renderWithProviders(<Header />)

    const cartButton = screen.getByRole('button', { name: /carrinho \(0\)/i })
    expect(cartButton).toBeInTheDocument()
  })

  it('opens cart drawer when cart button is clicked', () => {
    renderWithProviders(<Header />)

    const cartButton = screen.getByRole('button', { name: /carrinho \(0\)/i })
    fireEvent.click(cartButton)

    // The drawer should be in the document when opened
    expect(screen.getByText('Carrinho')).toBeInTheDocument()
  })
})