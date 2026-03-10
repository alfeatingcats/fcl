import { zodResolver } from '@hookform/resolvers/zod'
import type { FC, ReactNode } from 'react'
import { useForm } from 'react-hook-form'

import { Form } from '@/components/ui/form'
import {
  type ReadStudyItemInput,
  ReadStudyItemsSchema,
} from '@/shared/api/schemas'
import type { ReadStudyItemsOutputSchemaType } from '@/shared/api/schemas/fg/study-item'

import { StudyItemTableContent } from './table-content'
import { StudyItemTableFooter } from './table-footer'
import { StudyItemTableHeader } from './table-header'

// const filterSchema = z.object({
//   search: z.string().optional(),
//   status: z.array(z.string()).optional(),
//   tags: z.array(z.string()).optional(),
//   page: z.number().min(1).default(1),
//   pageSize: z.number().min(10).max(100).default(20),
// });

interface StudyItemDataTableProps {
  studyItems: ReadStudyItemsOutputSchemaType['items']
  //   totalCount: number;
  renderCreateButton?: ReactNode
  //   onFilterChange?: (filters: ReadStudyItemInput) => void;
}

export const StudyItemDataTable: FC<StudyItemDataTableProps> = ({
  studyItems,
  //   totalCount,
  renderCreateButton,
  //   onFilterChange,
}) => {
  const form = useForm<ReadStudyItemInput>({
    resolver: zodResolver(ReadStudyItemsSchema),
    defaultValues: {
      search: '',
    },
  })

  const handleFormChange = (values: ReadStudyItemInput) => {
    console.log('Form values changed:', values)

    // onFilterChange?.(values);
  }

  return (
    <Form {...form}>
      <div onChange={form.handleSubmit(handleFormChange)} className="space-y-3">
        <StudyItemTableHeader
          form={form}
          renderCreateButton={renderCreateButton}
        />

        <StudyItemTableContent studyItems={studyItems} />

        <StudyItemTableFooter form={form} totalCount={10} />
      </div>
    </Form>
  )
}

export { StudyItemTableContent } from './table-content'
export { StudyItemTableFooter } from './table-footer'
export { StudyItemTableHeader } from './table-header'
