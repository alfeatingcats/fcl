'use client'

import { useTranslations } from 'next-intl'
import { type FC, useMemo } from 'react'

import { Button } from '@/components/ui/button'

import {
  ActionRepetitionModal,
  RepetitionList,
  type RepetitionsListRow,
  useTodayRepetitions,
} from '@/entities/repetitions'
import { CompleteRepetitionForm } from '@/features/complete-repetition'

import { mapTodayRepetitionsToListData } from '../model'
import {
  useCompleteRepetitionAction,
  useRepetitionsOverlayEntityContent,
  useSkipRepetitionAction,
  useWaitRepetitionAction,
} from '../model/hooks'

export const RepetitionsPage: FC = () => {
  const t = useTranslations('Repetitions')
  const tp = useTranslations('ReviewCyclePage')

  const [todayRepetitions] = useTodayRepetitions()

  const repetitionsListData = useMemo<Array<RepetitionsListRow>>(
    () => mapTodayRepetitionsToListData(todayRepetitions),
    [todayRepetitions],
  )

  const {
    skip,
    wait,
    title,
    onClear,
    complete,
    // description,
    activeRepetition,
    repetitionNumber,
    setActiveRepetition,
    descriptionText,
  } = useRepetitionsOverlayEntityContent(repetitionsListData)

  const {
    form: completeForm,
    isLoading: isCompleteLoading,
    onSubmit: onCompleteSubmit,
  } = useCompleteRepetitionAction(activeRepetition, onClear)
  const {
    form: skipForm,
    isLoading: isSkipLoading,
    onSubmit: onSkipSubmit,
  } = useSkipRepetitionAction(activeRepetition, onClear)
  const {
    form: waitForm,
    isLoading: isWaitLoading,
    onSubmit: onWaitSubmit,
  } = useWaitRepetitionAction(activeRepetition, onClear)

  return (
    <div className="flex flex-col gap-4">
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        {tp('title')}
      </h3>
      <RepetitionList
        repetitions={repetitionsListData}
        onCompleteRepetition={setActiveRepetition}
        onSkipRepetition={setActiveRepetition}
        onWaitRepetition={setActiveRepetition}
      />

      <ActionRepetitionModal
        onClear={onClear}
        entity={{
          title: title,
          description: descriptionText,
        }}
        repetitionNumber={repetitionNumber || ''}
        overlay={{
          title: complete.overlay.title,
          description: complete.overlay.description,
        }}
        isOpen={activeRepetition.action === 'complete'}
        renderContent={<CompleteRepetitionForm form={completeForm} />}
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
          title: title,
          description: descriptionText,
        }}
        repetitionNumber={repetitionNumber || ''}
        overlay={{
          title: skip.overlay.title,
          description: skip.overlay.description,
        }}
        isOpen={activeRepetition.action === 'skip'}
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
          title: title,
          description: descriptionText,
        }}
        repetitionNumber={repetitionNumber || ''}
        overlay={{
          title: wait.overlay.title,
          description: wait.overlay.description,
        }}
        isOpen={activeRepetition.action === 'wait'}
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
