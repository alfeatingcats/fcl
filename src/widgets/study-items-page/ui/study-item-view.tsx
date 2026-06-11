'use client'

import { ErrorBoundary, Suspense } from '@suspensive/react'
import { useTranslations } from 'next-intl'
import { type FC, useEffect, useMemo } from 'react'

import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { useRepetitionsOverlayEntityContent } from '@/shared/hooks/repetition'
import { mapStudyItemToRepetitionList } from '@/shared/lib/study-item'
import { StudyItemForm } from '@/shared/lib/study-item/study-item-form'

import {
  ActionRepetitionModal,
  type RepetitionsListRow,
} from '@/entities/repetitions'
import { EmptyStudyItem, useSuspenseStudyItem } from '@/entities/study-item'
import { ReviewRepetitionForm } from '@/features/complete-repetition'
import { TagCreateDrawer, TagForm } from '@/features/create-tag'
import {
  DeleteStudyItemDialog,
  useDeleteStudyItem,
} from '@/features/delete-study-item'
import { RepetitionsTableContent } from '@/features/repetitions-table'
import {
  CreateTagButton,
  type RequiredCreateTagInput,
} from '@/features/tag-selector'
import {
  useCompleteRepetitionAction,
  useSkipRepetitionAction,
  useWaitRepetitionAction,
} from '@/widgets/study-item-page/model/hooks'

import { useManageTag } from '../model/use-manage-tag'
import { useUpdateStudyItem } from '../model/use-update-study-item'

const Asd = () => {
  return (
    <div className="flex h-full w-full flex-col gap-6 items-center">
      <Skeleton className="h-10 w-3/4" />
      <Skeleton className="h-4 w-2/4 mb-2" />
      <Skeleton className="h-17 w-full" />
      <Skeleton className="h-40 w-full" />
      <Skeleton className="h-60 w-full" />
    </div>
  )
}

export function StudyItemView({ id }: { id: string | null }) {
  if (!id)
    return (
      <div className="flex items-center-safe justify-center p-4 min-w-full h-full">
        <EmptyStudyItem />
      </div>
    )
  return (
    <ErrorBoundary fallback={({ error }) => <>{error.message}</>}>
      <Suspense fallback={<Asd />}>
        <StudyItemPage studyItemId={id} />
      </Suspense>
    </ErrorBoundary>
  )
}

type StudyItemPageProps = {
  studyItemId: string
}

export const StudyItemPage: FC<StudyItemPageProps> = ({ studyItemId: id }) => {
  const studyItem = useSuspenseStudyItem(id)

  const t = useTranslations('Repetitions')

  const { form, onSubmit, isLoading } = useUpdateStudyItem({
    description: studyItem?.description,
    title: studyItem?.title,
    id: studyItem?.id,
    tagIds: studyItem?.itemTags.map((itemTag) => itemTag.tag.id),
  })
  useEffect(() => {
    form.reset(
      {
        description: studyItem?.description,
        title: studyItem?.title,
        id: studyItem?.id,
        tagIds: studyItem?.itemTags.map((itemTag) => itemTag.tag.id),
      },
      {
        keepDirty: false,
      },
    )
  }, [
    form.reset,
    studyItem?.description,
    studyItem?.id,
    studyItem?.itemTags.map,
    studyItem?.title,
  ])

  const mappedItemTags = useMemo<Array<RequiredCreateTagInput>>(
    () =>
      studyItem?.itemTags.map((itemTag) => ({
        id: itemTag.tag.id,
        color: itemTag.tag.color,
        name: itemTag.tag.name,
      })),
    [studyItem?.itemTags],
  )

  const {
    form: formTag,
    onSubmit: onSubmitTag,
    isLoading: isCreatingTag,
    isOpen: isCreateTagDrawerOpen,
    toggleVisibility: toggleCreateTagDrawer,
    handleOpenChange: handleTagDrawerChange,
  } = useManageTag()

  const repetitionsListData = useMemo<Array<RepetitionsListRow>>(
    () => mapStudyItemToRepetitionList(studyItem),
    [studyItem],
  )

  const {
    skip,
    wait,
    title,
    onClear,
    complete,
    activeRepetition,
    setActiveRepetition,
    descriptionText,
  } = useRepetitionsOverlayEntityContent(repetitionsListData)

  // move to ??
  const {
    form: completeForm,
    isLoading: isCompleteLoading,
    onSubmit: onCompleteSubmit,
  } = useCompleteRepetitionAction(activeRepetition, onClear)
  // move to ??
  const {
    form: skipForm,
    isLoading: isSkipLoading,
    onSubmit: onSkipSubmit,
  } = useSkipRepetitionAction(activeRepetition, onClear)
  // move to ??
  const {
    form: waitForm,
    isLoading: isWaitLoading,
    onSubmit: onWaitSubmit,
  } = useWaitRepetitionAction(activeRepetition, onClear)

  const {
    deleteStudyItem,
    isDeleteLoading,
    setStudyItemToDelete,
    studyItemToDelete,
  } = useDeleteStudyItem({
    studyItems: [studyItem],
  })

  return (
    <div className="space-y-5">
      <StudyItemForm
        studyItemId={id}
        studyItemOnDelete={setStudyItemToDelete}
        form={form}
        isLoading={isLoading}
        defaultTags={mappedItemTags}
        renderCreateTagButton={
          <CreateTagButton onClick={toggleCreateTagDrawer} />
        }
        onSave={onSubmit}
        handleSubmit={form.handleSubmit}
      />

      <RepetitionsTableContent
        repetitions={studyItem?.repetitions}
        onSkipRepetition={setActiveRepetition}
        onWaitRepetition={setActiveRepetition}
        onReviewRepetition={setActiveRepetition}
      />
      <div className="h-px"></div>
      <TagCreateDrawer
        isLoading={isCreatingTag}
        isOpen={isCreateTagDrawerOpen}
        onOpenChange={handleTagDrawerChange}
        onSubmit={formTag.handleSubmit(onSubmitTag)}
      >
        <TagForm form={formTag} />
      </TagCreateDrawer>
      <ActionRepetitionModal
        onClear={onClear}
        entity={{
          title: title,
          description: descriptionText,
        }}
        overlay={{
          title: complete.overlay.title,
          description: complete.overlay.description,
        }}
        isOpen={activeRepetition.action === 'complete'}
        renderContent={<ReviewRepetitionForm form={completeForm} />}
        renderSubmitButton={
          <Button
            onClick={completeForm.handleSubmit(onCompleteSubmit)}
            disabled={isCompleteLoading}
          >
            {t('completeLabel')}
          </Button>
        }
      />
      <ActionRepetitionModal
        onClear={onClear}
        entity={{
          title: title,
          description: descriptionText,
        }}
        overlay={{
          title: skip.overlay.title,
          description: skip.overlay.description,
        }}
        isOpen={activeRepetition.action === 'skip'}
        renderContent={null}
        renderSubmitButton={
          <Button
            onClick={skipForm.handleSubmit(onSkipSubmit)}
            disabled={isSkipLoading}
          >
            {t('skipLabel')}
          </Button>
        }
      />
      <ActionRepetitionModal
        onClear={onClear}
        entity={{
          title: title,
          description: descriptionText,
        }}
        overlay={{
          title: wait.overlay.title,
          description: wait.overlay.description,
        }}
        isOpen={activeRepetition.action === 'wait'}
        renderContent={null}
        renderSubmitButton={
          <Button
            onClick={waitForm.handleSubmit(onWaitSubmit)}
            disabled={isWaitLoading}
          >
            {t('waitLabel')}
          </Button>
        }
      />

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
    </div>
  )
}
