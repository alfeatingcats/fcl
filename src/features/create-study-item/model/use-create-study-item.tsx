import { noop } from "es-toolkit";

import { api } from "@/trpc/react";
import { useTrpcErrorHandler } from "@/shared/hooks";
import type { CallbackHandlers } from "@/shared/types";
import type { TrpcMutationHook } from "@/shared/api/types";

export const useCreateStudyItem: TrpcMutationHook<"studyItem", "create"> = ({
  onError = noop,
  onSuccess,
}: CallbackHandlers) => {
  const utils = api.useUtils();
  const handleError = useTrpcErrorHandler();

  return api.studyItem.create.useMutation({
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
};
