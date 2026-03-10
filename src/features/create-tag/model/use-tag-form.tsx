'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { type UseFormReturn, useForm } from 'react-hook-form'

import { type CreateTagInput, CreateTagSchema } from '@/shared/api/schemas'

import { defaultTagFormValues } from './utils'

type UseTagFormProps = {
  defaultValues?: Partial<CreateTagInput>
}

type TagFormReturn = UseFormReturn<CreateTagInput>

export const useTagForm = (props?: UseTagFormProps): TagFormReturn =>
  useForm<CreateTagInput>({
    resolver: zodResolver(CreateTagSchema),
    defaultValues: props?.defaultValues ?? defaultTagFormValues,
  })
