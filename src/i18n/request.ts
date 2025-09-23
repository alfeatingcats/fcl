import { cookies } from "next/headers";
import {
  USER_STORE_LOCAL_STORAGE_KEY,
  type UserStoreState,
} from "@/shared/stores/timezone-store";
import { getRequestConfig } from "next-intl/server";
import { hasLocale, type Formats } from "next-intl";
import type { StorageValue } from "zustand/middleware/persist";

import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  const cookieStore = await cookies();
  const requested = await requestLocale;

  let tz = "UTC";
  try {
    const zustandCookie = cookieStore.get(USER_STORE_LOCAL_STORAGE_KEY)?.value;

    if (zustandCookie) {
      const parsed = JSON.parse(
        decodeURIComponent(zustandCookie),
      ) as StorageValue<Partial<UserStoreState>>;

      if (parsed.state?.timeZone) {
        tz = parsed.state.timeZone;
      }
    }
  } catch (e) {
    console.warn("[i18n] Failed to parse timeZone from zustand cookie", e);
  }

  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  return {
    locale,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    messages: (await import(`../../messages/${locale}.json`)).default,
    formats,
    timeZone: tz,
  };
});

export const formats = {
  dateTime: {
    short: { day: "numeric", month: "short", year: "numeric" },
    long: { weekday: "long", day: "numeric", month: "long", year: "numeric" },
    dateOnly: {
      day: "numeric",
      month: "short",
      year: "numeric",
    },
  },
  number: {
    precise: {
      maximumFractionDigits: 5,
    },
  },
  list: {
    enumeration: {
      style: "long",
      type: "conjunction",
    },
  },
} satisfies Formats;
