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
import { CheckIcon } from "lucide-react";
import { useCallback, useState } from "react";

const tags = [
  { id: "react", label: "React" },
  { id: "typescript", label: "TypeScript" },
  { id: "javascript", label: "JavaScript" },
  { id: "nextjs", label: "Next.js" },
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

  const handleRemove = (value: string) => {
    if (!selected.includes(value)) {
      return;
    }

    console.log(`removed: ${value}`);
    setSelected((prev) => prev.filter((v) => v !== value));
  };

  const handleSelect = (value: string) => {
    if (selected.includes(value)) {
      handleRemove(value);
      return;
    }

    console.log(`selected: ${value}`);
    setSelected((prev) => [...prev, value]);
  };

  console.log({ studyItems, isPendingCreate: createTag.isPending });

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
              {tags.find((t) => t.id === tag)?.label}
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
                  {tag.label}
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
