'use client'

import { useState } from 'react'

import { StudyItemList } from '@/entities/study-item'
import { StudyItemDrawer, StudyItemForm } from '@/features/create-study-item/ui'
import {
  CreateStudyItemButton,
  TagCreateDrawer,
  TagForm,
} from '@/features/create-tag'
import { CreateTagButton } from '@/features/tag-selector'

import { api } from '@/trpc/react'

import { useManageStudyItem, useManageTag } from '../model'
import { StudyItemView } from './study-item-view'
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
  } = useManageStudyItem()

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
        createStudyItemButton={
          <CreateStudyItemButton
            isCreating={isCreating}
            onClick={toggleStudyItemCreation}
          />
        }
        content={<StudyItemView id={selectedStudyItemId} />}
        list={
          <StudyItemList
            selectStudyItem={setSelectedStudyItemId}
            studyItems={studyItems}
          />
        }
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
    </>
  )
}
