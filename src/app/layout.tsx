import "@/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";
import type { PropsWithChildren } from "react";
import { NextIntlClientProvider } from "next-intl";

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

const RootLayout = async ({ children }: PropsWithChildren) => {
  return (
    <html lang="en" className={`${geist.variable}`} suppressHydrationWarning>
      <body>
        {/* <NextIntlClientProvider> */}
        <ClientLayout>{children}</ClientLayout>
        {/* </NextIntlClientProvider> */}
      </body>
    </html>
  );
};

export default RootLayout;
