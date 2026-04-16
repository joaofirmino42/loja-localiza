import { fireEvent, render, screen } from '@testing-library/react'
import BuyButton from '../components/BuyButton'

describe('BuyButton', () => {
  it('renders the buy button initially', () => {
    render(<BuyButton />)

    const button = screen.getByRole('button', { name: /Comprar agora/i })
    expect(button).toBeInTheDocument()
    expect(button).not.toBeDisabled()
  })

  it('shows success message after clicking buy button', () => {
    render(<BuyButton />)

    const button = screen.getByRole('button', { name: /Comprar agora/i })
    fireEvent.click(button)

    expect(screen.getByText('Compra realizada com sucesso')).toBeInTheDocument()
    expect(button).toHaveTextContent('Compra finalizada')
    expect(button).toBeDisabled()
  })
})