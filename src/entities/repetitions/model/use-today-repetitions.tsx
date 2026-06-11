'use client'

import { api } from '@/trpc/react'

export const useTodayRepetitions = () =>
  api.repetitions.getTodayRepetitions.useQuery(undefined, {
    staleTime: 60_000,
  })
