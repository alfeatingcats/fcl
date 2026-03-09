'use client'

import { type TZDate, TZDateMini } from '@date-fns/tz'
import { useCallback, useMemo } from 'react'

import { useUserStore } from '@/shared/stores'

export const useDateFnsConfig = () => {
  const timeZone = useUserStore((s) => s.timeZone)

  const withTZ = useCallback(
    (date: string | Date | number): TZDate => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      return TZDateMini.tz(timeZone, date)
    },
    [timeZone],
  )

  const dateConfig = useMemo(() => ({ timeZone, withTZ }), [timeZone, withTZ])

  return dateConfig
}
