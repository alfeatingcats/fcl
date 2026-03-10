import {
  getCoreRowModel,
  getExpandedRowModel,
  useReactTable,
} from '@tanstack/react-table'

import type { ReadStudyItemsOutputSchemaType } from '@/shared/api/schemas/fg/study-item'

import { useStudyItemColumns } from './use-study-item-columns'

export const useStudyItemTable = (
  studyItems: ReadStudyItemsOutputSchemaType['items'],
) => {
  const columns = useStudyItemColumns()

  const table = useReactTable<ReadStudyItemsOutputSchemaType['items'][number]>({
    data: studyItems,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    getRowCanExpand: (row) => Boolean(row.original.description),
  })

  return { table }
}
