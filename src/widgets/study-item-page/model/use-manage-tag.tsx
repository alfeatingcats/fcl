'use client"'
import { useTranslations } from 'next-intl'
import { toast } from 'sonner'

import type { CreateTagInput } from '@/shared/api/schemas'
import { useDrawerState } from '@/shared/hooks'
import type { UseFormOverlayReturn } from '@/shared/types'

import { useCreateTag, useTagForm } from '@/features/create-tag'

export const useManageTag = (): UseFormOverlayReturn<CreateTagInput> => {
  const t = useTranslations('TagMessages')

  const form = useTagForm()
  const drawer = useDrawerState({
    onClose: () => form.reset(),
  })

  const { mutate, isPending } = useCreateTag({
    onSuccess: ({ name }) => {
      toast.success(t('createSuccess', { name }))
      drawer.close()
    },
    onError: ({ name }) => {
      toast.error(t('createError', { name }))
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
