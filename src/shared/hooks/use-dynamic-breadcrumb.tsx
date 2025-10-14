"use client";

import { useEffect } from "react";
import { useDebounceEffect } from "ahooks";

import { useDynamicBreadcrumbStore } from "../stores";

/**
 * Hook for dynamic breadcrumbs with debounce.
 * Sets the title in the store with a 100ms delay to avoid unnecessary updates when the id changes quickly.
 */
export const useDynamicBreadcrumb = (title?: string, id?: string) => {
  const setEntry = useDynamicBreadcrumbStore((s) => s.setEntry);
  const clearEntry = useDynamicBreadcrumbStore((s) => s.clearEntry);

  // Debounced set
  useDebounceEffect(
    () => {
      if (title && id) setEntry(id, title);
    },
    [id, title],
    { wait: 100 },
  );

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (id) clearEntry(id);
    };
  }, [id, clearEntry]);
};
