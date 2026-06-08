'use client'

import { OverlayScrollbarsComponent } from 'overlayscrollbars-react'
import type { FC } from 'react'

import type { ReadStudyItemsOutputSchemaType } from '@/shared/api/schemas/fg/study-item'

import { StudyItemList } from '@/entities/study-item'

import { StudyItemView } from './study-item-view'
import { StudyItemsListHeader } from './study-items-list-header'

type StudyItemsPageLayoutProps = {
  isCreating?: boolean
  toggleStudyItemCreation?: () => void
  selectedStudyItemId: string | null
  studyItems: ReadStudyItemsOutputSchemaType
  selectStudyItem: (studyItemId: string | null) => void
  studyItemOnDelete: (studyItemId: string) => void
}

export const StudyItemsPageLayout: FC<StudyItemsPageLayoutProps> = ({
  isCreating,
  toggleStudyItemCreation,
  selectedStudyItemId,
  studyItems,
  selectStudyItem,
  studyItemOnDelete,
}) => {
  return (
    <article className="flex max-h-[calc(100vh-16px)] h-full">
      <div className="w-90 min-w-90 max-w-90 border-r">
        <StudyItemsListHeader
          isCreating={isCreating}
          toggleStudyItemCreation={toggleStudyItemCreation}
        />

        <OverlayScrollbarsComponent
          className="max-h-[calc(100vh-16px-60px)]"
          element="span"
          options={{
            scrollbars: { autoHide: 'scroll' },
            overflow: { x: 'hidden', y: 'scroll' },
          }}
          defer
        >
          <StudyItemList
            selectStudyItem={selectStudyItem}
            studyItems={studyItems}
            studyItemOnDelete={studyItemOnDelete}
          />
        </OverlayScrollbarsComponent>
      </div>

      <OverlayScrollbarsComponent
        className="max-h-[calc(100vh-16px)] h-[calc(100vh-16px)] w-full"
        element="span"
        options={{
          scrollbars: { autoHide: 'scroll' },
          overflow: { x: 'hidden', y: 'scroll' },
        }}
        defer
      >
        <section className="p-3 min-w-full h-full">
          <StudyItemView id={selectedStudyItemId} />
        </section>
      </OverlayScrollbarsComponent>
    </article>
  )
}
