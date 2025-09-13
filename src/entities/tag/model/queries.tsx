import { api } from "@/trpc/react";

import type { TagsListType } from "./types";

export type useFetchAllTags = (fetchTags: boolean) => {
  tagsList: TagsListType | undefined;
};

export const useAllTags: useFetchAllTags = (fetchTags) => {
  const { data: tagsList } = api.tags.getAll.useQuery(
    {},
    { enabled: fetchTags },
  );
  return { tagsList };
};
