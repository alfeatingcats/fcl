import type { StudyItemTag, StudyRepetition, Tag } from '@prisma/client'
import type { ColumnDef } from '@tanstack/react-table'
import {
  Calendar,
  Flag,
  HeadingIcon,
  Settings,
  Tags,
  TextIcon,
  WaypointsIcon,
} from 'lucide-react'
import { useFormatter, useTranslations } from 'next-intl'

import { Checkbox } from '@/components/ui/checkbox'
import type { ReadStudyItemsOutputSchemaType } from '@/shared/api/schemas/fg/study-item'

import {
  CreatedCell,
  HeaderCell,
  RepetitionsCell,
  StatusCell,
  TagsCell,
  TitleCell,
} from '@/entities/study-item/ui'
import { DeleteStudyItemButton } from '@/features/delete-study-item'

export const useStudyItemColumns = () => {
  const t = useTranslations('StudyItemTable')
  const ts = useTranslations('StudyItemStatus')
  const tsi = useTranslations('Sidebar')

  const format = useFormatter()
  const columns: ColumnDef<ReadStudyItemsOutputSchemaType['items'][number]>[] =
    [
      {
        id: 'select',
        size: 40,
        maxSize: 40,
        minSize: 40,
        header: ({ table }) => (
          <Checkbox
            checked={
              table.getIsAllPageRowsSelected() ||
              (table.getIsSomePageRowsSelected() && 'indeterminate')
            }
            onCheckedChange={(value) =>
              table.toggleAllPageRowsSelected(!!value)
            }
            aria-label={t('selectAll')}
            className="mr-1.5! ml-1.5!"
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label={t('selectRow')}
            className="ml-1.5!"
          />
        ),
      },
      {
        header() {
          return <HeaderCell title={t('title')} icon={HeadingIcon} />
        },
        size: 180,
        maxSize: 200,
        minSize: 100,
        accessorKey: 'title',
        cell: ({ row }) => {
          return (
            <TitleCell title={row.getValue('title')} id={row.original.id} />
          )
        },
      },
      {
        header() {
          return <HeaderCell title={t('description')} icon={TextIcon} />
        },
        accessorKey: 'descriptionText',
        maxSize: 200,
        size: 180,
        minSize: 100,
        cell: ({ row }) => (
          <div className="truncate">
            {row.getValue('descriptionText') ?? ''}
          </div>
        ),
      },
      {
        header() {
          return <HeaderCell title={t('created')} icon={Calendar} />
        },
        size: 180,
        maxSize: 200,
        minSize: 100,
        accessorKey: 'createdAt',
        cell: ({ row }) => (
          <CreatedCell format={format} createdAt={row.getValue('createdAt')} />
        ),
      },
      {
        header() {
          return <HeaderCell title={tsi('reviewCycle')} icon={WaypointsIcon} />
        },
        size: 180,
        maxSize: 200,
        minSize: 100,
        accessorKey: 'repetitions',
        cell: ({ row }) => {
          const repetitions: StudyRepetition[] = row.getValue('repetitions')
          return <RepetitionsCell repetitions={repetitions} />
        },
      },
      {
        header() {
          return <HeaderCell title={t('status')} icon={Flag} />
        },
        size: 120,
        maxSize: 140,
        minSize: 100,
        accessorKey: 'status',
        cell: ({ row }) => (
          <StatusCell status={row.getValue('status')} t={ts} />
        ),
      },
      {
        header() {
          return <HeaderCell title={t('tags')} icon={Tags} />
        },
        accessorKey: 'itemTags',
        size: 120,
        maxSize: 140,
        minSize: 100,
        cell: ({ row }) => {
          const tags: Array<StudyItemTag & { tag: Tag }> =
            row.getValue('itemTags')
          return <TagsCell tags={tags} />
        },
      },
      {
        header() {
          return <HeaderCell title={t('actions')} icon={Settings} />
        },
        accessorKey: 'id',
        size: 120,
        maxSize: 140,
        minSize: 100,
        cell: () => {
          return <DeleteStudyItemButton size={'sm'} />
        },
      },
    ]
  return columns
}
