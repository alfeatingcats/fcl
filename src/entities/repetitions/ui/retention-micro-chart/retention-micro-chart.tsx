"use client";

import React, { useMemo, type FC } from "react";
import { AreaChart, Area, ReferenceDot, Label } from "recharts";

import { ChartContainer } from "@/components/ui/chart";

import {
  getDefaultRepetitionDates,
  type CurrentPoint,
  type RetentionChartProps,
} from "../../model/shared";
import {
  generateCurveData,
  getCurrentPointX,
  MICRO_CHART_CONFIG,
  microChartConfig,
} from "../../model/retention-micro-chart";

export const RetentionMicroChart: FC<RetentionChartProps> = ({
  repetitionDates = getDefaultRepetitionDates(),
  currentRepetition = 1,
}) => {
  const curveData = useMemo(
    () => generateCurveData({ currentRepetition, repetitionDates }),
    [currentRepetition, repetitionDates],
  );

  const currentPointX = useMemo(
    () => getCurrentPointX({ currentRepetition, repetitionDates }),
    [currentRepetition, repetitionDates],
  );

  const currentPoint: CurrentPoint | null = useMemo(
    () =>
      currentPointX !== null
        ? { x: currentPointX, retention: MICRO_CHART_CONFIG.maxRetention }
        : null,
    [currentPointX],
  );

  return (
    <ChartContainer
      config={microChartConfig}
      className="max-h-[38px] min-h-[38px] w-[160px]"
    >
      <AreaChart
        accessibilityLayer
        data={curveData}
        margin={{ top: 6, right: 5, bottom: 5, left: 5 }}
      >
        <defs>
          <linearGradient id="retentionGradient" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="0%"
              stopColor="var(--color-retention)"
              stopOpacity={0.37}
            />
            <stop
              offset="70%"
              stopColor="var(--color-retention)"
              stopOpacity={0.13}
            />
            <stop
              offset="100%"
              stopColor="var(--color-retention)"
              stopOpacity={0.01}
            />
          </linearGradient>

          <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--color-retention)" />
            <stop offset="50%" stopColor="var(--color-retention)" />
            <stop offset="100%" stopColor="var(--color-retention)" />
          </linearGradient>
        </defs>

        <Area
          type="monotone"
          dataKey="retention"
          stroke="url(#lineGradient)"
          strokeWidth={MICRO_CHART_CONFIG.strokeWidth}
          fill="url(#retentionGradient)"
          dot={false}
          isAnimationActive={false}
        />

        {currentPoint && (
          <ReferenceDot
            x={currentPoint.x}
            y={currentPoint.retention}
            r={MICRO_CHART_CONFIG.dotRadius}
            fill="var(--color-retention)"
            stroke="none"
          >
            <Label
              value={currentRepetition}
              position="center"
              fill="white"
              fontSize={9}
              fontWeight="bold"
            />
          </ReferenceDot>
        )}
      </AreaChart>
    </ChartContainer>
  );
};
