
import ProductDetail from '@/pages/products/productDetail'
import { createFileRoute } from '@tanstack/react-router'
import { zodValidator } from '@tanstack/zod-adapter'
import z from 'zod'




export const Route=createFileRoute('/_app/(shop)/products/$productId')({
  validateSearch: zodValidator(
    z.object({
      category: z.string().optional(),
    }),
  ),
  component: ProductDetail,
  errorComponent: () => {
    return <p>error</p>
  },
})