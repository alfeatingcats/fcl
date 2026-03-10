"use client";

import { type TZDate, TZDateMini } from "@date-fns/tz";

import { useUserStore } from "@/shared/stores";
import { useCallback, useMemo } from "react";

export const useDateFnsConfig = () => {
  const timeZone = useUserStore((s) => s.timeZone);

  const withTZ = useCallback(
    (date: string | Date | number): TZDate => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return TZDateMini.tz(timeZone, date);
    },
    [timeZone],
  );

  const dateConfig = useMemo(() => ({ timeZone, withTZ }), [timeZone, withTZ]);

  return dateConfig;
};
