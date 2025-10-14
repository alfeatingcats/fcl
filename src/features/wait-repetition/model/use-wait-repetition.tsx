import { toast } from "sonner";
import { useMemo } from "react";
import { useTranslations } from "next-intl";

import { api } from "@/trpc/react";
import { useTrpcErrorHandler } from "@/shared/hooks";
import type { CallbackHandlers } from "@/shared/types";
import { noop } from "es-toolkit";

export const useWaitRepetition = ({
  onSuccess,
  onError = noop,
}: CallbackHandlers<void, void>) => {
  const utils = api.useUtils();
  const handleError = useTrpcErrorHandler();
  const t = useTranslations("RepetitionsMessages");

  const completeRepetitionMutation = api.repetitions.wait.useMutation({
    onSuccess: async () => {
      toast.success(t("waitSuccess"));
      onSuccess();
      await utils.repetitions.invalidate();
      await utils.studyItem.invalidate();
    },
    onError: (error) => {
      toast.error(t("waitError"));
      handleError(error);
      onError();
    },
  });

  return useMemo(
    () => ({
      mutate: completeRepetitionMutation.mutate,
      isLoading: completeRepetitionMutation.isPending,
    }),
    [completeRepetitionMutation],
  );
};
