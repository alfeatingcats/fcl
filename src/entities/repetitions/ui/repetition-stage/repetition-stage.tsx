import { Waypoints } from 'lucide-react'
import { useTranslations } from 'next-intl'
import type { FC, ReactNode } from 'react'

import type { LabeledComponentProps } from '@/shared/types'

import { EventBadge } from '../badge'
import type { RepetitionBadgeVariants } from '../badge/repetition-badge'

type RepetitionStageProps = {
  currentStage: number
  icon?: ReactNode | null
} & LabeledComponentProps &
  RepetitionBadgeVariants

export const RepetitionStage: FC<RepetitionStageProps> = ({
  currentStage,
  withLabel = true,
  wVariant,
  icon,
}) => {
  const t = useTranslations('Repetitions')
  return (
    <EventBadge
      wVariant={wVariant}
      label={withLabel ? t('stageLabel') : null}
      details={t('stageCount', {
        current: String(currentStage),
        total: '7',
      })}
      icon={icon && <Waypoints className="mr-1" />}
    />
  )
}
