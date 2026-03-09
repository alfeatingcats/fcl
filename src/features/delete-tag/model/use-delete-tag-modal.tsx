'use client"'
import { useResetState } from 'ahooks'
import { isNil } from 'es-toolkit'
import type { TagType } from 'prisma/generated/schemas/models/Tag.schema'

export type DeleteTagModalState =
  | (Omit<TagType, 'createdAt'> & { usageCount: number })
  | null

export const useDeleteTagModal = () => {
  const [tagToDelete, setTagToDelete, clearTagToDelete] =
    useResetState<DeleteTagModalState>(null)

  return {
    tagToDelete,
    setTagToDelete,
    clearTagToDelete,
    hasTagToDelete: !isNil(tagToDelete),
  }
}
