"use client";

import { CheckIcon, PlusIcon } from "lucide-react";

import {
  Tags,
  TagsList,
  TagsItem,
  TagsEmpty,
  TagsGroup,
  TagsInput,
  TagsValue,
  TagsTrigger,
  TagsContent,
} from "@/components/ui/kibo-ui/tags";
import { tags } from "@/shared/api/mock";
import type { CFC } from "@/shared/types";
import { Button } from "@/components/ui/button";
import { PRESET_COLOR_CLASSES } from "@/shared/lib/const";
import type { TagsSelectorProps } from "../model/types";
import { useTagSelector } from "../model/use-tag-selector";
import { useTranslations } from "next-intl";

export const TagsSelector: CFC<TagsSelectorProps> = ({
  ref,
  value,
  onChange,
  fetchTags = false,
}) => {
  const { handleSelect, handleRemove, selected } = useTagSelector(
    fetchTags,
    onChange,
    value,
  );
  const t = useTranslations("TagsSelector");

  return (
    <>
      <Tags>
        <TagsTrigger tagsInputHint={t("searchPlaceholder")}>
          {selected.map((tag) => (
            <TagsValue
              key={tag}
              onRemove={() => handleRemove(tag)}
              className={PRESET_COLOR_CLASSES[7]}
            >
              {tags.find((t) => t.id === tag)?.name}
            </TagsValue>
          ))}
        </TagsTrigger>
        <TagsContent
          commandCN="pb-12"
          footer={
            <div className="absolute right-0 -bottom-1 left-0 h-12 w-full bg-transparent pr-2 pl-2">
              <Button className="w-full">
                <PlusIcon /> {t("createTag")}
              </Button>
            </div>
          }
        >
          <TagsInput placeholder={t("searchPlaceholder")} ref={ref} />
          <TagsList>
            <TagsEmpty />
            <TagsGroup>
              {tags.map((tag) => (
                <TagsItem key={tag.id} onSelect={handleSelect} value={tag.id}>
                  {tag.name}
                  {selected.includes(tag.id) && (
                    <CheckIcon className="text-muted-foreground" size={14} />
                  )}
                </TagsItem>
              ))}
            </TagsGroup>
          </TagsList>
        </TagsContent>
      </Tags>
    </>
  );
};
