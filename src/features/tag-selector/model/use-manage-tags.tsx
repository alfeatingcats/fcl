import { isNil } from "es-toolkit";
import { isEmpty } from "es-toolkit/compat";

import {
  useGetAllTags,
  type TagsListType,
  useTagAutocomplete,
  type UseTagAutocompleteResult,
} from "@/entities/tag";

export interface UseTagManagementParams {
  tagIds?: Array<string>;
  query?: string;
}

export interface UseTagManagementResult
  extends Pick<UseTagAutocompleteResult, "autocompleteTags"> {
  allTags: TagsListType | undefined;
  isAllTagsPending: boolean;
  isAutocompleteTagsPending: boolean;
}

export type UseTagManagement = (
  params: UseTagManagementParams,
) => UseTagManagementResult;

export const useTagManagement: UseTagManagement = ({ tagIds, query }) => {
  const _trimmedQuery = isNil(query) ? "" : query.trim();

  const { allTags, isPending: isAllTagsPending } = useGetAllTags({
    shouldFetchTags: isNil(tagIds) || isEmpty(tagIds),
  });

  const { autocompleteTags, isPending: isAutocompleteTagsPending } =
    useTagAutocomplete({
      query: _trimmedQuery,
      selectedTagIds: tagIds,
      shouldFetchTags: !isEmpty(_trimmedQuery),
    });

  return {
    allTags,
    autocompleteTags,
    isAllTagsPending,
    isAutocompleteTagsPending,
  };
};
