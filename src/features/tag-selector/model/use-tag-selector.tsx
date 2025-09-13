import { useEffect, useState, useCallback } from "react";

import { useAllTags, type TagsListType } from "@/entities/tag";

type UseTagSelectorProps = (
  enableBackground: boolean,
  onChange: (tags?: string[]) => void,
  defaultTagIds?: string[],
) => {
  selected: string[];
  tagsList: TagsListType | undefined;
  handleRemove: (tagId: string) => void;
  handleSelect: (tagId: string) => void;
};

export const useTagSelector: UseTagSelectorProps = (
  enabled,
  onChange,
  defaultTagIds,
) => {
  const [selected, setSelected] = useState<string[]>(defaultTagIds ?? []);

  useEffect(() => {
    setSelected(defaultTagIds ?? []);
  }, [defaultTagIds]);

  const { tagsList } = useAllTags(enabled) as {
    tagsList: TagsListType | undefined;
  };

  const handleRemove = useCallback(
    (tagId: string) => {
      if (!selected.includes(tagId)) return;
      const newSelected = selected.filter((v) => v !== tagId);
      setSelected(newSelected);
      onChange(newSelected.length ? newSelected : undefined);
    },
    [selected, onChange],
  );

  const handleSelect = useCallback(
    (tagId: string) => {
      let newSelected;
      if (selected.includes(tagId)) {
        newSelected = selected.filter((v) => v !== tagId);
      } else {
        newSelected = [...selected, tagId];
      }
      setSelected(newSelected);
      onChange(newSelected.length ? newSelected : []);
    },
    [selected, onChange],
  );

  return { handleSelect, handleRemove, tagsList, selected };
};
