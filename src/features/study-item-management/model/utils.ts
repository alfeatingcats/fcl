import { type CreateStudyItemInput } from "@/shared/api/schemas";
import { generateRepetitionSchedule } from "@/shared/lib/utils";
import { format, differenceInMinutes } from "date-fns";
import {
  differenceInHours,
  differenceInDays,
  differenceInWeeks,
} from "date-fns";

export const defaultStudyItemFormValues: Partial<CreateStudyItemInput> = {
  title: "",
  description: "",
  tagIds: [],
};

export const formatStepDate = (date: Date): string =>
  format(date, "HH:mm dd MMM yyyy");

export const formatStepDateTooltip = (date: Date): string =>
  format(date, "EEEE, dd MMMM yyyy, HH:mm:ss");

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

export const steps: StepInfo[] = generateRepetitionSchedule().map(
  (rep, idx, arr) => {
    const prev = idx > 0 ? arr[idx - 1]!.scheduledAt : null;
    return {
      step: rep.repetitionNumber,
      date: formatStepDate(rep.scheduledAt),
      diff: prev ? formatDiff(prev, rep.scheduledAt) : "",
      tooltip: formatStepDateTooltip(rep.scheduledAt),
    };
  },
);

export type StepInfo = {
  step: number;
  date: string;
  diff: string;
  tooltip: string;
};
