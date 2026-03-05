import type { RepetitionsListRow } from "@/entities/repetitions";
import type { GetStudyItemByIdInfer } from "@/shared/api/schemas";

export const mapStudyItemToRepetitionList = (
  studyItem: GetStudyItemByIdInfer,
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
      descriptionText: studyItem.descriptionText ?? "",
      repetitionNumber: repetition.repetitionNumber,
    };
  });
};
