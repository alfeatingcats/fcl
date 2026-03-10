import type {
  CompleteRepetitionInput,
  SkipRepetitionInput,
  WaitRepetitionInput,
} from '@/shared/api/schemas'
import { createRepetitionAction } from '@/shared/hooks/repetition'

import {
  useCompleteRepetition,
  useCompleteRepetitionForm,
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
  CompleteRepetitionInput,
  'repetitions',
  'complete'
>(useCompleteRepetition, useCompleteRepetitionForm)

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
