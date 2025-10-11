import { useTrpcErrorHandler } from "@/shared/hooks";
import type { CallbackHandlers } from "@/shared/types";
import { api } from "@/trpc/react";
import { noop } from "es-toolkit";
import { useCallback } from "react";

export const useDeleteTag = ({
  onError = noop,
  onSuccess,
}: CallbackHandlers<void, void>) => {
  const utils = api.useUtils();
  const handleError = useTrpcErrorHandler();

  const deleteTagMutation = api.tags.delete.useMutation({
    onSuccess: async () => {
      onSuccess();
      await utils.tags.invalidate();
      await utils.studyItem.invalidate();
      await utils.repetitions.invalidate();
    },
    onError: (error) => {
      onError();
      handleError(error);
    },
  });

  const handleDeleteTag = useCallback(
    (id: string) => deleteTagMutation.mutate({ id }),
    [deleteTagMutation],
  );

  return {
    deleteTagMutation,
    handleDeleteTag,
    isLoading: deleteTagMutation.isPending,
  };
};
