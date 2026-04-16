'use client'

import { useState } from 'react'
import { Box, Button, Typography } from '@mui/material'

export default function BuyButton() {
  const [success, setSuccess] = useState(false)

  return (
    <Box sx={{ mt: 3, display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Button
        variant="contained"
        color="success"
        onClick={() => setSuccess(true)}
        disabled={success}
      >
        {success ? 'Compra finalizada' : 'Comprar agora'}
      </Button>
      {success && (
        <Typography variant="subtitle1" color="success.main">
          Compra realizada com sucesso
        </Typography>
      )}
    </Box>
  )
}
