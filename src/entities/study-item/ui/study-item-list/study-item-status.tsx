import {
  CircleCheck,
  CircleDashed,
  CirclePause,
  CircleSlash2Icon,
} from 'lucide-react'
import { useTranslations } from 'next-intl'
import { type FC, useMemo } from 'react'

import type { LabeledComponentProps, StudyItemStatusTKey } from '@/shared/types'

import {
  EventBadge,
  type RepetitionBadgeVariants,
} from '@/entities/repetitions/ui/badge/repetition-badge'

type StudyItemStatusProps = {
  status: StudyItemStatusTKey
} & LabeledComponentProps &
  RepetitionBadgeVariants

export const StudyItemStatus: FC<StudyItemStatusProps> = ({
  status,
  withLabel = true,
  wVariant,
}) => {
  const t = useTranslations('StudyItemTable')
  const ts = useTranslations('StudyItemStatus')

  const repetitionStatus = t('status')
  const statusDescription = ts(status)
  const statusIcon = useMemo(() => {
    switch (status) {
      case 'IN_PROGRESS':
        return <CircleDashed className="mr-1" />
      case 'COMPLETED':
        return <CircleCheck className="mr-1" />
      case 'ARCHIVED':
        return <CircleSlash2Icon className="mr-1" />
      case 'PAUSED':
        return <CirclePause className="mr-1" />
      default:
        return <CircleDashed className="mr-1" />
    }
  }, [status])

  return (
    <EventBadge
      wVariant={wVariant}
      label={withLabel ? repetitionStatus : null}
      details={statusDescription}
      icon={statusIcon}
    />
  )
}
