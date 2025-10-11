import { useMemo } from "react";

import { api } from "@/trpc/react";
import type { CallbackHandlers } from "@/shared/types";
import { useTrpcErrorHandler } from "@/shared/hooks";
import { noop } from "es-toolkit";

export const useCreateStudyItem = ({
  onError = noop,
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

  return useMemo(
    () => ({
      isCreating: createStudyItem.isPending,
      handleCreateStudyItem: createStudyItem.mutate,
    }),
    [createStudyItem],
  );
};
