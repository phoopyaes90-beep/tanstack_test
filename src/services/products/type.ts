import type z from 'zod'
import type { productsValidation } from './schema'

export type IProduct = z.infer<typeof productsValidation>