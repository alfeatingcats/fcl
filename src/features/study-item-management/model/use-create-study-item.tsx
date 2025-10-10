import { useCallback } from "react";

import { api } from "@/trpc/react";
import type { CreateStudyItemInput } from "@/shared/api/schemas";
import type { CallbackHandlers } from "@/shared/types";
import { useTrpcErrorHandler } from "@/shared/hooks";

export const useCreateStudyItem = ({
  onError,
  onSuccess,
}: CallbackHandlers) => {
  const utils = api.useUtils();
  const handleError = useTrpcErrorHandler();

  const createStudyItem = api.studyItem.create.useMutation({
    onSuccess: async (data) => {
      await utils.studyItem.invalidate();
      await utils.tags.invalidate();
      onSuccess({ name: data?.title ?? "" });
    },
    onError: (error, data) => {
      onError({ name: data?.title ?? "" });
      handleError(error);
    },
  });

  const handleCreateStudyItem = useCallback(
    (data: CreateStudyItemInput) => createStudyItem.mutate(data),
    [createStudyItem],
  );

  return {
    isCreating: createStudyItem.isPending,
    handleCreateStudyItem,
  };
};
