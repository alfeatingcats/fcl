'use client"'

import { useTranslations } from 'next-intl'
import { toast } from 'sonner'

import type { CreateStudyItemInput } from '@/shared/api/schemas'
import { useDrawerState } from '@/shared/hooks'
import type { UseFormOverlayReturn } from '@/shared/types'

import {
  useCreateStudyItem as useCreateStudyItemMutation,
  useStudyItemForm,
} from '@/features/create-study-item'

export const useCreateStudyItem =
  (): UseFormOverlayReturn<CreateStudyItemInput> => {
    const t = useTranslations('StudyItemMessages')

    const { form } = useStudyItemForm({})

    const drawer = useDrawerState({
      onClose: () => form.reset(),
    })

    const { mutate, isPending } = useCreateStudyItemMutation({
      onSuccess: ({ name }) => {
        toast.success(t('createSuccess', { name }))
        drawer.handleChange(false)
      },
      onError: ({ name }) => {
        toast.error(t('createError', { name }))
      },
    })

    return {
      form,
      onSubmit: mutate,
      isLoading: isPending,
      handleOpenChange: drawer.handleChange,
      toggleVisibility: drawer.toggle,
      isOpen: drawer.isOpen,
    }
  }
