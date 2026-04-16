import { render, screen } from '@testing-library/react'
import Footer from '../components/Footer'

describe('Footer', () => {
  it('renders social media follow text', () => {
    render(<Footer />)

    expect(screen.getByText('Acompanhe nossas redes sociais')).toBeInTheDocument()
  })

  it('renders copyright text', () => {
    render(<Footer />)

    expect(screen.getByText('© 2026 Fake Store. Todos os direitos reservados.')).toBeInTheDocument()
  })

  it('renders social media icons with correct links', () => {
    render(<Footer />)

    const instagramLink = screen.getByRole('link', { name: /instagram/i })
    const facebookLink = screen.getByRole('link', { name: /facebook/i })

    expect(instagramLink).toBeInTheDocument()
    expect(facebookLink).toBeInTheDocument()

    expect(instagramLink).toHaveAttribute('href', 'https://instagram.com')
    expect(facebookLink).toHaveAttribute('href', 'https://facebook.com')

    expect(instagramLink).toHaveAttribute('target', '_blank')
    expect(facebookLink).toHaveAttribute('target', '_blank')
  })
})