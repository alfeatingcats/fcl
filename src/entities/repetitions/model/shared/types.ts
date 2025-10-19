import type {
  OverlayEntityContent,
  RepetitionActionState,
} from "@/shared/types";
import type { RouterOutputs } from "@/trpc/react";
import type { StudyItem, StudyRepetition } from "@prisma/client";
import type { ReactElement, ReactNode } from "react";

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

export type RepetitionSummary = {
  title?: string;
  description?: string | null;
  repetitionNumber?: number | string;
};

export type ActionRepetitionModalProps = {
  onClear: () => void;
  isOpen: boolean;
} & OverlayEntityContent & {
    renderContent: ReactNode;
    repetitionNumber: string | number;
    renderSubmitButton: ReactElement;
  };

export type RepetitionListProps = {
  repetitions: Array<RepetitionsListRow>;
  onCompleteRepetition: (state: RepetitionActionState) => void;
  onSkipRepetition: (state: RepetitionActionState) => void;
  onWaitRepetition: (state: RepetitionActionState) => void;
};
