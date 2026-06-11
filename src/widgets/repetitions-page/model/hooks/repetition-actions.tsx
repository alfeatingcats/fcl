import type {
  ReviewRepetitionInput,
  SkipRepetitionInput,
  WaitRepetitionInput,
} from '@/shared/api/schemas'
import { createRepetitionAction } from '@/shared/hooks/repetition'

import {
  useReviewRepetition,
  useReviewRepetitionForm,
} from '@/features/complete-repetition'
import {
  useSkipRepetition,
  useSkipRepetitionForm,
} from '@/features/skip-repetition'
import {
  useWaitRepetition,
  useWaitRepetitionForm,
} from '@/features/wait-repetition'

export const useCompleteRepetitionAction = createRepetitionAction<
  ReviewRepetitionInput,
  'repetitions',
  'review'
>(useReviewRepetition, useReviewRepetitionForm)

export const useSkipRepetitionAction = createRepetitionAction<
  SkipRepetitionInput,
  'repetitions',
  'skip'
>(useSkipRepetition, useSkipRepetitionForm)

export const useWaitRepetitionAction = createRepetitionAction<
  WaitRepetitionInput,
  'repetitions',
  'wait'
>(useWaitRepetition, useWaitRepetitionForm)
