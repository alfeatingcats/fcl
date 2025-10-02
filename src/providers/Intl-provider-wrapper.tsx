"use client";

import {
  NextIntlClientProvider,
  type AbstractIntlMessages,
  type Locale,
} from "next-intl";
import React from "react";

import type { CFC } from "@/shared/types";
import { useUserStore } from "@/shared/stores";
import { useDetectTimeZone } from "@/shared/lib/date";

export const IntlProviderWrapper: CFC<{
  locale: Locale;
  messages: AbstractIntlMessages;
}> = ({ children, locale, messages }) => {
  useDetectTimeZone();
  const { timeZone } = useUserStore();

  return (
    <NextIntlClientProvider
      timeZone={timeZone}
      locale={locale}
      messages={messages}
    >
      {children}
    </NextIntlClientProvider>
  );
};
