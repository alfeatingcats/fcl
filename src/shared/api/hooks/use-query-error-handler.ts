"use client";
import { useEffect } from "react";
import { useMutationErrorHandler } from "./use-mutation-error-handler";

/**
 * Automatically handles errors from TRPC useQuery hooks using toast notifications.
 *
 * Usage:
 * const query = api.tags.searchForAutocomplete.useQuery(...);
 * useQueryErrorHandler(query.error);
 */
export const useQueryErrorHandler = (error: unknown) => {
  const handleError = useMutationErrorHandler();

  useEffect(() => {
    if (error) {
      handleError(error);
    }
  }, [error, handleError]);
};
