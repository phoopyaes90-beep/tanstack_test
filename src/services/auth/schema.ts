import z from 'zod'

export const me = z.object({
  id: z.number(),
  username: z.string(),
  email: z.string().email(),
  createdAt: z.string(),
})

export const meSchema = z.object({
  user: me,
})