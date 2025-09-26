import type { CreateTagInput } from "@/shared/api/schemas";
import { api } from "@/trpc/react";
import { useCallback } from "react";

export const useCreateTag = () => {
  const utils = api.useUtils();

  const createTag = api.tags.create.useMutation({
    onSuccess: async () => {
      await utils.tags.invalidate();
    },
  });

  const handleCreateTag = useCallback(
    (data: CreateTagInput) => createTag.mutate(data),
    [createTag],
  );

  return {
    createTag,
    handleCreateTag,
    isLoading: createTag.isPending,
  };
};
