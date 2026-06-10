import { useFormatter } from 'next-intl'
import { type FC, useCallback } from 'react'

import { Badge } from '@/components/ui/badge'
import { useDateFnsConfig } from '@/shared/lib/date'
import type {
  RepetitionActionType,
  RepetitionOverlayPayload,
} from '@/shared/types'

import type { RepetitionListProps } from '../../model/shared'
import { RepetitionListRow } from '../list-row'

export const RepetitionList: FC<RepetitionListProps> = ({
  repetitions,
  onCompleteRepetition,
}) => {
  const format = useFormatter()
  const { withTZ } = useDateFnsConfig()

  const formattedScheduledTime = useCallback(
    (scheduledAt: Date) => {
      return format.dateTime(withTZ(scheduledAt), {
        hour: 'numeric',
        minute: 'numeric',
      })
    },
    [format.dateTime, withTZ],
  )
  const onRepetitionAction = useCallback(
    (repetitionId: RepetitionOverlayPayload) => (type: RepetitionActionType) =>
      onCompleteRepetition({ repetitionId, action: type }),
    [onCompleteRepetition],
  )

  return (
    <section className="flex flex-col gap-10 w-120">
      {repetitions.map((repetitionData) => (
        <div
          key={repetitionData.id}
          className="flex justify-center items-start"
        >
          <RepetitionListRow
            {...repetitionData}
            onCompleteRepetition={onRepetitionAction(repetitionData.id)}
            onSkipRepetition={onRepetitionAction(repetitionData.id)}
            onWaitRepetition={onRepetitionAction(repetitionData.id)}
          />
          <TimeLite />
          <Badge variant="secondary" className="mt-2">
            {formattedScheduledTime(repetitionData.scheduledAt)}
          </Badge>
        </div>
      ))}
    </section>
  )
}

const TimeLite = () => {
  return (
    <div className="flex flex-1 mt-4.5 z-20 relative">
      <div className="h-px bg-accent absolute w-[88%] left-0"></div>
    </div>
  )
}
