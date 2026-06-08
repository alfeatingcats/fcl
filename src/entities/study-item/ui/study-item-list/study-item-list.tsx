import type { FC } from 'react'

import type { ReadStudyItemsOutputSchemaType } from '@/shared/api/schemas/fg/study-item'

import { StudyItemListItem } from './study-item-list-item'

type StudyItemListProps = {
  studyItems: ReadStudyItemsOutputSchemaType
  selectStudyItem: (studyItemId: string | null) => void
  studyItemOnDelete: (studyItemId: string) => void
}

export const StudyItemList: FC<StudyItemListProps> = ({
  studyItems,
  selectStudyItem,
  studyItemOnDelete,
}) => {
  return (
    <div className="flex flex-col gap-0">
      {studyItems.items.map((studyItem) => {
        return (
          <StudyItemListItem
            selectStudyItem={selectStudyItem}
            key={studyItem.id}
            studyItem={studyItem}
            onDelete={studyItemOnDelete}
          />
        )
      })}
    </div>
  )
}
