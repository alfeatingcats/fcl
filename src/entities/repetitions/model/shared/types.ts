import type { StudyItemType } from 'prisma/generated/schemas/models/StudyItem.schema'
import type { StudyRepetitionType } from 'prisma/generated/schemas/models/StudyRepetition.schema'
import type { ReactElement, ReactNode } from 'react'

import type { FullRepetitionType } from '@/shared/api/schemas/fg/repetitions'
import type {
  OverlayEntityContent,
  RepetitionActionState,
} from '@/shared/types'

export interface ChartPoint {
  x: number
  time: number
  retention: number
}

export interface CurrentPoint {
  x: number
  retention: number
}

export interface RepetitionChartProps {
  repetitionDates?: Date[]
  currentRepetition?: number
}

export type RepetitionsListRow = Pick<
  StudyRepetitionType,
  | 'scheduledAt'
  | 'status'
  | 'difficulty'
  | 'id'
  | 'studyItemId'
  | 'repetitionNumber'
> &
  Pick<StudyItemType, 'title' | 'description' | 'descriptionText'> &
  Pick<FullRepetitionType['studyItem'], 'itemTags'>

export type RepetitionSummary = {
  title?: string
  description?: string | null
  repetitionNumber?: number | string
}

export type ActionRepetitionModalProps = {
  onClear: () => void
  isOpen: boolean
} & OverlayEntityContent & {
    renderContent: ReactNode
    repetitionNumber: string | number
    renderSubmitButton: ReactElement
  }

export type RepetitionListProps = {
  repetitions: Array<RepetitionsListRow>
  onCompleteRepetition: (state: RepetitionActionState) => void
  onSkipRepetition: (state: RepetitionActionState) => void
  onWaitRepetition: (state: RepetitionActionState) => void
}
