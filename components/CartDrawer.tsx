'use client'

import { useCart } from './CartContext'
import { Drawer, Box, Typography, List, ListItem, ListItemText, Button, Divider } from '@mui/material'

interface CartDrawerProps {
  open: boolean
  onClose: () => void
}

export default function CartDrawer({ open, onClose }: CartDrawerProps) {
  const { cartItems, totalItems, removeFromCart, clearCart } = useCart()

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box sx={{ width: 320, p: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6">Carrinho</Typography>
          <Button onClick={onClose}>Fechar</Button>
        </Box>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {totalItems} item(s)
        </Typography>

        {cartItems.length === 0 ? (
          <Typography>Nenhum item no carrinho.</Typography>
        ) : (
          <List>
            {cartItems.map((item) => (
              <Box key={item.id}>
                <ListItem disablePadding>
                  <ListItemText
                    primary={`${item.title}`}
                    secondary={`Quantidade: ${item.quantity} • R$ ${item.price}`}
                  />
                </ListItem>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
                  <Button size="small" color="error" onClick={() => removeFromCart(item.id)}>
                    Remover
                  </Button>
                </Box>
                <Divider />
              </Box>
            ))}
          </List>
        )}

        {cartItems.length > 0 && (
          <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }} onClick={clearCart}>
            Limpar carrinho
          </Button>
        )}
      </Box>
    </Drawer>
  )
}
