'use client'

import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getProducts } from '../service/api'
import ProductCard from '../components/ProductCard'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Container, Grid, Pagination, Box, Typography, CircularProgress } from '@mui/material'

const ITEMS_PER_PAGE = 6

export default function Home() {
  const [page, setPage] = useState(1)
  const { data: products, isLoading, error } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  })

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value)
  }

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        <CircularProgress />
      </Box>
    )
  }

  if (error) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        <Typography variant="h6" color="error">
          Erro ao carregar produtos
        </Typography>
      </Box>
    )
  }

  const startIndex = (page - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const paginatedProducts = products?.slice(startIndex, endIndex) || []
  const totalPages = Math.ceil((products?.length || 0) / ITEMS_PER_PAGE)

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Container maxWidth="lg" sx={{ flexGrow: 1, py: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Produtos
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, justifyContent: 'center' }}>
          {paginatedProducts.map((product) => (
            <Box key={product.id} sx={{ width: { xs: '100%', sm: '48%', md: '28%' }, maxWidth: 280 }}>
              <ProductCard product={product} />
            </Box>
          ))}
        </Box>
        {totalPages > 1 && (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <Pagination
              count={totalPages}
              page={page}
              onChange={handlePageChange}
              color="primary"
            />
          </Box>
        )}
      </Container>
      <Footer />
    </Box>
  )
}
