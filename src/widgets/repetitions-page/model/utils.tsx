import { isNil, pick } from "es-toolkit";
import { isEmpty } from "es-toolkit/compat";

import type {
  RepetitionsListRow,
  CompleteRepetitionDialogState,
} from "@/entities/repetitions";
import type { RouterOutputs } from "@/trpc/react";

export const mapTodayRepetitionsToListData = (
  repetitions: RouterOutputs["repetitions"]["getTodayRepetitions"],
): Array<RepetitionsListRow> =>
  repetitions.map((repetition) => ({
    scheduledAt: repetition.scheduledAt,
    status: repetition.status,
    difficulty: repetition.difficulty,
    id: repetition.id,
    studyItemId: repetition.studyItemId,
    title: repetition.studyItem.title,
    description: repetition.studyItem.description,
    itemTags: repetition.studyItem.itemTags,
    repetitionNumber: repetition.repetitionNumber,
  }));

export const getActiveRepetitionDetails = (
  repetitions: Array<RepetitionsListRow>,
  activeRepetitionId: CompleteRepetitionDialogState,
) => {
  if (isNil(activeRepetitionId) || isEmpty(repetitions) || isNil(repetitions)) {
    return null;
  }
  return pick(repetitions.find(({ id }) => id === activeRepetitionId)!, [
    "title",
    "description",
    "repetitionNumber",
  ]);
};
