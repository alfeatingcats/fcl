import { isNil } from 'es-toolkit'
import { AlertTriangleIcon, CheckCircle2Icon } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { type FC, useCallback, useEffect, useMemo, useState } from 'react'

import { Alert, AlertDescription, AlertTitle } from '@/components/reui/alert'
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

import type { DeleteTagModalState } from '../model/use-delete-tag-modal'

type DeleteTagModalProps = {
  isOpen: boolean
  onClose: () => void
  selectedTag: DeleteTagModalState | null
  isLoading: boolean
  onDelete: () => void
}

export const DeleteTagModal: FC<DeleteTagModalProps> = ({
  isOpen,
  onClose,
  selectedTag,
  isLoading,
  onDelete,
}) => {
  const t = useTranslations('UiActions')
  const tt = useTranslations('TagDeleteDialog')
  const handleOpenChange = useCallback(
    (open: boolean) => {
      if (!open) {
        onClose()
      }
    },
    [onClose],
  )

  const [_selectedTag, setSelectedTag] = useState(selectedTag)

  useEffect(() => {
    if (isNil(selectedTag)) return
    setSelectedTag(selectedTag)
  }, [selectedTag])

  const usageCount = useMemo(
    () => _selectedTag?.usageCount ?? 0,
    [_selectedTag?.usageCount],
  )

  const tagHasUsage = useMemo(() => usageCount > 0, [usageCount])
  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent showCloseButton={false} className="max-w-md">
        <DialogHeader>
          <DialogTitle>
            {tt('title', { name: _selectedTag?.name ?? '' })}
          </DialogTitle>
          <DialogDescription>{tt('description')}</DialogDescription>
        </DialogHeader>
        <section>
          <Alert variant={tagHasUsage ? 'warning' : 'info'} className="mb-2">
            {tagHasUsage ? <AlertTriangleIcon /> : <CheckCircle2Icon />}
            <AlertTitle>{tt('usage', { count: usageCount })}</AlertTitle>
            {tagHasUsage && (
              <AlertDescription>{tt('warning')}</AlertDescription>
            )}
          </Alert>
        </section>
        <DialogFooter className="flex">
          <DialogClose asChild>
            <Button className="flex-1" type="button" variant="outline">
              {t('cancel')}
            </Button>
          </DialogClose>
          <Button
            isLoading={isLoading}
            onClick={onDelete}
            className="flex-1"
            variant="destructive"
            type="button"
          >
            {tt('confirmButton')}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
