import { noop } from 'es-toolkit'

import { useMutationErrorHandler } from '@/shared/api'
import type { TrpcMutationHook } from '@/shared/api/types'

import { api } from '@/trpc/react'

export const useUpdateTag: TrpcMutationHook<
  'tags',
  'update',
  { name: string },
  void
> = ({ onError = noop, onSuccess }) => {
  const utils = api.useUtils()
  const handleError = useMutationErrorHandler()

  return api.tags.update.useMutation({
    onSuccess: async ({ name }) => {
      await utils.tags.invalidate()
      await utils.studyItem.invalidate()
      await utils.repetitions.invalidate()
      onSuccess({ name })
    },
    onError: (error) => {
      onError()
      handleError(error)
    },
  })
}
