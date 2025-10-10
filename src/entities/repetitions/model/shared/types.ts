import type { RouterOutputs } from "@/trpc/react";
import type { StudyItem, StudyRepetition } from "@prisma/client";

export interface ChartPoint {
  x: number;
  time: number;
  retention: number;
}

export interface CurrentPoint {
  x: number;
  retention: number;
}

export interface RepetitionChartProps {
  repetitionDates?: Date[];
  currentRepetition?: number;
}

export type RepetitionsListRow = Pick<
  StudyRepetition,
  | "scheduledAt"
  | "status"
  | "difficulty"
  | "id"
  | "studyItemId"
  | "repetitionNumber"
> &
  Pick<StudyItem, "title" | "description"> &
  Pick<
    RouterOutputs["repetitions"]["getTodayRepetitions"][number]["studyItem"],
    "itemTags"
  >;
