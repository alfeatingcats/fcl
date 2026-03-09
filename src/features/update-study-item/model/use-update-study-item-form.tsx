'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import {
  type UpdateStudyItemInput,
  UpdateStudyItemSchema,
} from '@/shared/api/schemas'

type UseStudyItemFormProps = {
  defaultValues?: Partial<
    Pick<UpdateStudyItemInput, 'description' | 'tagIds' | 'title' | 'id'>
  >
}

export const useUpdateStudyItemForm = (props?: UseStudyItemFormProps) =>
  useForm<UpdateStudyItemInput>({
    resolver: zodResolver(
      UpdateStudyItemSchema.pick({
        id: true,
        title: true,
        description: true,
        tagIds: true,
      }),
    ),
    defaultValues: props?.defaultValues ?? {},
    mode: 'onChange',
  })
