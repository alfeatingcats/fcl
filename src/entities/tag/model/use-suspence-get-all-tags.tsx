'use client'

import { api } from '@/trpc/react'

export const useSuspenseGetAllTags = () => api.tags.getAll.useSuspenseQuery({})
