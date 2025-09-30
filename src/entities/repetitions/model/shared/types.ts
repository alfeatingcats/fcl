export interface ChartPoint {
  x: number;
  time: number;
  retention: number;
}

export interface CurrentPoint {
  x: number;
  retention: number;
}

export interface RetentionChartProps {
  repetitionDates?: Date[];
  currentRepetition?: number;
}
