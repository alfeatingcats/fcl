import { useQueryErrorHandler } from "@/shared/hooks";
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
  const {
    error,
    isPending,
    data: autocompleteTags,
  } = api.tags.searchForAutocomplete.useQuery(
    { excludeIds: selectedTagIds ?? [], query, limit: maxTagResults },
    { enabled: shouldFetchTags },
  );

  useQueryErrorHandler(error);

  return { autocompleteTags, isPending };
};
