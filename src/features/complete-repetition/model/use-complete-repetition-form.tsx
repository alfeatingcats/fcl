'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import {
  type CompleteRepetitionInput,
  CompleteRepetitionSchema,
} from '@/shared/api/schemas'

export const useCompleteRepetitionForm = (isLoading: boolean) =>
  useForm<CompleteRepetitionInput>({
    resolver: zodResolver(CompleteRepetitionSchema),
    defaultValues: {
      difficulty: 1,
    },
    disabled: isLoading,
  })
