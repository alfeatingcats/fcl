import type { RepetitionsListRow } from "@/entities/repetitions";
import type { RouterOutputs } from "@/trpc/react";

export const mapStudyItemToRepetitionList = (
  studyItem: RouterOutputs["studyItem"]["getById"],
): Array<RepetitionsListRow> => {
  return studyItem.repetitions.map((repetition) => {
    return {
      scheduledAt: repetition.scheduledAt,
      status: repetition.status,
      difficulty: repetition.difficulty,
      id: repetition.id,
      studyItemId: repetition.studyItemId,
      title: studyItem.title,
      description: studyItem.description,
      itemTags: studyItem.itemTags,
      repetitionNumber: repetition.repetitionNumber,
    };
  });
};
