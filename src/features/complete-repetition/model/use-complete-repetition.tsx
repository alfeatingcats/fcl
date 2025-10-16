import { toast } from "sonner";
import { noop } from "es-toolkit";
import { useTranslations } from "next-intl";

import { api } from "@/trpc/react";
import { useMutationErrorHandler } from "@/shared/api";
import type { TrpcMutationHook } from "@/shared/api/types";

export const useCompleteRepetition: TrpcMutationHook<
  "repetitions",
  "complete",
  void,
  void
> = ({ onSuccess, onError = noop }) => {
  const utils = api.useUtils();
  const handleError = useMutationErrorHandler();
  const t = useTranslations("RepetitionsMessages");

  return api.repetitions.complete.useMutation({
    onSuccess: async () => {
      toast.success(t("completeSuccess"));
      onSuccess();
      await utils.repetitions.invalidate();
      await utils.studyItem.invalidate();
    },
    onError: (error) => {
      toast.error(t("completeError"));
      handleError(error);
      onError();
    },
  });
};
