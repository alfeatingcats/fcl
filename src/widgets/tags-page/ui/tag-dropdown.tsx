'use client";'

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
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="ml-1 size-7">
          <MoreHorizontalIcon />
          <span className="sr-only">Actions</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => onEdit(id)}>
          {t('edit')}
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive" onClick={() => onDelete(id)}>
          {t('delete')}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
