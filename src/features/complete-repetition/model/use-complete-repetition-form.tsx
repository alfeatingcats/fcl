'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import {
  type ReviewRepetitionInput,
  ReviewRepetitionSchema,
} from '@/shared/api/schemas'

export const useReviewRepetitionForm = (isLoading: boolean) =>
  useForm<ReviewRepetitionInput>({
    resolver: zodResolver(ReviewRepetitionSchema),
    defaultValues: {
      rating: 1,
    },
    disabled: isLoading,
  })
