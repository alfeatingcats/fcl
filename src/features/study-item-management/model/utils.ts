import { formatDiff } from "@/entities/study-item/model/utils";
import { type CreateStudyItemInput } from "@/shared/api/schemas";
import { generateRepetitionSchedule } from "@/shared/lib/utils";
import type { IntlFormatter, TimeTranslations } from "@/shared/types";

export const defaultStudyItemFormValues: Partial<CreateStudyItemInput> = {
  title: "",
  description: "",
  tagIds: [],
};

export function generateStepsServer(
  format: IntlFormatter,
  t: TimeTranslations,
) {
  const formatStepDate = (date: Date): string => {
    return format.dateTime(date, {
      hour: "2-digit",
      minute: "2-digit",
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const formatStepDateTooltip = (date: Date): string => {
    return format.dateTime(date, {
      weekday: "long",
      day: "2-digit",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  return generateRepetitionSchedule().map((rep, idx, arr) => {
    const prev = idx > 0 ? arr[idx - 1]!.scheduledAt : null;
    return {
      step: rep.repetitionNumber,
      date: formatStepDate(rep.scheduledAt),
      diff: prev ? formatDiff(t, prev, rep.scheduledAt) : "",
      tooltip: formatStepDateTooltip(rep.scheduledAt),
    };
  });
}

export type StepInfo = {
  step: number;
  date: string;
  diff: string;
  tooltip: string;
};
