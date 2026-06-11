'use client'

import { useTranslations } from 'next-intl'
import { type FC, useCallback, useState } from 'react'

import { Button } from '@/components/ui/button'

import type { RepetitionsListRow } from '@/entities/repetitions'
import { ActionRepetitionModal } from '@/entities/repetitions'
import { ReviewRepetitionForm } from '@/features/complete-repetition'

import {
  useCompleteRepetitionAction,
  useSkipRepetitionAction,
  useWaitRepetitionAction,
} from '../model/hooks'
import { StatsHeader } from './stats-header'
import { TodayList } from './today-list'

type ActiveRepState = {
  repetitionId: string | null
  action: 'complete' | 'skip' | 'wait' | null
  title: string
  description: string | null
  descriptionText: string
}

const defaultActiveRep: ActiveRepState = {
  repetitionId: null,
  action: null,
  title: '',
  description: null,
  descriptionText: '',
}

export const RepetitionsPage: FC = () => {
  const t = useTranslations('Repetitions')

  const [activeRep, setActiveRep] = useState<ActiveRepState>(defaultActiveRep)

  const onClear = useCallback(() => setActiveRep(defaultActiveRep), [])

  const {
    form: completeForm,
    isLoading: isCompleteLoading,
    onSubmit: onCompleteSubmit,
  } = useCompleteRepetitionAction(activeRep, onClear)
  const {
    form: skipForm,
    isLoading: isSkipLoading,
    onSubmit: onSkipSubmit,
  } = useSkipRepetitionAction(activeRep, onClear)
  const {
    form: waitForm,
    isLoading: isWaitLoading,
    onSubmit: onWaitSubmit,
  } = useWaitRepetitionAction(activeRep, onClear)

  const handleRepAction = useCallback(
    (action: 'complete' | 'skip' | 'wait', row: RepetitionsListRow) => {
      setActiveRep({
        repetitionId: row.id,
        action,
        title: row.title,
        description: row.description as string | null,
        descriptionText: row.descriptionText ?? '',
      })
    },
    [],
  )

  return (
    <div className="flex flex-col gap-6">
      <StatsHeader />

      <TodayList
        onCompleteRepetition={(row) => handleRepAction('complete', row)}
        onSkipRepetition={(row) => handleRepAction('skip', row)}
        onWaitRepetition={(row) => handleRepAction('wait', row)}
      />

      <ActionRepetitionModal
        onClear={onClear}
        entity={{
          title: activeRep.title,
          description: activeRep.descriptionText,
        }}
        overlay={{
          title: t('completeButton'),
          description: t('completeRepetitionDescription'),
        }}
        isOpen={activeRep.action === 'complete'}
        renderContent={<ReviewRepetitionForm form={completeForm} />}
        renderSubmitButton={
          <Button
            onClick={completeForm.handleSubmit(onCompleteSubmit)}
            disabled={isCompleteLoading}
          >
            {t('completeLabel')}
          </Button>
        }
      />
      <ActionRepetitionModal
        onClear={onClear}
        entity={{
          title: activeRep.title,
          description: activeRep.descriptionText,
        }}
        overlay={{
          title: t('skipOverlayTitle'),
          description: t('skipRepetitionDescription'),
        }}
        isOpen={activeRep.action === 'skip'}
        renderContent={null}
        renderSubmitButton={
          <Button
            onClick={skipForm.handleSubmit(onSkipSubmit)}
            disabled={isSkipLoading}
          >
            {t('skipLabel')}
          </Button>
        }
      />
      <ActionRepetitionModal
        onClear={onClear}
        entity={{
          title: activeRep.title,
          description: activeRep.descriptionText,
        }}
        overlay={{
          title: t('waitOverlayTitle'),
          description: t('waitRepetitionDescription'),
        }}
        isOpen={activeRep.action === 'wait'}
        renderContent={null}
        renderSubmitButton={
          <Button
            onClick={waitForm.handleSubmit(onWaitSubmit)}
            disabled={isWaitLoading}
          >
            {t('waitLabel')}
          </Button>
        }
      />
    </div>
  )
}
