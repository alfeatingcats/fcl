import { TRPCClientError } from "@trpc/client";
import type { AppRouter } from "@/server/api/root";

import type { ErrorsTKey, ErrorsTranslations } from "../../types";

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
    const key: ErrorsTKey = `${code}`;
    try {
      return t(key);
    } catch {
      return t("INTERNAL_SERVER_ERROR");
    }
  }

  // Non-TRPC errors (network, unknown)
  return t("INTERNAL_SERVER_ERROR");
};
