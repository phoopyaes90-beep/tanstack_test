import { useQuery } from '@tanstack/react-query'
import api from '../api'
import type { IProduct } from '@/type'

// 1. Categories များကို API မှ ယူရန်
const getCategories = async () => {
  const response = await api.get<any[]>('products/category-list')
  return response.data
}

export const getCategoriesQuery = () =>
  useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
  })

// 2. Products များကို Category အလိုက် ယူရန်
const getProducts = async (category: string) => {
  const url = category === 'all' 
    ? 'products' 
    : `products/category/${category}`

  const response = await api.get<{
    products: IProduct[]
  }>(url)
  return response.data
}

export const getProductsQuery = (category: string = 'all') =>
  useQuery({
    queryKey: ['products', category],
    queryFn: () => getProducts(category),
    select: (data) => data.products,
  })




