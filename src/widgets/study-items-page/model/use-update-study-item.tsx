'use client'

import { useTranslations } from 'next-intl'
import { toast } from 'sonner'

import type { UpdateStudyItemInput } from '@/shared/api/schemas'

import {
  useUpdateStudyItemForm,
  useUpdateStudyItem as useUpdateStudyItemMutation,
} from '@/features/update-study-item'

type FormFields = Pick<
  UpdateStudyItemInput,
  'description' | 'tagIds' | 'title' | 'id'
>

export const useUpdateStudyItem = (formInitValues: FormFields) => {
  const t = useTranslations('StudyItemMessages')

  const form = useUpdateStudyItemForm({ defaultValues: formInitValues })

  const { mutate, isPending } = useUpdateStudyItemMutation({
    onSuccess: (data) => {
      form.reset(form.getValues(), { keepValues: true })
      toast.success(t('updateSuccess', { name: data.name }))
    },
    onError: ({ name }) => {
      toast.error(t('updateError', { name }))
    },
  })

  return {
    form,
    onSubmit: mutate,
    isLoading: isPending,
  }
}
