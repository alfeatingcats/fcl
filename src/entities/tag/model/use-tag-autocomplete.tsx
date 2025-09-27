import { api, type RouterOutputs } from "@/trpc/react";

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

export const useTagAutocomplete: UseTagAutocomplete = ({
  query,
  selectedTagIds,
  shouldFetchTags,
  maxTagResults = 10,
}) => {
  const { data: autocompleteTags, isPending } =
    api.tags.searchForAutocomplete.useQuery(
      { excludeIds: selectedTagIds ?? [], query, limit: maxTagResults },
      { enabled: shouldFetchTags },
    );

  return { autocompleteTags, isPending };
};
