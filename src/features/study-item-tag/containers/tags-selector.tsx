"use client";

import {
  Tags,
  TagsContent,
  TagsEmpty,
  TagsGroup,
  TagsInput,
  TagsItem,
  TagsList,
  TagsTrigger,
  TagsValue,
} from "@/components/ui/kibo-ui/tags";
import { PRESET_COLORS } from "@/lib/const";
import { api } from "@/trpc/react";
import type { CFC } from "@/types";
import type { Tag } from "@prisma/client";
import { CheckIcon } from "lucide-react";
import { useCallback, useState, useEffect } from "react";

const tags: Pick<Tag, "id" | "name" | "color">[] = [
  { id: "react", name: "React", color: "blue" },
  { id: "typescript", name: "TypeScript", color: "blue" },
  { id: "javascript", name: "JavaScript", color: "yellow" },
  { id: "nextjs", name: "Next.js", color: "black" },
];
type TagsSelector = {
  onChange: (values: string[] | undefined) => void;
  value: string[] | undefined;
  fetchTags?: boolean;
  ref?: React.Ref<HTMLInputElement>;
  onBlur?: () => void;
};

export const TagsSelector: CFC<TagsSelector> = ({
  onChange,
  value,
  fetchTags = false,
  ref,
}) => {
  const [selected, setSelected] = useState<string[]>(value ?? []);

  useEffect(() => {
    setSelected(value ?? []);
  }, [value]);

  const utils = api.useUtils();
  const { data: studyItems } = api.tags.getAll.useQuery(
    {},
    { enabled: fetchTags },
  );
  const createTag = api.tags.create.useMutation({
    onSuccess: async () => {
      await utils.tags.invalidate();
    },
  });
  const handleCreateTag = useCallback(
    (name: string, color: string) => createTag.mutate({ name, color }),
    [createTag],
  );

  const handleRemove = (tagId: string) => {
    if (!selected.includes(tagId)) return;
    const newSelected = selected.filter((v) => v !== tagId);
    setSelected(newSelected);
    onChange(newSelected.length ? newSelected : undefined);
  };

  const handleSelect = (tagId: string) => {
    let newSelected;
    if (selected.includes(tagId)) {
      newSelected = selected.filter((v) => v !== tagId);
    } else {
      newSelected = [...selected, tagId];
    }
    setSelected(newSelected);
    onChange(newSelected.length ? newSelected : []);
  };

  console.log({ studyItems, isPendingCreate: createTag.isPending, selected });

  return (
    <>
      {/* <Button
        disabled={createTag.isPending}
        type="button"
        onClick={() => handleCreateTag("test-tag", PRESET_COLORS[0]!)}
      >
        Create Tag
      </Button> */}
      <Tags>
        <TagsTrigger>
          {selected.map((tag) => (
            <TagsValue key={tag} onRemove={() => handleRemove(tag)}>
              {tags.find((t) => t.id === tag)?.name}
            </TagsValue>
          ))}
        </TagsTrigger>
        <TagsContent>
          <TagsInput placeholder="Search tag..." ref={ref} />
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
