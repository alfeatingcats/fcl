import { useTranslations } from 'next-intl'
import { cloneElement, type FC, type ReactElement, useCallback } from 'react'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

import type { ActionRepetitionModalProps } from '../../model/shared'

export const ActionRepetitionModal: FC<ActionRepetitionModalProps> = ({
  isOpen,
  entity,
  overlay,
  renderContent,
  renderSubmitButton,
  onClear,
}) => {
  const t = useTranslations('UiActions')

  const handleOpenChange = useCallback(
    (open: boolean) => {
      if (!open) {
        onClear()
      }
    },
    [onClear],
  )
  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-106.25">
        <DialogHeader>
          <DialogTitle>{overlay.title}</DialogTitle>
          {overlay.description && (
            <DialogDescription>{overlay.description}</DialogDescription>
          )}
        </DialogHeader>

        <div className="bg-card flex flex-col gap-1 rounded-xl border p-4">
          <span className="truncate font-medium">{entity.title}</span>
          {entity.description && (
            <p className="text-muted-foreground line-clamp-3 text-sm">
              {entity.description}
            </p>
          )}
        </div>

        {renderContent}

        <DialogFooter>
          <DialogClose asChild>
            <Button className="flex-1/2" type="button" variant="outline">
              {t('cancel')}
            </Button>
          </DialogClose>
          {cloneElement(
            renderSubmitButton as ReactElement<{
              className?: string
              type?: 'button'
            }>,
            {
              className: 'flex-1/2',
              type: 'button',
            },
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
