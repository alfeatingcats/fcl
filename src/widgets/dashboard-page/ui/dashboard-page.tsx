'use client'

import { api } from '@/trpc/react'

export const DashboardPage = () => {
  const [a] = api.repetitions.getStats.useSuspenseQuery()
  console.log({ a })

  return <div></div>
}
