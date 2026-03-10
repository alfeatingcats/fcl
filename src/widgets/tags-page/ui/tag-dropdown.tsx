'use client";'

import { useDebounceFn } from 'ahooks'
import { MoreHorizontalIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'
import type { FC } from 'react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

type TagDropdownProps = {
  onEdit: (id: string) => void
  onDelete: (id: string) => void
  id: string
}
export const TagDropdown: FC<TagDropdownProps> = ({ onEdit, onDelete, id }) => {
  const t = useTranslations('UiActions')

  const { run: handleEdit } = useDebounceFn(() => onEdit(id), {
    wait: 10,
  })
  const { run: handleDelete } = useDebounceFn(() => onDelete(id), {
    wait: 10,
  })

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="ml-1 size-7">
          <MoreHorizontalIcon />
          <span className="sr-only">Actions</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={handleEdit}>{t('edit')}</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive" onClick={handleDelete}>
          {t('delete')}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
