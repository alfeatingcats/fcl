import { useTranslations } from 'next-intl'
import {
  type Dispatch,
  type SetStateAction,
  useCallback,
  useMemo,
  useState,
} from 'react'

import {
  defaultRepetitionActionState,
  getActiveRepetitionDetails,
  getRepetitionOverlayConfig,
} from '@/shared/lib/repetition'
import type { RepetitionActionState } from '@/shared/types'
import type { UseRepetitionsOverlayEntityContentReturn } from '@/shared/types/repetition/repetitions-overlay.types'

import type { RepetitionsListRow } from '@/entities/repetitions'

export type SetRepetitionActionState = Dispatch<
  SetStateAction<RepetitionActionState>
>

export const useRepetitionsOverlayEntityContent = (
  data: Array<RepetitionsListRow>,
): UseRepetitionsOverlayEntityContentReturn => {
  const t = useTranslations('Repetitions')

  const overlayConfig = getRepetitionOverlayConfig(t)

  const [activeRepetition, setActiveRepetition] =
    useState<RepetitionActionState>({ repetitionId: null, action: null })

  const handleClearActiveRepetition = useCallback(() => {
    setActiveRepetition(defaultRepetitionActionState)
  }, [])

  const activeRepetitionDetails = useMemo(
    () => getActiveRepetitionDetails(data, activeRepetition.repetitionId),
    [activeRepetition, data],
  )

  return useMemo(
    () => ({
      ...overlayConfig,
      ...activeRepetitionDetails!,
      onClear: handleClearActiveRepetition,
      setActiveRepetition,
      activeRepetition,
    }),
    [
      activeRepetition,
      activeRepetitionDetails,
      handleClearActiveRepetition,
      overlayConfig,
    ],
  )
}
