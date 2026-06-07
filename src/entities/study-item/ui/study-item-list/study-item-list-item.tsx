import { isEmpty } from 'es-toolkit/compat'
import { Minus, Trash2 } from 'lucide-react'
import { useFormatter } from 'next-intl'
import { type FC, useCallback, useMemo } from 'react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { CardDescription } from '@/components/ui/card'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card-default'
import type { ReadStudyItemsOutputSchemaType } from '@/shared/api/schemas/fg/study-item'
import { cn } from '@/shared/lib/utils'

import { formatCreatedDate } from '../../model'
import { StudyItemStatus } from './study-item-status'

type StudyItemListItemProps = {
  studyItem: ReadStudyItemsOutputSchemaType['items'][number]
  selectStudyItem: (studyItemId: string | null) => void
}
export const StudyItemListItem: FC<StudyItemListItemProps> = ({
  studyItem: { title, descriptionText, createdAt, status, itemTags, id },
  selectStudyItem,
}) => {
  const format = useFormatter()

  const _tags = useMemo(() => {
    if (isEmpty(itemTags)) {
      return <Minus className="h-4 w-4 opacity-50" />
    }
    return (
      <div className="flex min-w-50 flex-wrap gap-1">
        {itemTags.map(({ tag }) => (
          <Badge className={cn(`${tag.color}`)} key={tag.id}>
            {tag.name}
          </Badge>
        ))}
      </div>
    )
  }, [itemTags])

  const handleSelectStudyItem = useCallback(
    () => selectStudyItem(id),
    [id, selectStudyItem],
  )

  return (
    <Card
      size="sm"
      onClick={handleSelectStudyItem}
      className={cn(
        'mx-auto w-full rounded-none ring-0 border-b last-of-type:border-b-0 gap-2!',
        'hover:cursor-pointer hover:bg-muted/70 dark:bg-background last-of-type:rounded-bl-lg',
      )}
    >
      <CardHeader className="grid-cols-[1fr_auto] items-center px-4!">
        <CardTitle className="truncate text-xl">{title}</CardTitle>
        <div className="text-xs leading-normal text-muted-foreground whitespace-nowrap">
          {formatCreatedDate(createdAt, format)}
        </div>
      </CardHeader>

      <CardContent className="flex flex-col gap-3 px-4!">
        {descriptionText?.trim()?.length ? (
          <CardDescription className="text-xs!">
            {descriptionText}
          </CardDescription>
        ) : null}

        {_tags}
      </CardContent>

      <CardFooter className="border-dashed py-1.5! justify-between rounded-none! dark:bg-transparent">
        <StudyItemStatus status={status} />
        <Button type="button" size="icon-xs" variant="ghost" className="size-6">
          <Trash2 />
        </Button>
      </CardFooter>
    </Card>
  )
}
