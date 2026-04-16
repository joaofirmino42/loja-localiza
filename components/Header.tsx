'use client'

import { useState } from 'react'
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material'
import Link from 'next/link'
import { FaShoppingCart } from 'react-icons/fa'
import { useCart } from './CartContext'
import CartDrawer from './CartDrawer'

export default function Header() {
  const { totalItems } = useCart()
  const [drawerOpen, setDrawerOpen] = useState(false)

  return (
    <>
      <AppBar position="static" sx={{ bgcolor: '#1976d2' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>
              Fake Store
            </Link>
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, mr: 2 }}>
            <Button color="inherit" component={Link} href="/">
              Início
            </Button>
            <Button color="inherit" component={Link} href="/quem-somos">
              Quem somos
            </Button>
            <Button color="inherit" component={Link} href="/contato">
              Contato
            </Button>
          </Box>
          <Box>
            <Button
              color="inherit"
              onClick={() => setDrawerOpen(true)}
              startIcon={<FaShoppingCart size={20} />}
              aria-label={`Carrinho (${totalItems})`}
            >
              {totalItems}
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <CartDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  )
}