'use client'

import { Flame, ListChecks, TimerOff } from 'lucide-react'
import { useTranslations } from 'next-intl'
import type { FC } from 'react'

import { Card } from '@/components/ui/card'
import { cn } from '@/shared/lib/utils'

import { useRepetitionStats } from '@/entities/repetitions'

export const StatsHeader: FC = () => {
  const t = useTranslations('ReviewCyclePage')
  const { data: stats } = useRepetitionStats()

  if (!stats) {
    return null
  }

  const todayProgress =
    stats.todayTotal > 0
      ? Math.round((stats.todayDone / stats.todayTotal) * 100)
      : 0

  return (
    <div className="flex flex-wrap gap-4 items-stretch">
      <Card className="flex-1 min-w-[200px] p-4 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">
            {t('todayProgress')}
          </span>
          <ListChecks className="size-4 text-muted-foreground" />
        </div>
        <span className="text-2xl font-bold">
          {stats.todayDone}/{stats.todayTotal}
        </span>
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <div
            className={cn(
              'h-full rounded-full transition-all duration-500',
              todayProgress === 100
                ? 'bg-green-500'
                : todayProgress > 0
                  ? 'bg-primary'
                  : 'bg-muted',
            )}
            style={{ width: `${todayProgress}%` }}
          />
        </div>
      </Card>

      <Card className="flex-1 min-w-[140px] p-4 flex items-center justify-between gap-2">
        <div className="flex flex-col gap-1">
          <span className="text-sm text-muted-foreground">{t('streak')}</span>
          <span className="text-2xl font-bold">{stats.streak}</span>
        </div>
        <Flame className="size-6 text-orange-500" />
      </Card>

      {stats.overdueCount > 0 && (
        <Card className="flex-1 min-w-[180px] p-4 flex items-center justify-between gap-2">
          <div className="flex flex-col gap-1">
            <span className="text-sm text-muted-foreground">
              {t('overdue')}
            </span>
            <span className="text-2xl font-bold text-destructive">
              {stats.overdueCount}
            </span>
          </div>
          <TimerOff className="size-6 text-destructive" />
        </Card>
      )}
    </div>
  )
}
