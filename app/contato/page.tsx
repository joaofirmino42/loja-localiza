import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Container, Typography, Box, Paper, TextField, Button } from '@mui/material'

export default function ContatoPage() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Container maxWidth="md" sx={{ flexGrow: 1, py: 4 }}>
        <Paper sx={{ p: 4 }}>
          <Typography variant="h3" component="h1" gutterBottom align="center">
            Contato
          </Typography>
          <Typography variant="body1" align="center" sx={{ mb: 4 }}>
            Entre em contato conosco. Estamos aqui para ajudar!
          </Typography>

          <Box component="form" sx={{ mt: 3 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <TextField
                  required
                  fullWidth
                  label="Nome"
                  name="nome"
                  variant="outlined"
                  sx={{ flex: 1, minWidth: 200 }}
                />
                <TextField
                  required
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  variant="outlined"
                  sx={{ flex: 1, minWidth: 200 }}
                />
              </Box>
              <TextField
                required
                fullWidth
                label="Assunto"
                name="assunto"
                variant="outlined"
              />
              <TextField
                required
                fullWidth
                label="Mensagem"
                name="mensagem"
                multiline
                rows={4}
                variant="outlined"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                size="large"
              >
                Enviar Mensagem
              </Button>
            </Box>
          </Box>

          <Box sx={{ mt: 4, textAlign: 'center' }}>
            <Typography variant="h6" gutterBottom>
              Informações de Contato
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email: contato@fakestore.com
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Telefone: (11) 9999-9999
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Endereço: Rua das Compras, 123 - São Paulo, SP
            </Typography>
          </Box>
        </Paper>
      </Container>
      <Footer />
    </Box>
  )
}