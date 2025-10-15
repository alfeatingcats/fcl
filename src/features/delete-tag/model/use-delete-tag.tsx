import { noop } from "es-toolkit";

import { api } from "@/trpc/react";
import type { TrpcMutationHook } from "@/shared/api/types";
import { useTrpcErrorHandler } from "@/shared/hooks";

export const useDeleteTag: TrpcMutationHook<"tags", "delete"> = ({
  onError = noop,
  onSuccess,
}) => {
  const utils = api.useUtils();
  const handleError = useTrpcErrorHandler();

  return api.tags.delete.useMutation({
    onSuccess: async ({ deletedTag: { name } }) => {
      onSuccess({ name });
      await utils.tags.invalidate();
      await utils.studyItem.invalidate();
      await utils.repetitions.invalidate();
    },
    onError: (error, {}) => {
      onError({ name: "" });
      handleError(error);
    },
  });
};
