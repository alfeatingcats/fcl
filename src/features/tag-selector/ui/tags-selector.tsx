import {
  useCallback,
  useState,
  useMemo,
  type Ref,
  type ReactNode,
} from "react";
import { useTranslations } from "next-intl";
import { useDebounce, useToggle } from "ahooks";

import {
  Tags,
  TagsInput,
  TagsValue,
  TagsTrigger,
  TagsContent,
} from "@/components/ui/kibo-ui/tags";
import type { CFC } from "@/shared/types";

import { TagsListContent } from "./tags-list-content";
import { useTagSelector } from "../model/use-tag-selector";
import type { RequiredCreateTagInput } from "../model/types";

export type TagsSelectorProps = {
  onBlur?: () => void;
  ref?: Ref<HTMLInputElement>;
  renderCreateTagButton: ReactNode;
  defaultTags?: RequiredCreateTagInput[];
  onChange: (
    selectedTags: RequiredCreateTagInput[],
    selectedTagIds: string[],
  ) => void;
};

export const TagsSelector: CFC<TagsSelectorProps> = ({
  ref,
  onBlur,
  onChange,
  defaultTags,
  renderCreateTagButton,
}) => {
  const [query, setQuery] = useState("");
  const delayedQuery = useDebounce(query, { wait: 500 });
  const [isTagsDropdownOpen, { set, setLeft }] = useToggle(false, true);

  const t = useTranslations("TagsSelector");

  const {
    handleSelect,
    handleRemove,
    selectedTags,
    availableTags,
    selectedTagIds,
    autocompleteTags,
    isAllTagsPending,
    isAutocompleteTagsPending,
  } = useTagSelector({
    onChange,
    defaultTags,
    query: delayedQuery.trim(),
  });

  const handleClearInput = useCallback(() => {
    setQuery("");
  }, []);

  const displayTags: RequiredCreateTagInput[] | undefined = useMemo(
    () => (delayedQuery.trim() ? autocompleteTags : availableTags),
    [delayedQuery, autocompleteTags, availableTags],
  );

  const isPending = useMemo(
    () => (delayedQuery.trim() ? isAutocompleteTagsPending : isAllTagsPending),
    [delayedQuery, isAutocompleteTagsPending, isAllTagsPending],
  );

  return (
    <Tags onOpenChange={set} open={isTagsDropdownOpen}>
      <TagsTrigger tagsInputHint={t("searchPlaceholder")}>
        {selectedTags.map((tag) => (
          <TagsValue
            key={tag.id}
            onRemove={() => handleRemove(tag.id)}
            className={tag.color}
          >
            {tag.name}
          </TagsValue>
        ))}
      </TagsTrigger>

      <TagsContent
        commandCN="relative"
        footer={
          <section onClick={setLeft} className="flex justify-end border-t p-2">
            {renderCreateTagButton}
          </section>
        }
      >
        <TagsInput
          ref={ref}
          value={query}
          onValueChange={setQuery}
          onClearInput={handleClearInput}
          onBlur={onBlur}
          placeholder={t("searchPlaceholder")}
        />

        <TagsListContent
          isPending={isPending}
          displayTags={displayTags}
          selectedTagIds={selectedTagIds}
          handleSelect={handleSelect}
        />
      </TagsContent>
    </Tags>
  );
};
