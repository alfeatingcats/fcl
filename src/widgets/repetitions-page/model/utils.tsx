import type { RepetitionsListRow } from "@/entities/repetitions";
import type { RouterOutputs } from "@/trpc/react";

export const mapTodayRepetitionsToListData = (
  repetitions: RouterOutputs["repetitions"]["getTodayRepetitions"],
): Array<Omit<RepetitionsListRow, "">> =>
  repetitions.map((repetition) => ({
    scheduledAt: repetition.scheduledAt,
    status: repetition.status,
    difficulty: repetition.difficulty,
    id: repetition.id,
    studyItemId: repetition.studyItemId,
    title: repetition.studyItem.title,
    description: repetition.studyItem.description,
    descriptionText: repetition.studyItem.descriptionText ?? "",
    itemTags: repetition.studyItem.itemTags,
    repetitionNumber: repetition.repetitionNumber,
  }));

// scheduledAt: repetition.scheduledAt,
//     status: repetition.status,
//     difficulty: repetition.difficulty,
//     id: repetition.id,
//     studyItemId: repetition.studyItemId,
//     title: studyItem.title,
//     description: studyItem.description,
//     itemTags: studyItem.itemTags,
//     repetitionNumber: repetition.repetitionNumber

// export const mapStudyItemToRepetitionList = (
//   studyItem: StudyItemOutputInfer,
// ): Array<RepetitionsListRow> => {
//   return studyItem.repetitions.map((repetition) => {
//     return {
//       scheduledAt: repetition.scheduledAt,
//       status: repetition.status,
//       difficulty: repetition.difficulty,
//       id: repetition.id,
//       studyItemId: repetition.studyItemId,
//       title: studyItem.title,
//       description: studyItem.description,
//       itemTags: studyItem.itemTags,
//       descriptionText: studyItem.descriptionText ?? "",
//       repetitionNumber: repetition.repetitionNumber,
//     };
//   });
// };
