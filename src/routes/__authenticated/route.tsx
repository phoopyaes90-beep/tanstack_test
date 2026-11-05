import { createFileRoute,redirect } from "@tanstack/react-router"
import { meQueryOptions } from '@/services/auth/queries'
import AuthLayout from "@/components/layouts/auth-layout"

export const Route = createFileRoute('/__authenticated')({
     beforeLoad: async ({ context: { queryClient, auth } }) => {
    const token = auth.token
    if (!token) {
      throw redirect({ to: '/login' })
    }

    try {
      await queryClient.ensureQueryData(meQueryOptions)
    } catch (error) {
        auth.clearInfo()
      throw redirect({ to: '/login' })
    }
  },
   component: AuthLayout,
})

