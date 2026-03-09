'use client'

import {
  type AbstractIntlMessages,
  type Locale,
  NextIntlClientProvider,
} from 'next-intl'

import { useDetectTimeZone } from '@/shared/lib/date'
import { useUserStore } from '@/shared/stores'
import type { CFC } from '@/shared/types'

export const IntlProviderWrapper: CFC<{
  locale: Locale
  messages: AbstractIntlMessages
}> = ({ children, locale, messages }) => {
  useDetectTimeZone()
  const { timeZone } = useUserStore()

  return (
    <NextIntlClientProvider
      timeZone={timeZone}
      locale={locale}
      messages={messages}
    >
      {children}
    </NextIntlClientProvider>
  )
}
