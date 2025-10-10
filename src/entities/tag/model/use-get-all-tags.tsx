import { api } from "@/trpc/react";

import { useQueryErrorHandler } from "@/shared/hooks";

import type { TagsListType } from "./types";

export interface UseGetAllTagsParams {
  shouldFetchTags: boolean;
}

export interface UseGetAllTagsResult {
  allTags: TagsListType | undefined;
  isPending: boolean;
}

export type UseGetAllTags = (
  params: UseGetAllTagsParams,
) => UseGetAllTagsResult;

export const useGetAllTags: UseGetAllTags = ({ shouldFetchTags }) => {
  const {
    error,
    isPending,
    data: allTags,
  } = api.tags.getAll.useQuery({}, { enabled: shouldFetchTags });

  useQueryErrorHandler(error);

  return { allTags, isPending };
};
