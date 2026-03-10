'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import {
  type CreateStudyItemInput,
  CreateStudyItemSchema,
} from '@/shared/api/schemas'

import { defaultStudyItemFormValues } from './utils'

type UseStudyItemFormProps = {
  defaultValues?: Partial<CreateStudyItemInput>
}

export const useStudyItemForm = ({
  defaultValues = defaultStudyItemFormValues,
}: UseStudyItemFormProps) => {
  const form = useForm<CreateStudyItemInput>({
    resolver: zodResolver(CreateStudyItemSchema),
    defaultValues,
  })

  return { form }
}
