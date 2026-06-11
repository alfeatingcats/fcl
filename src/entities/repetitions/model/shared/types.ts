import type { ReactElement, ReactNode } from 'react'

import type { FullRepetitionType } from '@/shared/api/schemas/fg/repetitions'
import type {
  OverlayEntityContent,
  RepetitionActionState,
} from '@/shared/types'

import type { StudyItemType } from '$/prisma/generated/schemas/models/StudyItem.schema'
import type { StudyRepetitionType } from '$/prisma/generated/schemas/models/StudyRepetition.schema'

export type RepetitionsListRow = Pick<
  StudyRepetitionType,
  | 'due'
  | 'status'
  | 'difficulty'
  | 'id'
  | 'studyItemId'
  | 'state'
  | 'stability'
  | 'reps'
  | 'lapses'
  | 'lastReview'
> &
  Pick<StudyItemType, 'title' | 'description' | 'descriptionText'> &
  Pick<FullRepetitionType['studyItem'], 'itemTags'>

export type ActionRepetitionModalProps = {
  onClear: () => void
  isOpen: boolean
} & OverlayEntityContent & {
    renderContent: ReactNode
    renderSubmitButton: ReactElement
  }

export type RepetitionListProps = {
  repetitions: Array<RepetitionsListRow>
  onReviewRepetition: (state: RepetitionActionState) => void
  onSkipRepetition: (state: RepetitionActionState) => void
  onWaitRepetition: (state: RepetitionActionState) => void
}
