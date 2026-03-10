'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import {
  type WaitRepetitionInput,
  WaitRepetitionSchema,
} from '@/shared/api/schemas'

export const useWaitRepetitionForm = (isLoading: boolean) =>
  useForm<WaitRepetitionInput>({
    resolver: zodResolver(WaitRepetitionSchema),
    disabled: isLoading,
  })
