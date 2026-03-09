'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import {
  type TagFormReturn,
  type UpdateTagFormInput,
  UpdateTagFormSchema,
  type UseTagFormProps,
} from './types'

export const useUpdateTagForm = (props?: UseTagFormProps): TagFormReturn =>
  useForm<UpdateTagFormInput>({
    resolver: zodResolver(UpdateTagFormSchema),
    defaultValues: props?.defaultValues,
  })
