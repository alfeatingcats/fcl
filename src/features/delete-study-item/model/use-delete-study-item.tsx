import { noop } from 'es-toolkit'

import { useMutationErrorHandler } from '@/shared/api'
import type { TrpcMutationHook } from '@/shared/api/types'

import { api } from '@/trpc/react'

export const useDeleteStudyItem: TrpcMutationHook<
  'studyItem',
  'delete',
  void,
  void
> = ({ onError = noop, onSuccess }) => {
  const handleError = useMutationErrorHandler()

  return api.studyItem.delete.useMutation({
    onSuccess: async () => {
      onSuccess()
    },
    onError: (error) => {
      onError()
      handleError(error)
    },
  })
}
