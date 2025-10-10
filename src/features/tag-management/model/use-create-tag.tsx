import { api } from "@/trpc/react";
import { useCallback } from "react";

import type { CreateTagInput } from "@/shared/api/schemas";
import type { CallbackHandlers } from "@/shared/types";
import { useTrpcErrorHandler } from "@/shared/hooks";

export const useCreateTag = ({ onError, onSuccess }: CallbackHandlers) => {
  const utils = api.useUtils();
  const handleError = useTrpcErrorHandler();

  const createTag = api.tags.create.useMutation({
    onSuccess: async ({ name }) => {
      await utils.tags.invalidate();
      await utils.studyItem.invalidate();
      onSuccess({ name });
    },
    onError: (error, { name }) => {
      onError({ name });
      handleError(error);
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
