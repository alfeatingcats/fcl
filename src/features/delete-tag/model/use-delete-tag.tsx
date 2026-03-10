import { noop } from 'es-toolkit'

import { useMutationErrorHandler } from '@/shared/api'
import type { TrpcMutationHook } from '@/shared/api/types'

import { api } from '@/trpc/react'

export const useDeleteTag: TrpcMutationHook<'tags', 'delete', void, void> = ({
  onError = noop,
  onSuccess,
}) => {
  const utils = api.useUtils()
  const handleError = useMutationErrorHandler()

  return api.tags.delete.useMutation({
    onSuccess: async () => {
      onSuccess()
      await utils.tags.invalidate()
      await utils.studyItem.invalidate()
      await utils.repetitions.invalidate()
    },
    onError: (error) => {
      onError()
      handleError(error)
    },
  })
}
