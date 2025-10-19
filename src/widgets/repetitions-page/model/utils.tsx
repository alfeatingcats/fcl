import type { RepetitionsListRow } from "@/entities/repetitions";
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
