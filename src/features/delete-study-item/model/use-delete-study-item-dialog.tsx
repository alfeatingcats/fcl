'use client'

import { useTranslations } from 'next-intl'
import { useMemo, useState } from 'react'
import { toast } from 'sonner'

import type { ReadStudyItemsOutputSchemaType } from '@/shared/api/schemas/fg/study-item'

import { useDeleteStudyItemMutation } from '@/features/delete-study-item'

import { api } from '@/trpc/react'

export const useDeleteStudyItem = ({
  studyItems,
}: {
  studyItems: ReadStudyItemsOutputSchemaType['items']
}) => {
  const t = useTranslations('StudyItemMessages')
  const [studyItemIdToDelete, setStudyItemToDelete] = useState<string | null>(
    null,
  )
  const utils = api.useUtils()

  const studyItemToDelete = useMemo<(typeof studyItems)[number] | undefined>(
    () => studyItems?.find((item) => item?.id === studyItemIdToDelete),
    [studyItemIdToDelete, studyItems.find],
  )

  const { mutate: deleteStudyItem, isPending: isDeleteLoading } =
    useDeleteStudyItemMutation({
      onSuccess: () => {
        toast.success(
          t('deleteSuccess', { name: studyItemToDelete?.title ?? '' }),
        )
        setStudyItemToDelete(null)
        utils.studyItem.getAll.invalidate()
      },
      onError: () => {
        toast.error(t('deleteError', { name: studyItemToDelete?.title ?? '' }))
      },
    })

  return {
    deleteStudyItem,
    isDeleteLoading,
    setStudyItemToDelete,
    studyItemToDelete,
  }
}
