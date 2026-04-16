import { Card, CardContent, CardMedia, Typography, Rating, Box, CardActions, CardActionArea, Button } from '@mui/material'
import Link from 'next/link'
import { Product } from '../types'
import { useCart } from './CartContext'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart()

  return (
    <Card sx={{ maxWidth: 280, height: '100%', display: 'flex', flexDirection: 'column', cursor: 'default', '&:hover': { boxShadow: 6 } }}>
      <CardActionArea component={Link} href={`/products/${product.id}`} sx={{ textDecoration: 'none', color: 'inherit' }}>
        <CardMedia
          component="img"
          height="180"
          image={product.image}
          alt={product.title}
          sx={{ objectFit: 'contain', p: 2 }}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="subtitle1" component="div" sx={{ height: 54, overflow: 'hidden' }}>
            {product.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1, textTransform: 'capitalize' }}>
            {product.category}
          </Typography>
          <Typography variant="h6" color="primary" sx={{ mb: 1 }}>
            ${product.price}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Rating value={product.rating.rate} readOnly precision={0.1} size="small" />
            <Typography variant="body2" sx={{ ml: 1 }}>
              ({product.rating.count})
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button fullWidth size="small" variant="contained" onClick={() => addToCart(product)}>
          Adicionar ao carrinho
        </Button>
      </CardActions>
    </Card>
  )
}