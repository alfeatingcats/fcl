import type { GetStudyItemByIdInfer } from '@/shared/api/schemas'

import type { RepetitionsListRow } from '@/entities/repetitions'

export { StudyItemForm } from './study-item-form'

export const mapStudyItemToRepetitionList = (
  studyItem: GetStudyItemByIdInfer,
): Array<RepetitionsListRow> => {
  return studyItem.repetitions.map((repetition) => {
    return {
      due: repetition.due,
      status: repetition.status,
      difficulty: repetition.difficulty,
      id: repetition.id,
      studyItemId: repetition.studyItemId,
      state: repetition.state,
      stability: repetition.stability,
      reps: repetition.reps,
      lapses: repetition.lapses,
      lastReview: repetition.lastReview,
      title: studyItem.title,
      description: studyItem.description,
      itemTags: studyItem.itemTags,
      descriptionText: studyItem.descriptionText ?? '',
    }
  })
}
