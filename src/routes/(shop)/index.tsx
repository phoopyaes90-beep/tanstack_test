// import { Skeleton } from '#/components/ui/skeleton'

import HomePage from '@/pages/home'
import { createFileRoute } from '@tanstack/react-router'
import z from 'zod'

const validateSearch = z.object({
  category: z.string().default('all'),
})


export const Route = createFileRoute('/(shop)/')({
  validateSearch,
  component: HomePage,
  //   pendingComponent: () => {
  //     return (
  //       <div className="grid grid-cols-4 gap-3">
  //         {new Array(12).fill(0).map((_, idx) => {
  //           return <Skeleton key={idx} className="h-40 w-full" />
  //         })}
  //       </div>
  //     )
  //   },
  //   errorComponent: ({ error }) => {
  //     // Render an error message
  //     return <div>{error instanceof Error ? error.message : String(error)}</div>
  //   },
})