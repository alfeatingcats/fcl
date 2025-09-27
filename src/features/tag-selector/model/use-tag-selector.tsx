import { isNil } from "es-toolkit";
import { isEmpty } from "es-toolkit/compat";
import { useEffect, useState, useCallback, useMemo } from "react";

import { useTagManagement } from "./use-manage-tags";
import type { RequiredCreateTagInput, UseTagSelector } from "./types";

export const useTagSelector: UseTagSelector = ({
  query,
  onChange,
  defaultTags,
}) => {
  const [selectedTags, updateSelectedTags] = useState<RequiredCreateTagInput[]>(
    defaultTags ?? [],
  );

  const selectedTagIds = useMemo(() => {
    return selectedTags.map((tag) => tag.id);
  }, [selectedTags]);

  const {
    allTags,
    autocompleteTags,
    isAllTagsPending,
    isAutocompleteTagsPending,
  } = useTagManagement({
    query,
    tagIds: selectedTagIds,
  });

  const availableTags = useMemo(() => {
    return allTags?.map((tag) => ({
      id: tag.id,
      name: tag.name,
      color: tag.color ?? "",
    }));
  }, [allTags]);

  const transformedAutocompleteTags = useMemo(() => {
    return autocompleteTags?.map((tag) => ({
      id: tag.id,
      name: tag.name,
      color: tag.color ?? "",
    }));
  }, [autocompleteTags]);

  useEffect(() => {
    updateSelectedTags(defaultTags ?? []);
    if (!isNil(defaultTags) && !isEmpty(defaultTags)) {
      const defaultTagIds = defaultTags.map((tag) => tag.id);
      onChange(defaultTags, defaultTagIds);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultTags]);

  const handleRemove = useCallback(
    (tagId: string) => {
      const newSelectedTags = selectedTags.filter((tag) => tag.id !== tagId);
      updateSelectedTags(newSelectedTags);

      const newSelectedTagIds = newSelectedTags.map((tag) => tag.id);
      onChange(newSelectedTags, newSelectedTagIds);
    },
    [selectedTags, onChange],
  );

  const handleSelect = useCallback(
    (tagId: string) => {
      const tagExists = selectedTags.some((tag) => tag.id === tagId);
      let newSelectedTags: RequiredCreateTagInput[];

      if (tagExists) {
        newSelectedTags = selectedTags.filter((tag) => tag.id !== tagId);
      } else {
        const tagToAdd =
          availableTags?.find((tag) => tag.id === tagId) ??
          transformedAutocompleteTags?.find((tag) => tag.id === tagId);

        if (!tagToAdd) return;
        newSelectedTags = [...selectedTags, tagToAdd];
      }

      updateSelectedTags(newSelectedTags);

      const newSelectedTagIds = newSelectedTags.map((tag) => tag.id);
      onChange(newSelectedTags, newSelectedTagIds);
    },
    [selectedTags, availableTags, transformedAutocompleteTags, onChange],
  );

  return {
    selectedTags,
    selectedTagIds,
    availableTags,
    autocompleteTags: transformedAutocompleteTags,
    isAllTagsPending,
    isAutocompleteTagsPending,
    handleSelect,
    handleRemove,
  };
};
