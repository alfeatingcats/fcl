import { format, differenceInMinutes } from "date-fns";
import {
  differenceInHours,
  differenceInDays,
  differenceInWeeks,
} from "date-fns";

import { generateRepetitionSchedule } from "@/lib/utils";

export const formatDiff = (prev: Date | null, next: Date): string => {
  if (!prev) return "";
  const min = differenceInMinutes(next, prev);
  if (min < 60) return `in ${min} mins`;
  const hours = differenceInHours(next, prev);
  if (hours < 24) return `in ${hours} hrs`;
  const days = differenceInDays(next, prev);
  if (days < 7) return `in ${days} days`;
  const weeks = differenceInWeeks(next, prev);
  return `in ${weeks} weeks`;
};

export const steps: Array<{ step: number; date: string; diff: string }> =
  generateRepetitionSchedule().map((rep, idx, arr) => {
    const prev = idx > 0 ? arr[idx - 1]!.scheduledAt : null;
    return {
      step: rep.repetitionNumber,
      date: `${format(rep.scheduledAt, "HH:mm dd MMM yyyy")} `,
      diff: prev ? formatDiff(prev, rep.scheduledAt) : "",
    };
  });
