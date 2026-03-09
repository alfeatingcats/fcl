import { type CreateStudyItemInput } from '@/shared/api/schemas'

export const defaultStudyItemFormValues: Partial<CreateStudyItemInput> = {
  title: '',
  description: {
    root: {
      children: [
        {
          children: [
            {
              detail: 0,
              format: 0,
              mode: 'normal',
              style: '',
              text: 'Hello World 🚀',
              type: 'text',
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          type: 'paragraph',
          version: 1,
        },
      ],
      direction: 'ltr',
      format: '',
      indent: 0,
      type: 'root',
      version: 1,
    },
  } as unknown as CreateStudyItemInput['description'],
  tagIds: [],
}

export type StepInfo = {
  step: number
  date: string
  diff: string
  tooltip: string
}
