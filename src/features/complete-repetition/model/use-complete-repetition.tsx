import { api } from "@/trpc/react";
import { useCallback } from "react";

import type { CompleteRepetitionInput } from "@/entities/repetitions";
import { useTrpcErrorHandler } from "@/shared/lib/trpc-error-handler";
import { toast } from "sonner";
import { useTranslations } from "next-intl";

export const useCompleteRepetition = (
  input: Pick<CompleteRepetitionInput, "difficulty">,
) => {
  const utils = api.useUtils();
  const handleError = useTrpcErrorHandler();
  const t = useTranslations("RepetitionsMessages");

  const completeRepetitionMutation = api.repetitions.complete.useMutation({
    onSuccess: async () => {
      await utils.repetitions.invalidate();
      toast.success(t("completeSuccess"));
    },
    onError: (error) => {
      toast.error(t("completeError"));
      handleError(error);
    },
  });

  const handleCompleteRepetition = useCallback(
    async (repetitionId: string) => {
      await completeRepetitionMutation.mutateAsync({ ...input, repetitionId });
    },
    [input, completeRepetitionMutation],
  );

  return {
    handleCompleteRepetition,
  };
};
