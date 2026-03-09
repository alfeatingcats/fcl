'use client'

import { useTranslations } from 'next-intl'
import { useCallback } from 'react'

import { TagItem, useSuspenseGetAllTags } from '@/entities/tag'
import { DeleteTagModal } from '@/features/delete-tag'
import { UpdateTagDrawer, UpdateTagForm } from '@/features/update-tag'

import { useDeleteTag } from '../model/use-delete-tag'
import { useUpdateTag } from '../model/use-update-tag'
import { TagDropdown } from './tag-dropdown'

export const TagsPage = () => {
  const t = useTranslations('TagPage')
  const [tags] = useSuspenseGetAllTags()

  const {
    form: updateTagForm,
    onSubmit: onSubmitTag,
    isLoading: isCreatingTag,
    isOpen: isCreateTagDrawerOpen,
    toggleVisibility: toggleCreateTagDrawer,
    handleOpenChange: handleTagDrawerChange,
  } = useUpdateTag()

  const {
    clearTagToDelete,
    isLoading,
    hasTagToDelete,
    onDelete,
    setTagToDelete,
    tagToDelete,
  } = useDeleteTag()

  const handleUpdateTag = useCallback(
    (tagId?: string) => {
      if (!tagId) {
        return
      }
      const tag = tags.find((t) => t.id === tagId)

      updateTagForm.reset({
        id: tag!.id,
        name: tag!.name,
        color: tag!.color,
      })

      toggleCreateTagDrawer()
    },
    [tags, toggleCreateTagDrawer, updateTagForm],
  )

  const handleDeleteTag = useCallback(
    (tagId: string) => {
      if (!tagId) {
        return
      }
      const tag = tags.find((t) => t.id === tagId)

      setTagToDelete({
        id: tag!.id,
        name: tag!.name,
        color: tag!.color,
        usageCount: tag!.usageCount,
      })
    },
    [setTagToDelete, tags],
  )

  return (
    <div className="flex flex-col gap-4">
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        {t('title')}
      </h3>
      <section className="grid w-full grid-cols-2 gap-3">
        {tags.map((tag) => (
          <TagItem
            key={tag.id}
            name={tag.name}
            color={tag.color}
            usageCount={tag.usageCount}
            itemActions={
              <TagDropdown
                id={tag.id}
                onEdit={handleUpdateTag}
                onDelete={handleDeleteTag}
              />
            }
          />
        ))}
      </section>

      <UpdateTagDrawer
        isLoading={isCreatingTag}
        isOpen={isCreateTagDrawerOpen}
        onOpenChange={handleTagDrawerChange}
        onSubmit={updateTagForm.handleSubmit(onSubmitTag)}
      >
        <UpdateTagForm form={updateTagForm} />
      </UpdateTagDrawer>

      <DeleteTagModal
        isOpen={hasTagToDelete}
        onClose={clearTagToDelete}
        selectedTag={tagToDelete}
        isLoading={isLoading}
        onDelete={onDelete}
      />
    </div>
  )
}
