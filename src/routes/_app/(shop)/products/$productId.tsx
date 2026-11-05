
import ProductDetail from '@/pages/products/productDetail'
import { createFileRoute } from '@tanstack/react-router'
import { zodValidator } from '@tanstack/zod-adapter'
import z from 'zod'


// const validateSearch = zodValidator(
//   z.object({
//     startDate: z
//       .string()
//       .default(dayjs(new Date()).startOf('month').format('YYYY-MM-DD')),
//     endDate: z
//       .string()
//       .default(dayjs(new Date()).endOf('month').format('YYYY-MM-DD')),
//     page: z.coerce.number().default(1),
//   }),
// )

// export const Route = createFileRoute('/(shop)/products/$productId')({

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