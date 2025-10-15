import { api } from "@/trpc/react";

import { useTrpcErrorHandler } from "@/shared/hooks";
import { noop } from "es-toolkit";
import type { TrpcMutationHook } from "@/shared/api/types";

export const useCreateTag: TrpcMutationHook<"tags", "create"> = ({
  onError = noop,
  onSuccess,
}) => {
  const utils = api.useUtils();
  const handleError = useTrpcErrorHandler();

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
