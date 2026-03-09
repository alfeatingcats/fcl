import { useTranslations } from 'next-intl'
import type { ButtonHTMLAttributes } from 'react'

import { Button } from '@/components/ui/button'

export const CreateTagButton = (
  props: ButtonHTMLAttributes<HTMLButtonElement>,
) => {
  const t = useTranslations('TagsSelector')
  return (
    <Button className="w-full min-w-full max-w-96" size={'sm'} {...props}>
      {t('createTag')}
    </Button>
  )
}
