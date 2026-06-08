import { CirclePlus } from 'lucide-react'
import { useTranslations } from 'next-intl'
import type { ButtonHTMLAttributes, FC, ReactNode } from 'react'

import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'

interface CreateStudyItemTriggerProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  isCreating?: boolean
  button?: ReactNode
}

export const CreateStudyItemTrigger: FC<CreateStudyItemTriggerProps> = ({
  isCreating,
  button,
  ...props
}) => {
  const t = useTranslations('StudyItemDrawer')
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        {button ?? (
          <Button variant="outline" disabled={isCreating} {...props}>
            <CirclePlus />
          </Button>
        )}
      </TooltipTrigger>
      <TooltipContent>{t('createButton')}</TooltipContent>
    </Tooltip>
  )
}
