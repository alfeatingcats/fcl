import { toast } from "sonner";
import { useTranslations } from "next-intl";

import { TRPCClientError } from "@trpc/client";
import type { AppRouter } from "@/server/api/root";

import type { ErrorsTKey, ErrorsTranslations } from "../types";
import { useCallback } from "react";

const AppRouterError = TRPCClientError<AppRouter>;
type AppRouterClientError = TRPCClientError<AppRouter>;

/**
 * Returns a localized error message for TRPC errors.
 *
 * @param error - unknown error object (from TRPC)
 * @param t - next-intl translation function for "Errors" namespace
 * @returns Localized error message (string)
 */
export const getErrorMessage = (
  error: unknown,
  t: ErrorsTranslations,
): string => {
  if (error instanceof AppRouterError) {
    const code =
      (error as AppRouterClientError).data?.code ?? "INTERNAL_SERVER_ERROR";
    const key = `${code}` as ErrorsTKey;
    try {
      return t(key);
    } catch {
      return t("INTERNAL_SERVER_ERROR");
    }
  }

  // Non-TRPC errors (network, unknown)
  return t("INTERNAL_SERVER_ERROR");
};

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
