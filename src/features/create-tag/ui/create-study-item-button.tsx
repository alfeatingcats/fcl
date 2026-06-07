import { CirclePlus } from 'lucide-react'
import { useTranslations } from 'next-intl'
import type { ButtonHTMLAttributes } from 'react'

import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'

interface CreateStudyItemButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  isCreating?: boolean
}

export const CreateStudyItemButton = ({
  isCreating,
  ...props
}: CreateStudyItemButtonProps) => {
  const t = useTranslations('StudyItemDrawer')
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline" disabled={isCreating} {...props}>
          <CirclePlus />
        </Button>
      </TooltipTrigger>
      <TooltipContent>{t('createButton')}</TooltipContent>
    </Tooltip>
  )
}
