import { MICRO_CHART_CONFIG } from "./config";
import { getDefaultRepetitionDates } from "../shared/utils";
import type { ChartPoint, RepetitionChartProps } from "../shared/types";

// Calculate the position of the current point on the X axis
export const getCurrentPointX = (data: RepetitionChartProps): number | null => {
  const {
    currentRepetition = 1,
    repetitionDates = getDefaultRepetitionDates(),
  } = data;
  const idx = currentRepetition - 1;
  if (idx < 0 || idx >= repetitionDates.length) return null;

  return Math.round(
    (idx / (repetitionDates.length - 1)) * MICRO_CHART_CONFIG.pointsCount,
  );
};

// Calculate retention using the Ebbinghaus formula
export const calculateRetention = (
  time: number,
  repetitionDates: Date[],
): number => {
  let retention = MICRO_CHART_CONFIG.maxRetention;

  for (let j = 0; j < repetitionDates.length; j++) {
    const repDate = repetitionDates[j];
    if (!repDate) continue;

    const repTime = repDate.getTime();
    if (time >= repTime) {
      const daysSinceRep = (time - repTime) / MICRO_CHART_CONFIG.msPerDay;
      // Forgetting curve: R = e^(-t/S), where S increases with each repetition
      const strength = Math.pow(2, j + 1);
      retention =
        MICRO_CHART_CONFIG.maxRetention * Math.exp(-daysSinceRep / strength);
    }
  }

  return Math.max(MICRO_CHART_CONFIG.minRetention, retention);
};

// Interpolate time between repetitions
const interpolateTime = (
  continuousIndex: number,
  repetitionDates: Date[],
): number => {
  const lowerIndex = Math.floor(continuousIndex);
  const upperIndex = Math.ceil(continuousIndex);
  const localProgress = continuousIndex - lowerIndex;

  const lowerDate = repetitionDates[lowerIndex]?.getTime() ?? Date.now();
  const upperDate = repetitionDates[upperIndex]?.getTime() ?? lowerDate;

  return lowerDate + (upperDate - lowerDate) * localProgress;
};

// Generate Ebbinghaus curve data
export const generateCurveData = (data: RepetitionChartProps): ChartPoint[] => {
  const _data: ChartPoint[] = [];
  const { repetitionDates = getDefaultRepetitionDates() } = data;

  for (let i = 0; i <= MICRO_CHART_CONFIG.pointsCount; i++) {
    const progress = i / MICRO_CHART_CONFIG.pointsCount;
    const continuousIndex = progress * (repetitionDates.length - 1);
    const time = interpolateTime(continuousIndex, repetitionDates);
    const retention = calculateRetention(time, repetitionDates);

    _data.push({ x: i, time, retention });
  }

  return _data;
};
