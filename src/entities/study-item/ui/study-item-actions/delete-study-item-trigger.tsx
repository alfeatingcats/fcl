import { useTranslations } from 'next-intl'
import type { FC, ReactNode } from 'react'

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'

type DeleteStudyItemTriggerProps = {
  button: ReactNode
}
export const DeleteStudyItemTrigger: FC<DeleteStudyItemTriggerProps> = ({
  button,
}) => {
  const t = useTranslations('StudyItem')
  return (
    <Tooltip>
      <TooltipTrigger asChild>{button}</TooltipTrigger>
      <TooltipContent>
        <p>{t('deleteButton')}</p>
      </TooltipContent>
    </Tooltip>
  )
}
