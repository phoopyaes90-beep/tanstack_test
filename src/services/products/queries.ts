// import { useQuery } from '@tanstack/react-query'
// import api from '../api'
// import type { IProduct } from '@/type'

// // 1. Category အလိုက် သို့မဟုတ် အားလုံးကို fetch လုပ်ရန်
// const getProducts = async (category: string) => {
//   const url = category === 'all' 
//     ? 'products' 
//     : `products/category/${category}`

//   const response = await api.get<{
//     products: IProduct[]
//   }>(url)
//   return response.data
// }

// // 2. category ကို parameter အနေဖြင့် လက်ခံနိုင်ရန် ပြင်ဆင်ထားသော query hook
// export const getProductsQuery = (category: string = 'all') =>
//   useQuery({
//     queryKey: ['products', category],
//     queryFn: () => getProducts(category),
//     select: (data) => data.products,
//   })

// // get product by id
// const getProductById = async (id: string) => {
//   const response = await api.get<{
//     products: IProduct[]
//   }>(`products/${id}`)
//   return response.data
// }

// export const getProductByIdQuery = (id: string) =>
//   useQuery({
//     queryKey: ['product', id],
//     queryFn: () => getProductById(id),
//     enabled: !!id,
//   })




import { useQuery } from '@tanstack/react-query'
import api from '../api'
import { productsSchema, productsValidation } from './schema'

const getProducts = async (tab: string) => {
  const response = await api.get(
    tab === 'all' ? 'products' : `products/category/${tab}`,
  )
  return productsSchema.parse(response.data.products)
}
export const getProductsQuery = (tab: string) =>
  useQuery({
    queryKey: ['products', tab],
    queryFn: () => getProducts(tab),
        // select: (data) => data,
    // enabled: false,
  })

  const getProductById = async (id: string) => {
    const response = await api.get(`products/${id}`)
  return productsValidation.parse(response.data)
}

export const getProductQuery = (id: string) =>
  useQuery({
    queryKey: ['product', id],
    queryFn: () => getProductById(id),
  })