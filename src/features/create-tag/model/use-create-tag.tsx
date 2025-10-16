import { api } from "@/trpc/react";

import { noop } from "es-toolkit";
import { useMutationErrorHandler } from "@/shared/api";
import type { TrpcMutationHook } from "@/shared/api/types";

export const useCreateTag: TrpcMutationHook<"tags", "create"> = ({
  onError = noop,
  onSuccess,
}) => {
  const utils = api.useUtils();
  const handleError = useMutationErrorHandler();

  return api.tags.create.useMutation({
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
};
