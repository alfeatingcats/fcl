import { useTranslations } from 'next-intl'
import { type FC, useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

type DialogNoCloseButtonProps = {
  onDelete: () => void
  isLoading: boolean
  isOpen: boolean
  onClose: () => void
  title?: string
}

export const DeleteStudyItemDialog: FC<DialogNoCloseButtonProps> = ({
  onDelete,
  isLoading,
  isOpen,
  onClose,
  title,
}) => {
  const t = useTranslations('StudyItem')
  const ti = useTranslations('UiActions')
  const [_title, setTitle] = useState(title)

  useEffect(() => {
    !!title && setTitle(title)
  }, [title])
  return (
    <Dialog open={isOpen} onOpenChange={() => !isLoading && onClose()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex">{t('deleteConfirmTitle')}</DialogTitle>
          <DialogDescription>{t('deleteConfirmDescription')}</DialogDescription>
        </DialogHeader>
        <p>{_title}</p>
        <DialogFooter className="gap-4">
          <Button
            disabled={isLoading}
            isLoading={isLoading}
            variant="outline"
            onClick={onClose}
            className="flex-1"
          >
            {ti('cancel')}
          </Button>
          <Button
            disabled={isLoading}
            isLoading={isLoading}
            variant="destructive"
            onClick={onDelete}
            className="flex-1"
          >
            {ti('delete')}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
