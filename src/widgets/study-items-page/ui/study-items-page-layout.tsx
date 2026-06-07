'use client'

import { useTranslations } from 'next-intl'
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react'
import type { FC, ReactNode } from 'react'

import { StudyItemsListHeader } from './study-items-list-header'

type StudyItemsPageLayoutProps = {
  list: ReactNode
  content: ReactNode
  createStudyItemButton: ReactNode
}

export const StudyItemsPageLayout: FC<StudyItemsPageLayoutProps> = ({
  content,
  list,
  createStudyItemButton,
}) => {
  return (
    <article className="flex max-h-[calc(100vh-16px)] h-full">
      <div className="w-90 min-w-90 max-w-90 border-r">
        <StudyItemsListHeader createStudyItemButton={createStudyItemButton} />

        <OverlayScrollbarsComponent
          className="max-h-[calc(100vh-16px-60px)]"
          element="span"
          options={{
            scrollbars: { autoHide: 'scroll' },
            overflow: { x: 'hidden', y: 'scroll' },
          }}
          defer
        >
          {list}
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
        <section className="p-3 min-w-full h-full">{content}</section>
      </OverlayScrollbarsComponent>
    </article>
  )
}
