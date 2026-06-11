import type { StudyRepetition } from '@prisma/client'
import type { ColumnDef } from '@tanstack/react-table'
import { HeadingIcon, type LucideIcon, Waypoints } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { type FC, type ReactElement, useCallback, useMemo } from 'react'

import { PillIndicator } from '@/components/kibo-ui/pill'
import { cn } from '@/shared/lib/utils'
import type {
  RepetitionActionType,
  RepetitionOverlayPayload,
} from '@/shared/types'

import {
  CompletedEventDateTime,
  NextEventDateTime,
  RepetitionDifficulty,
} from '@/entities/repetitions'
import type { RepetitionListProps } from '@/entities/repetitions/model'
import { RepetitionActionDropdown } from '@/entities/repetitions/ui/card-dropdown'
import { RepetitionStage } from '@/entities/repetitions/ui/repetition-stage'
import { RepetitionStatus } from '@/entities/repetitions/ui/repetition-status'

type HeaderCellProps = {
  title: string
  icon: LucideIcon | ReactElement
  className?: string
}

export const HeaderCell: FC<HeaderCellProps> = ({ title, className }) => {
  // const iconElement = isValidElement(icon)
  //   ? cloneElement(icon as ReactElement<{ className?: string }>, {
  //       className: "size-3 text-black dark:text-white",
  //     })
  //   : createElement(icon, {
  //       className: "size-3 text-black dark:text-white",
  //     });

  return (
    <div className={cn('flex items-center gap-2', className)}>
      {/* <span className="">{iconElement}</span> */}
      <span className="font-normal text-black dark:text-white">{title}</span>
    </div>
  )
}

function parseTime(v: string | Date | undefined | null): number | null {
  if (v == null) return null
  if (v instanceof Date) {
    const t = v.getTime()
    return Number.isNaN(t) ? null : t
  }
  const t = Date.parse(String(v)) // ISO strings -> UTC
  return Number.isNaN(t) ? null : t
}

/**
 * Returns the nearest upcoming repetition or null.
 * excludeCompleted — if true (default), skips status === "COMPLETED".
 * nowMs — can be passed for tests.
 */
export function getNextRepetition(
  reps: StudyRepetition[],
  opts?: { excludeCompleted?: boolean; nowMs?: number },
): StudyRepetition | null {
  const excludeCompleted = opts?.excludeCompleted ?? true
  const now = opts?.nowMs ?? Date.now()

  let best: StudyRepetition | null = null
  let bestTime = Infinity

  for (const r of reps) {
    if (excludeCompleted && r.status === 'COMPLETED') continue

    const t = parseTime(r.due)
    if (t === null) continue // invalid date or null
    if (t <= now) continue // in the past or now — skip

    if (t < bestTime) {
      bestTime = t
      best = r
    }
  }

  return best
}

export const COLUMN_ID = 'COLUMN_ID'

type UseRepetitionColumnsParams = Omit<RepetitionListProps, 'repetitions'> & {
  data: Array<StudyRepetition>
}

export const useRepetitionColumns = ({
  data,
  onReviewRepetition,
}: UseRepetitionColumnsParams) => {
  const t = useTranslations('Repetitions')
  const tst = useTranslations('StudyItemTable')

  const nextRepetition = useMemo(
    () => getNextRepetition(data, { excludeCompleted: true }),
    [data],
  )

  const onRepetitionAction = useCallback(
    (repetitionId: RepetitionOverlayPayload) => (type: RepetitionActionType) =>
      onReviewRepetition({ repetitionId, action: type }),
    [onReviewRepetition],
  )

  const columns: ColumnDef<StudyRepetition>[] = [
    {
      accessorKey: 'id',
      header() {
        return (
          <div className="ml-1 max-w-[50%]!">
            <Waypoints size={15} />
          </div>
        )
      },
      cell: ({ row }) => {
        const isNext = nextRepetition?.id === row.original.id
        const currentStatus = row.getValue<StudyRepetition['status']>('status')
        return (
          <span className="ml-2 flex items-center justify-start">
            <PillIndicator
              variant={
                isNext
                  ? 'info'
                  : currentStatus === 'COMPLETED'
                    ? 'success'
                    : 'default'
              }
              pulse={isNext}
            />
          </span>
        )
      },
      id: COLUMN_ID,
    },
    {
      header() {
        return <HeaderCell title={t('stageLabel')} icon={HeadingIcon} />
      },
      size: 180,
      maxSize: 200,
      minSize: 100,
      accessorKey: 'reps',
      cell: ({ row }) => {
        return (
          <RepetitionStage
            wVariant="simple"
            currentStage={row.getValue('reps')}
            withLabel={false}
            icon={null}
          />
        )
      },
    },
    {
      header() {
        return <HeaderCell title={tst('status')} icon={HeadingIcon} />
      },
      size: 180,
      maxSize: 200,
      minSize: 100,
      accessorKey: 'status',
      cell: ({ row }) => {
        return (
          <RepetitionStatus status={row.getValue('status')} withLabel={false} />
        )
      },
    },
    {
      header() {
        return <HeaderCell title={t('difficultyLabel')} icon={HeadingIcon} />
      },
      size: 180,
      maxSize: 200,
      minSize: 100,
      accessorKey: 'difficulty',
      cell: ({ row }) => {
        return (
          <RepetitionDifficulty
            wVariant="simple"
            difficulty={row.getValue('difficulty')}
          />
        )
      },
    },
    {
      header() {
        return <HeaderCell title={t('scheduledAt')} icon={HeadingIcon} />
      },
      size: 180,
      maxSize: 200,
      minSize: 100,
      accessorKey: 'due',
      cell: ({ row }) => {
        return (
          <NextEventDateTime
            withLabel={false}
            scheduledAt={row.getValue('due')}
            wVariant="simple"
          />
        )
      },
    },
    {
      header() {
        return <HeaderCell title={t('completedAt')} icon={HeadingIcon} />
      },
      size: 180,
      maxSize: 200,
      minSize: 100,
      accessorKey: 'completedAt',
      cell: ({ row }) => {
        return (
          <CompletedEventDateTime
            wVariant="simple"
            completedAt={row.getValue('completedAt')}
          />
        )
      },
    },
    {
      header() {
        return <HeaderCell title={''} icon={HeadingIcon} />
      },
      id: '111',
      meta: 'bg-background/80 sticky right-0 z-10 backdrop-blur-xs',
      accessorKey: 'updatedAt',
      cell: ({ row }) => {
        const status = row.getValue<StudyRepetition['status']>('status')
        const repetitionId = row.original.id

        return (
          <div className="flex w-10 items-center justify-center pr-2">
            <RepetitionActionDropdown
              onCompleteRepetition={onRepetitionAction(repetitionId)}
              onSkipRepetition={onRepetitionAction(repetitionId)}
              onWaitRepetition={onRepetitionAction(repetitionId)}
              status={status}
            />
          </div>
        )
      },
    },
  ]
  return columns
}
