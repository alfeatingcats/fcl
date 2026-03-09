import { TagIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'
import type { FC, ReactNode } from 'react'

import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from '@/components/ui/item'
import { cn } from '@/shared/lib/utils'

type TagItemProps = {
  name: string
  color: string
  usageCount: number
  itemActions: ReactNode
}

export const TagItem: FC<TagItemProps> = ({
  name,
  color,
  usageCount,
  itemActions,
}) => {
  const t = useTranslations('TagPage')
  return (
    <Item variant="muted" size="xs" className="border-input">
      <ItemContent>
        <ItemTitle>{name}</ItemTitle>
        <ItemDescription>{t('skills', { count: usageCount })}</ItemDescription>
      </ItemContent>
      <ItemActions>
        <TagItemIcon wpapperCN={color} />
        {itemActions}
      </ItemActions>
    </Item>
  )
}

type TagItemIconProps = {
  wpapperCN: string
  iconCN?: string
}

export const TagItemIcon: FC<TagItemIconProps> = ({ wpapperCN, iconCN }) => {
  return (
    <div
      className={cn(
        'size-6 rounded-md flex items-center justify-center',
        wpapperCN,
      )}
    >
      <TagIcon className={cn('relative size-3', iconCN)} />
    </div>
  )
}
