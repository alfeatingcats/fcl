import "@/styles/globals.css";
import "overlayscrollbars/overlayscrollbars.css";

import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { Geist } from "next/font/google";
import type { ReactNode } from "react";
import { getMessages } from "next-intl/server";

import { routing } from "@/i18n/routing";
import { IntlProviderWrapper } from "@/providers";

import { ClientLayout } from "./client-layout";

export const metadata: Metadata = {
  title: {
    default: "Focu",
    template: "Focu | %s",
  },
  description: "Focu landing page",
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

type RootLayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

const RootLayout = async ({ children, params }: RootLayoutProps) => {
  const { locale } = await params;
  const messages = await getMessages();

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${geist.variable}`}
    >
      <body>
        <IntlProviderWrapper locale={locale} messages={messages}>
          <ClientLayout>{children}</ClientLayout>
        </IntlProviderWrapper>
      </body>
    </html>
  );
};

export default RootLayout;
