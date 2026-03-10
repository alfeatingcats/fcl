import { toast } from "sonner";
import { useCallback } from "react";
import { useTranslations } from "next-intl";

import { getErrorMessage } from "../lib/trpc-error-handler";

/**
 * Default toast-based error handler for TRPC mutation hooks.
 *
 * Usage:
 * const handleError = useMutationErrorHandler();
 * trpc.repetitions.complete.useMutation({ onError: handleError });
 */
export const useMutationErrorHandler = () => {
  const t = useTranslations("Errors");

  return useCallback(
    (error: unknown) => {
      toast.error(getErrorMessage(error, t));
    },
    [t],
  );
};
