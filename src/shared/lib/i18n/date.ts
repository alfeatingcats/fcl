import { Temporal } from "@js-temporal/polyfill";

export function getTodayRange(timeZone: string) {
  const now = Temporal.Now.zonedDateTimeISO(timeZone);

  const startOfDay = now.startOfDay();
  const endOfDay = startOfDay.add({ days: 1 });

  return {
    start: startOfDay.toInstant().epochMilliseconds,
    end: endOfDay.toInstant().epochMilliseconds,
  };
}
