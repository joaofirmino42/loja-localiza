import axios from 'axios'
import { Product } from '../types'

export const api = axios.create({
  baseURL: 'https://fakestoreapi.com'
})

export const getProducts = async (): Promise<Product[]> => {
  const response = await api.get('/products')
  return response.data
}

export const getProduct = async (id: number): Promise<Product> => {
  const response = await api.get(`/products/${id}`)
  return response.data
}
