import { useTranslations } from 'next-intl'
import type { ButtonHTMLAttributes } from 'react'

import { Button } from '@/components/ui/button'

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
    <Button disabled={isCreating} {...props}>
      {t('createButton')}
    </Button>
  )
}
