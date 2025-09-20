import "@/styles/globals.css";

import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { Geist } from "next/font/google";
import type { PropsWithChildren } from "react";
import { routing } from "@/i18n/routing";

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

const RootLayout = async ({
  children,
  params,
}: PropsWithChildren<{ params: Promise<{ locale: string }> }>) => {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html lang="en" className={`${geist.variable}`} suppressHydrationWarning>
      <body>
        <NextIntlClientProvider>
          <ClientLayout>{children}</ClientLayout>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
