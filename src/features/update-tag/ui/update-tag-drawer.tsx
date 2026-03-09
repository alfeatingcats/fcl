import { useTranslations } from 'next-intl'

import { FormDrawer } from '@/components/ui/custom'
import type { CreateTagInput } from '@/shared/api/schemas'
import type { CFC, OverlayFormProps } from '@/shared/types'

type UpdateTagDrawerProps = OverlayFormProps<CreateTagInput>

export const UpdateTagDrawer: CFC<UpdateTagDrawerProps> = ({
  isOpen,
  onSubmit,
  children,
  isLoading,
  onOpenChange,
}) => {
  const t = useTranslations('TagDrawer')
  const ta = useTranslations('UiActions')

  return (
    <FormDrawer
      contentCN="!max-w-sm"
      title={t('updateTitle')}
      isOpen={isOpen}
      description={t('updateDescription')}
      submitButtonProps={{
        onClick: () => void onSubmit(),
        disabled: isLoading,
        children: ta('edit'),
      }}
      onOpenChange={onOpenChange}
    >
      {children}
    </FormDrawer>
  )
}
