'use client'

import { useState } from 'react'

import { StudyItemDrawer, StudyItemForm } from '@/features/create-study-item/ui'
import { TagCreateDrawer, TagForm } from '@/features/create-tag'
import {
  DeleteStudyItemDialog,
  useDeleteStudyItem,
} from '@/features/delete-study-item'
import { CreateTagButton } from '@/features/tag-selector'

import { api } from '@/trpc/react'

import { useCreateStudyItem, useManageTag } from '../model'
import { StudyItemsPageLayout } from './study-items-page-layout'

export const StudyItemsPage = () => {
  const [studyItems] = api.studyItem.getAll.useSuspenseQuery({ limit: 10 })
  const [selectedStudyItemId, setSelectedStudyItemId] = useState<string | null>(
    null,
  )

  const {
    form,
    onSubmit,
    isLoading: isCreating,
    handleOpenChange: handleDrawerChange,
    isOpen: isStudyItemCreationOpen,
    toggleVisibility: toggleStudyItemCreation,
  } = useCreateStudyItem()

  const {
    deleteStudyItem,
    isDeleteLoading,
    setStudyItemToDelete,
    studyItemToDelete,
  } = useDeleteStudyItem({
    studyItems: studyItems.items,
  })

  const {
    form: formTag,
    onSubmit: onSubmitTag,
    isLoading: isCreatingTag,
    isOpen: isCreateTagDrawerOpen,
    toggleVisibility: toggleCreateTagDrawer,
    handleOpenChange: handleTagDrawerChange,
  } = useManageTag()

  return (
    <>
      <StudyItemsPageLayout
        isCreating={isCreating}
        studyItems={studyItems}
        selectStudyItem={setSelectedStudyItemId}
        studyItemOnDelete={setStudyItemToDelete}
        selectedStudyItemId={selectedStudyItemId}
        toggleStudyItemCreation={toggleStudyItemCreation}
      />

      <StudyItemDrawer
        isLoading={isCreating}
        onSubmit={form.handleSubmit(onSubmit)}
        isOpen={isStudyItemCreationOpen}
        onOpenChange={handleDrawerChange}
      >
        <StudyItemForm
          form={form}
          renderCreateTagButton={
            <CreateTagButton onClick={toggleCreateTagDrawer} />
          }
        />

        <TagCreateDrawer
          isLoading={isCreatingTag}
          isOpen={isCreateTagDrawerOpen}
          onOpenChange={handleTagDrawerChange}
          onSubmit={formTag.handleSubmit(onSubmitTag)}
        >
          <TagForm form={formTag} />
        </TagCreateDrawer>
      </StudyItemDrawer>
      <DeleteStudyItemDialog
        isOpen={!!studyItemToDelete}
        onClose={() => setStudyItemToDelete(null)}
        onDelete={() => {
          if (studyItemToDelete) {
            deleteStudyItem({ id: studyItemToDelete.id })
          }
        }}
        isLoading={isDeleteLoading}
        title={studyItemToDelete?.title ?? ''}
      />
    </>
  )
}
