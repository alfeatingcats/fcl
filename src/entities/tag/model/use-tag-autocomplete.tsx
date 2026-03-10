"use client";

import { api, type RouterOutputs } from "@/trpc/react";
import { useQueryErrorHandler } from "@/shared/api";

export interface UseTagAutocompleteParams {
  query: string;
  maxTagResults?: number;
  shouldFetchTags: boolean;
  selectedTagIds?: string[];
}

export interface UseTagAutocompleteResult {
  isPending: boolean;
  autocompleteTags: RouterOutputs["tags"]["searchForAutocomplete"] | undefined;
}

export type UseTagAutocomplete = (
  params: UseTagAutocompleteParams,
) => UseTagAutocompleteResult;

export const useTagAutocomplete = ({
  query,
  selectedTagIds,
  shouldFetchTags,
  maxTagResults = 10,
}: UseTagAutocompleteParams): UseTagAutocompleteResult => {
  const {
    error,
    isPending,
    data: autocompleteTags,
  } = api.tags.searchForAutocomplete.useQuery(
    { excludeIds: selectedTagIds ?? [], query, limit: maxTagResults },
    { enabled: shouldFetchTags },
  );

  useQueryErrorHandler(error);

  return {
    autocompleteTags,
    isPending,
  };
};
