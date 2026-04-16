import { notFound } from 'next/navigation'
import { getProduct } from '../../../service/api'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import BuyButton from '../../../components/BuyButton'
import { Container, Typography, Box, Card, CardContent, CardMedia, Rating, Button } from '@mui/material'
import Link from 'next/link'

interface ProductPageProps {
  params: { id: string }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const id = parseInt(params.id)
  if (isNaN(id)) {
    notFound()
  }

  let product
  try {
    product = await getProduct(id)
  } catch (error) {
    notFound()
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Container maxWidth="md" sx={{ flexGrow: 1, py: 4 }}>
        <Button
          component={Link}
          href="/"
          sx={{ mb: 2 }}
        >
          Voltar
        </Button>
        <Card>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
            <CardMedia
              component="img"
              sx={{ width: { xs: '100%', md: 400 }, height: 400, objectFit: 'contain', p: 2 }}
              image={product.image}
              alt={product.title}
            />
            <CardContent sx={{ flex: 1 }}>
              <Typography gutterBottom variant="h4" component="h1">
                {product.title}
              </Typography>
              <Typography variant="h5" color="primary" sx={{ mb: 2 }}>
                ${product.price}
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                Categoria: {product.category}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Rating value={product.rating.rate} readOnly precision={0.1} />
                <Typography variant="body2" sx={{ ml: 1 }}>
                  {product.rating.rate} ({product.rating.count} avaliações)
                </Typography>
              </Box>
              <Typography variant="body1">
                {product.description}
              </Typography>
              <BuyButton />
            </CardContent>
          </Box>
        </Card>
      </Container>
      <Footer />
    </Box>
  )
}