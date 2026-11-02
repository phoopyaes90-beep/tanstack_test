import z from 'zod'

const VDimension = z.object({
  width: z.number(),
  height: z.number(),
  depth: z.number(),
})

const VReview = z.object({
  rating: z.number(),
  comment: z.string(),
  date: z.string(),
  reviewerName: z.string(),
  reviewerEmail: z.string(),
})

const VMeta = z.object({
  createdAt: z.string(),
  updatedAt: z.string(),
  barcode: z.string(),
  qrCode: z.string(),
})

export const productsValidation = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  category: z.string(),
  price: z.number(),
  discountPercentage: z.number(),
  rating: z.number(),
  stock: z.number(),
  tags: z.array(z.string()),
  brand: z.string().nullish(),
  sku: z.string(),
  weight: z.number(),
  dimensions: VDimension,
  warrantyInformation: z.string(),
  shippingInformation: z.string(),
  availabilityStatus: z.string(),
  reviews: z.array(VReview),
  returnPolicy: z.string(),
  minimumOrderQuantity: z.number(),
  meta: VMeta,
  images: z.array(z.string()),
  thumbnail: z.string(),
})

export const productsSchema = z.array(productsValidation)