import { ArrowDownWideNarrow, CirclePlus, SearchIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'
import type { FC, ReactNode } from 'react'

import { Button } from '@/components/ui/button'
import { Kbd } from '@/components/ui/kbd'

import { DialogNoCloseButton } from './filters-dialog'

type StudyItemsListHeaderProps = {
  createStudyItemButton: ReactNode
}
export const StudyItemsListHeader: FC<StudyItemsListHeaderProps> = ({
  createStudyItemButton,
}) => {
  const t = useTranslations('StudyItemTable')
  return (
    <div className="w-full border-b p-3 flex items-center gap-2 flex-row">
      <DialogNoCloseButton
        button={
          <Button variant="outline" className="flex-1">
            <span className="w-full flex items-center text-muted-foreground">
              <span className="flex-1 flex items-center gap-1.5">
                <SearchIcon />
                <span className="pt-px">{t('searchPlaceholder')}</span>
              </span>
              <span className="flex gap-1 items-center-safe justify-between">
                <Kbd data-icon="inline-end" className="translate-x-0.5">
                  Ctrl
                </Kbd>
                <span className="ml-0.5">+</span>
                <Kbd>K</Kbd>
              </span>
            </span>
          </Button>
        }
      />

      <Button variant="outline">
        <ArrowDownWideNarrow />
      </Button>
      {createStudyItemButton}
      {/* <Button variant="outline">
        <CirclePlus />
      </Button> */}
    </div>
  )
}
