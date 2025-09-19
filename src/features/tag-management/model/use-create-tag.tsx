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
    (name: string, color: string) => createTag.mutate({ name, color }),
    [createTag],
  );

  return {
    createTag,
    handleCreateTag,
    isLoading: createTag.isPending,
  };
};
