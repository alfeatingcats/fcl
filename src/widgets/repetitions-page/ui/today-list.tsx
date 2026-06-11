'use client'

import { compareAsc } from 'date-fns'
import { cloneDeep } from 'es-toolkit'
import { useTranslations } from 'next-intl'
import { type FC, useMemo } from 'react'

import type { RepetitionActionState } from '@/shared/types'

import {
  RepetitionList,
  type RepetitionsListRow,
  useTodayRepetitions,
} from '@/entities/repetitions'

import { mapTodayRepetitionsToListData } from '../model'

type TodayListProps = {
  onCompleteRepetition: (row: RepetitionsListRow) => void
  onSkipRepetition: (row: RepetitionsListRow) => void
  onWaitRepetition: (row: RepetitionsListRow) => void
}

export const TodayList: FC<TodayListProps> = ({
  onCompleteRepetition,
  onSkipRepetition,
  onWaitRepetition,
}) => {
  const t = useTranslations('Repetitions')
  const { data } = useTodayRepetitions()

  const rows = useMemo<Array<RepetitionsListRow>>(
    () =>
      data
        ? cloneDeep(mapTodayRepetitionsToListData(data)).sort((a, b) =>
            compareAsc(a.due, b.due),
          )
        : [],
    [data],
  )

  const handleReview = (state: RepetitionActionState) => {
    if (!state.repetitionId) return
    const row = rows.find((r) => r.id === state.repetitionId)
    if (!row) return
    if (state.action === 'complete') onCompleteRepetition(row)
    else if (state.action === 'skip') onSkipRepetition(row)
    else if (state.action === 'wait') onWaitRepetition(row)
  }

  if (rows.length === 0) {
    return (
      <p className="text-muted-foreground text-center py-12">
        {t('noRepetitionsToday')}
      </p>
    )
  }

  return (
    <RepetitionList
      repetitions={rows}
      onReviewRepetition={handleReview}
      onSkipRepetition={handleReview}
      onWaitRepetition={handleReview}
    />
  )
}
