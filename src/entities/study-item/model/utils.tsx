import type { StudyItem } from '@prisma/client'
import type { createFormatter } from 'next-intl'

import { createFSRSCard } from '@/shared/lib/utils'
import type { IntlFormatter, TimeTranslations } from '@/shared/types'

export const canRowExpand = (item: StudyItem) => Boolean(item.description)

/**
 * Formats the difference between two dates.
 * @param t — translation function useTranslations("Time")
 * @param prev — start date
 * @param next — end date
 */
export function formatDiff(
  t: TimeTranslations,
  prev: Date | null,
  next: Date,
): string {
  if (!prev) return ''

  const diffMs = next.getTime() - prev.getTime()
  const diffMinutes = Math.floor(diffMs / 60000)

  if (diffMinutes < 60) return t('inMinutes', { count: diffMinutes })
  const diffHours = Math.floor(diffMinutes / 60)
  if (diffHours < 24) return t('inHours', { count: diffHours })
  const diffDays = Math.floor(diffHours / 24)
  if (diffDays < 7) return t('inDays', { count: diffDays })
  const diffWeeks = Math.floor(diffDays / 7)
  return t('inWeeks', { count: diffWeeks })
}

export function formatCreatedDate(
  date: Date,
  format: ReturnType<typeof createFormatter>,
) {
  return format.dateTime(date, { dateStyle: 'short' })
}

export function createStepTimeline(format: IntlFormatter) {
  const formatStepDate = (date: Date): string => {
    return format.dateTime(date, {
      hour: '2-digit',
      minute: '2-digit',
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    })
  }

  const formatStepDateTooltip = (date: Date): string => {
    return format.dateTime(date, {
      weekday: 'long',
      day: '2-digit',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    })
  }

  const card = createFSRSCard(new Date())
  return [
    {
      step: 1,
      date: formatStepDate(card.due),
      diff: '',
      tooltip: formatStepDateTooltip(card.due),
    },
  ]
}
