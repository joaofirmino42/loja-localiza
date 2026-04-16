import { Box, Typography, Container, IconButton, Link } from '@mui/material'
import { FaInstagram, FaFacebook } from 'react-icons/fa'
 
export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: '#1976d2', py: 3, mt: 'auto', color: 'white' }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Typography variant="body1" sx={{ fontWeight: 500 }}>
              Acompanhe nossas redes sociais
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton
                component={Link}
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: 'white', '&:hover': { color: '#E4405F' } }}
                aria-label="Instagram"
              >
                <FaInstagram size={24} />
              </IconButton>
              <IconButton
                component={Link}
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: 'white', '&:hover': { color: '#1877F2' } }}
                aria-label="Facebook"
              >
                <FaFacebook size={24} />
              </IconButton>
            </Box>
          </Box>
          <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }} align="center">
            © 2026 Fake Store. Todos os direitos reservados.
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}