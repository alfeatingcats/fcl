import { noop } from 'es-toolkit'

import { useMutationErrorHandler } from '@/shared/api'
import type { TrpcMutationHook } from '@/shared/api/types'

import { api } from '@/trpc/react'

export const useCreateStudyItem: TrpcMutationHook<'studyItem', 'create'> = ({
  onError = noop,
  onSuccess,
}) => {
  const utils = api.useUtils()
  const handleError = useMutationErrorHandler()

  return api.studyItem.create.useMutation({
    onSuccess: async (data) => {
      await utils.studyItem.invalidate()
      await utils.tags.invalidate()
      onSuccess({ name: data?.title ?? '' })
    },
    onError: (error, data) => {
      onError({ name: data?.title ?? '' })
      handleError(error)
    },
  })
}
