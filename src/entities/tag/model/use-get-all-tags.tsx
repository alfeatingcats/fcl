import { api } from "@/trpc/react";

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
  const { data: allTags, isPending } = api.tags.getAll.useQuery(
    {},
    { enabled: shouldFetchTags },
  );

  return { allTags, isPending };
};
