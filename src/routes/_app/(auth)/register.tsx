
import Register from '@/pages/auth/register'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/(auth)/register')({
  component: Register,
})