import { useDebounce, useToggle } from 'ahooks'
import { useTranslations } from 'next-intl'
import {
  type HTMLAttributes,
  type ReactNode,
  type Ref,
  useCallback,
  useState,
} from 'react'

import {
  Tags,
  TagsContent,
  TagsInput,
  TagsTrigger,
  TagsValue,
} from '@/components/ui/kibo-ui/tags'
import type { CFC } from '@/shared/types'

import type { RequiredCreateTagInput } from '../model/types'
import { useTagSelector } from '../model/use-tag-selector'
import { TagsListContent } from './tags-list-content'

export type TagsSelectorProps = {
  onBlur?: () => void
  ref?: Ref<HTMLInputElement>
  renderCreateTagButton: ReactNode
  defaultTags?: RequiredCreateTagInput[]
  onChange: (
    selectedTags: RequiredCreateTagInput[],
    selectedTagIds: string[],
  ) => void
  tagsWrapperClassName?: HTMLAttributes<HTMLDivElement>['className']
}

export const TagsSelector: CFC<TagsSelectorProps> = ({
  ref,
  onBlur,
  onChange,
  defaultTags = [],
  renderCreateTagButton,
  tagsWrapperClassName = '',
}) => {
  const t = useTranslations('TagsSelector')

  const [query, setQuery] = useState('')
  const delayedQuery = useDebounce(query, { wait: 500 })
  const [isTagsDropdownOpen, toggleOpen] = useToggle(false)

  const {
    selectedTags,
    selectedTagIds,
    handleSelect,
    handleRemove,
    displayTags,
    isPending,
  } = useTagSelector({
    query: delayedQuery,
    defaultTags,
    onChange,
  })

  const handleClearInput = useCallback(() => {
    setQuery('')
  }, [])

  return (
    <Tags
      onOpenChange={toggleOpen.set}
      open={isTagsDropdownOpen}
      className={tagsWrapperClassName}
    >
      <TagsTrigger tagsInputHint={t('searchPlaceholder')}>
        {selectedTags.map((tag) => (
          <TagsValue
            key={tag.id}
            onRemove={() => handleRemove(tag.id)}
            className={tag.color ?? ''}
          >
            {tag.name}
          </TagsValue>
        ))}
      </TagsTrigger>

      <TagsContent
        commandCN="relative"
        footer={
          <section
            onClick={toggleOpen.setLeft}
            className="flex justify-end border-t p-2"
          >
            {renderCreateTagButton}
          </section>
        }
      >
        <TagsInput
          ref={ref}
          onBlur={onBlur}
          value={query}
          onValueChange={setQuery}
          onClearInput={handleClearInput}
          placeholder={t('searchPlaceholder')}
        />

        <TagsListContent
          isPending={isPending}
          displayTags={displayTags as RequiredCreateTagInput[] | undefined}
          selectedTagIds={selectedTagIds}
          handleSelect={handleSelect}
        />
      </TagsContent>
    </Tags>
  )
}
