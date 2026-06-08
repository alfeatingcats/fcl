import { Save } from 'lucide-react'
import { useTranslations } from 'next-intl'
import type { ButtonHTMLAttributes, FC, ReactNode } from 'react'

import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'

interface SaveStudyItemTriggerProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean
  button?: ReactNode
}

export const SaveStudyItemTrigger: FC<SaveStudyItemTriggerProps> = ({
  isLoading,
  button,
  ...props
}) => {
  const t = useTranslations('StudyItem')
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        {button ?? (
          <Button
            isLoading={isLoading}
            size="lg"
            type="button"
            variant="outline"
            {...props}
          >
            <Save />
          </Button>
        )}
      </TooltipTrigger>
      <TooltipContent>{t('saveButton')}</TooltipContent>
    </Tooltip>
  )
}
