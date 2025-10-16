"use client";
import { useBoolean } from "ahooks";
import { useCallback, useMemo } from "react";

type UseDrawerStateParams = {
  onClose?: () => void;
};

export const useDrawerState = (params?: UseDrawerStateParams) => {
  const [isOpen, { toggle, setTrue: open, setFalse: close }] =
    useBoolean(false);

  const handleChange = useCallback(
    (nextOpen: boolean) => {
      if (!nextOpen) {
        params?.onClose?.();
      }
      toggle();
    },
    [params, toggle],
  );

  return useMemo(
    () => ({
      isOpen,
      open,
      close,
      toggle,
      handleChange,
    }),
    [isOpen, open, close, toggle, handleChange],
  );
};
