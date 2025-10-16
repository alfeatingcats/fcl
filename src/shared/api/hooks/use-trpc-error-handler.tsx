import { toast } from "sonner";
import { useCallback } from "react";
import { useTranslations } from "next-intl";

import { getErrorMessage } from "../lib/trpc-error-handler";

/**
 * Default toast-based error handler for TRPC hooks.
 *
 * Usage:
 * const handleError = useTrpcErrorHandler();
 * trpc.repetitions.complete.useMutation({ onError: handleError });
 */
export const useTrpcErrorHandler = () => {
  const t = useTranslations("Errors");

  return useCallback(
    (error: unknown) => {
      toast.error(getErrorMessage(error, t));
    },
    [t],
  );
};
