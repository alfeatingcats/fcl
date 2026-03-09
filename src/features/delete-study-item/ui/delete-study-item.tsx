import type { VariantProps } from 'class-variance-authority'
import { useTranslations } from 'next-intl'

import { Button, type buttonVariants } from '@/components/ui/button'

type DeleteStudyItemButtonProps = React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  } & {
    isLoading?: boolean
  }

export const DeleteStudyItemButton = ({
  isLoading,
  ...props
}: DeleteStudyItemButtonProps) => {
  const t = useTranslations('StudyItem')
  return (
    <Button disabled={isLoading} {...props}>
      {t('deleteButton')}
    </Button>
  )
}
