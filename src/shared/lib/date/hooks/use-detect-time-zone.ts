"use client";

import { useEffect } from "react";

import { useUserStore } from "../../../stores";

export function useDetectTimeZone() {
  const { timeZone, setTimeZone } = useUserStore();

  useEffect(() => {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (timeZone !== tz) {
      setTimeZone(tz);
    }
  }, [timeZone, setTimeZone]);
}
