'use client'

import { useTranslations } from 'next-intl'
import { toast } from 'sonner'

import type { UpdateStudyItemInput } from '@/shared/api/schemas'

import { useDeleteStudyItem as useDeleteStudyItemMutation } from '@/features/delete-study-item'
import { useUpdateStudyItemForm } from '@/features/update-study-item'

type FormFields = Pick<
  UpdateStudyItemInput,
  'description' | 'tagIds' | 'title' | 'id'
>

export const useDeleteStudyItem = (formInitValues: FormFields) => {
  const t = useTranslations('StudyItemMessages')
  // const locale = useLocale()
  // const router = useRouter()

  const form = useUpdateStudyItemForm({ defaultValues: formInitValues })

  const { mutate: deleteStudyItem, isPending: isDeleteLoading } =
    useDeleteStudyItemMutation({
      onSuccess: () => {
        toast.success(t('deleteSuccess', { name: formInitValues?.title ?? '' }))
        // router.replace('/my-skills', { locale })
      },
      onError: () => {
        toast.error(t('deleteError', { name: formInitValues?.title ?? '' }))
      },
    })

  return {
    form,
    deleteStudyItem,
    isDeleteLoading,
  }
}
