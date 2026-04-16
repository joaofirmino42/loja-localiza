import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Container, Typography, Box, Paper } from '@mui/material'

export default function QuemSomosPage() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Container maxWidth="md" sx={{ flexGrow: 1, py: 4 }}>
        <Paper sx={{ p: 4 }}>
          <Typography variant="h3" component="h1" gutterBottom align="center">
            Quem Somos
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Bem-vindo à Fake Store, sua loja online de confiança para produtos de qualidade.
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Somos uma empresa dedicada a oferecer a melhor experiência de compra online,
            com produtos selecionados e atendimento excepcional aos nossos clientes.
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Nossa missão é conectar pessoas a produtos incríveis, facilitando o acesso
            a itens de qualidade com preços competitivos e entrega rápida.
          </Typography>
          <Typography variant="body1">
            Acreditamos que cada compra deve ser uma experiência positiva, e trabalhamos
            diariamente para garantir satisfação total aos nossos clientes.
          </Typography>
        </Paper>
      </Container>
      <Footer />
    </Box>
  )
}