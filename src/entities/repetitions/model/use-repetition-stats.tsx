'use client'

import { api } from '@/trpc/react'

export const useRepetitionStats = () =>
  api.repetitions.getStats.useQuery(undefined, {
    staleTime: 60_000,
  })
