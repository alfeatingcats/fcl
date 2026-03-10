import { toast } from "sonner";
import { useTranslations } from "next-intl";

import { api } from "@/trpc/react";

import { noop } from "es-toolkit";
import { useMutationErrorHandler } from "@/shared/api";
import type { TrpcMutationHook } from "@/shared/api/types";

export const useSkipRepetition: TrpcMutationHook<
  "repetitions",
  "skip",
  void,
  void
> = ({ onSuccess, onError = noop }) => {
  const utils = api.useUtils();
  const handleError = useMutationErrorHandler();
  const t = useTranslations("RepetitionsMessages");

  return api.repetitions.skip.useMutation({
    onSuccess: async () => {
      toast.success(t("skipSuccess"));
      onSuccess();
      await utils.repetitions.invalidate();
      await utils.studyItem.invalidate();
    },
    onError: (error) => {
      toast.error(t("skipError"));
      handleError(error);
      onError();
    },
  });
};
