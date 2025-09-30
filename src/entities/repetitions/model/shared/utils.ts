import { generateRepetitionSchedule } from "@/shared/lib/utils";

export const getDefaultRepetitionDates = (): Date[] => {
  return generateRepetitionSchedule().map((r) => r.scheduledAt);
};
