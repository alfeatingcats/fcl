import type { ChartConfig } from "@/components/ui/chart";

export const MICRO_CHART_CONFIG = {
  pointsCount: 100,
  minRetention: 20,
  maxRetention: 100,
  dotRadius: 6,
  strokeWidth: 2,
  msPerDay: 24 * 60 * 60 * 1000,
} as const;

export const microChartConfig = {
  retention: {
    label: "Retention",
    theme: {
      light: "oklch(0.488 0.243 264.376)",
      dark: "oklch(0.769 0.188 70.08)",
    },
  },
} satisfies ChartConfig;
