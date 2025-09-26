import { api } from "@/trpc/react";
import { useCallback } from "react";

import type { CreateTagInput } from "@/shared/api/schemas";

export const useCreateTag = ({
  onError,
  onSuccess,
}: {
  onError: (name: string) => void;
  onSuccess: (name: string) => void;
}) => {
  const utils = api.useUtils();

  const createTag = api.tags.create.useMutation({
    onSuccess: async ({ name }) => {
      await utils.tags.invalidate();
      onSuccess(name);
    },
    onError: (_, { name }) => {
      onError(name);
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
