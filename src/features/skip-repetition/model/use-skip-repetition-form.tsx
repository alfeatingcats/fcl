'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import {
  type SkipRepetitionInput,
  SkipRepetitionSchema,
} from '@/shared/api/schemas'

export const useSkipRepetitionForm = (isLoading: boolean) =>
  useForm<SkipRepetitionInput>({
    resolver: zodResolver(SkipRepetitionSchema),
    disabled: isLoading,
  })
