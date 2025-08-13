import "@/styles/globals.css";

import { type Metadata } from "next";
import { cookies } from "next/headers";
import { Geist } from "next/font/google";
import type { PropsWithChildren } from "react";

import { SIDEBAR_COOKIE_NAME } from "@/lib/const";

import { ClientLayout } from "./client-layout";

export const metadata: Metadata = {
  title: {
    default: "Focu",
    template: "Focu | %s",
  },
  description: "Focu home page",
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const RootLayout = async ({ children }: PropsWithChildren) => {
  const cookieStore = await cookies();
  const sidebarState = cookieStore.get(SIDEBAR_COOKIE_NAME);
  const sidebarValue = JSON.parse(sidebarState?.value ?? "true") as boolean;

  return (
    <html lang="en" className={`${geist.variable}`} suppressHydrationWarning>
      <body>
        <ClientLayout sidebarValue={sidebarValue}>{children}</ClientLayout>
      </body>
    </html>
  );
};

export default RootLayout;
