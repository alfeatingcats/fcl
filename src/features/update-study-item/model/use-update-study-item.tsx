import { useTrpcErrorHandler } from "@/shared/api";
import type { TrpcMutationHook } from "@/shared/api/types";
import { api } from "@/trpc/react";

export const useUpdateStudyItem: TrpcMutationHook<"studyItem", "update"> = ({
  onError,
  onSuccess,
}) => {
  const utils = api.useUtils();
  const handleError = useTrpcErrorHandler();

  return api.studyItem.update.useMutation({
    onSuccess: async (data) => {
      await utils.studyItem.invalidate();
      await utils.tags.invalidate();
      await utils.repetitions.invalidate();
      onSuccess({ name: data?.title ?? "" });
    },
    onError: (error, data) => {
      onError?.({ name: data?.title ?? "" });
      handleError(error);
    },
  });
};
