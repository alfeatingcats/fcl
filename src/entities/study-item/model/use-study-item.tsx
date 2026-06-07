'use client'

import { api } from '@/trpc/react'

export const useSuspenseStudyItem = (id: string) => {
  const [studyItem] = api.studyItem.getById.useSuspenseQuery({ id })

  return studyItem
}

export const useStudyItemQuery = (id: string) =>
  api.studyItem.getById.useQuery({ id })
