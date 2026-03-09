import '@/styles/globals.css'
import 'overlayscrollbars/overlayscrollbars.css'

import { type Metadata } from 'next'
import { Inter } from 'next/font/google'
import { notFound } from 'next/navigation'
import { hasLocale } from 'next-intl'
import { getMessages } from 'next-intl/server'
import type { ReactNode } from 'react'

import { routing } from '@/i18n/routing'

import { ClientLayout } from './client-layout'
import { IntlProviderWrapper } from '@/providers'

export const metadata: Metadata = {
  title: {
    default: 'Focu',
    template: 'Focu | %s',
  },
  description: 'Focu landing page',
}

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

type RootLayoutProps = {
  children: ReactNode
  params: Promise<{ locale: string }>
}

const RootLayout = async ({ children, params }: RootLayoutProps) => {
  const { locale } = await params
  const messages = await getMessages()

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }
  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${inter.variable}`}
    >
      <body>
        <IntlProviderWrapper locale={locale} messages={messages}>
          <ClientLayout>{children}</ClientLayout>
        </IntlProviderWrapper>
      </body>
    </html>
  )
}

export default RootLayout
