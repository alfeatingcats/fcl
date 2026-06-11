import type { FullRepetitionListType } from '@/shared/api/schemas/fg/repetitions'

import type { RepetitionsListRow } from '@/entities/repetitions'

export const mapTodayRepetitionsToListData = (
  repetitions: FullRepetitionListType,
): Array<RepetitionsListRow> =>
  repetitions.map((repetition) => ({
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
    title: repetition.studyItem.title,
    description: repetition.studyItem.description,
    descriptionText: repetition.studyItem.descriptionText ?? '',
    itemTags: repetition.studyItem.itemTags,
  }))
