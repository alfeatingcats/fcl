'use client"'
import { useTranslations } from 'next-intl'
import { toast } from 'sonner'

import { useDrawerState } from '@/shared/hooks'
import type { UseFormOverlayReturn } from '@/shared/types'

import {
  type UpdateTagFormInput,
  useUpdateTagForm,
  useUpdateTag as useUpdateTagMutation,
} from '@/features/update-tag'

export const useUpdateTag = (): UseFormOverlayReturn<UpdateTagFormInput> => {
  const t = useTranslations('TagMessages')

  const form = useUpdateTagForm()
  const drawer = useDrawerState({
    onClose: () => form.reset(),
  })

  const { mutate, isPending } = useUpdateTagMutation({
    onSuccess: ({ name }) => {
      toast.success(t('updateSuccess', { name }))
      drawer.close()
    },
    onError: () => {
      toast.error(t('updateError', { name: form.getValues().name }))
    },
  })

  return {
    form,
    onSubmit: mutate,
    handleOpenChange: drawer.handleChange,
    isLoading: isPending,
    toggleVisibility: drawer.toggle,
    isOpen: drawer.isOpen,
  }
}
