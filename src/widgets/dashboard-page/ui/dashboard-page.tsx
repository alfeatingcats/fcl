'use client'

import { omit } from 'es-toolkit'
import { upperCase } from 'es-toolkit/string'
import { TrendingUp } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useMemo } from 'react'
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  type ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'
import type { RepetitionStatusTKey } from '@/shared/types'

import { api } from '@/trpc/react'

export const description = 'A stacked bar chart with a legend'

const chartConfig = {
  repetitions: {
    label: 'Повтори',
    color: 'var(--chart-2)',
  },
  total: {
    label: 'Усього',
    color: 'var(--chart-1)',
  },
} satisfies ChartConfig

export function DashboardPage() {
  const t = useTranslations('RepetitionStatus')
  const [stats] = api.repetitions.getStats.useSuspenseQuery()

  const chartData2 = useMemo(() => {
    return Object.entries(omit(stats, ['total'])).map(([key, value]) => ({
      status: key,
      repetitions: value,
      total: stats.total - value,
    }))
  }, [stats])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Bar Chart - Stacked + Legend</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData2}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="status"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) =>
                t(upperCase(value) as RepetitionStatusTKey)
              }
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar
              dataKey="repetitions"
              stackId="a"
              fill="var(--color-repetitions)"
              radius={[0, 0, 4, 4]}
            />
            <Bar
              dataKey="total"
              stackId="a"
              fill="var(--color-total)"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}
