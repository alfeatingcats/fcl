import { useEffect, useMemo, useState, useCallback } from "react";

import { useTagAutocomplete } from "@/entities/tag";

import type { RequiredCreateTagInput, UseTagSelectorParams } from "./types";

export type Tag = {
  id: string;
  name: string;
  color?: string | null;
};

export type UseTagSelectorResult = {
  query: string;
  setQuery: (v: string) => void;
  handleClearInput: () => void;

  selectedTags: Tag[];
  selectedTagIds: string[];
  handleSelect: (tagId: string) => void;
  handleRemove: (tagId: string) => void;

  displayTags: Tag[];
  isPending: boolean;
  error?: unknown;
};

export const useTagSelector = ({
  query,
  defaultTags,
  onChange,
}: UseTagSelectorParams) => {
  const [selectedTags, setSelectedTags] = useState<RequiredCreateTagInput[]>(
    defaultTags ?? [],
  );

  const selectedTagIds = useMemo(
    () => selectedTags.map((t) => t.id),
    [selectedTags],
  );

  const handleSelect = useCallback((tag: RequiredCreateTagInput) => {
    setSelectedTags((prev) => {
      const isSelected = prev.some((t) => t.id === tag.id);
      return isSelected ? prev.filter((t) => t.id !== tag.id) : [...prev, tag];
    });
  }, []);

  const handleRemove = useCallback((id: string) => {
    setSelectedTags((prev) => prev.filter((t) => t.id !== id));
  }, []);

  useEffect(() => {
    onChange(selectedTags, selectedTagIds);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTags, selectedTagIds]);

  const { autocompleteTags, isPending } = useTagAutocomplete({
    query: query ?? "",
    selectedTagIds: [], // Remove exclusion to allow potential overlap if needed, but filter in display
    shouldFetchTags: true,
    maxTagResults: 10,
  });

  const filteredSelected = useMemo(() => {
    return selectedTags.filter((tag) =>
      tag.name.toLowerCase().includes(query?.toLowerCase() ?? ""),
    );
  }, [selectedTags, query]);

  const displayTags = useMemo(() => {
    // Merge filtered selected (first) + autocomplete suggestions
    // Assume autocomplete may include some selected if overlap, but dedupe by id
    const combined = [...filteredSelected, ...(autocompleteTags ?? [])];
    return combined.filter(
      (tag, index, self) => index === self.findIndex((t) => t.id === tag.id),
    );
  }, [filteredSelected, autocompleteTags]);

  return {
    selectedTags,
    selectedTagIds,
    handleSelect,
    handleRemove,
    displayTags,
    isPending,
  };
};
