import "@/styles/globals.css";

import { type Metadata } from "next";
import { cookies } from "next/headers";
import { Geist } from "next/font/google";

import { Header } from "@/widgets/header";
import { TRPCReactProvider } from "@/trpc/react";
import { SIDEBAR_COOKIE_NAME } from "@/lib/const";
import { AppSidebar } from "@/components/app-sidebar";
import { ThemeProvider } from "@/providers/theme-provider";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

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

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const cookieStore = await cookies();
  const sidebarState = cookieStore.get(SIDEBAR_COOKIE_NAME);
  const sidebarValue = JSON.parse(sidebarState?.value ?? "true") as boolean;

  return (
    <html lang="en" className={`${geist.variable}`} suppressHydrationWarning>
      <body>
        <TRPCReactProvider>
          <ThemeProvider
            enableSystem
            attribute="class"
            defaultTheme="system"
            disableTransitionOnChange
          >
            <SidebarProvider
              defaultOpen={sidebarValue}
              style={
                {
                  "--sidebar-width": "18rem",
                } as React.CSSProperties
              }
            >
              <AppSidebar />

              <SidebarInset>
                <Header />
                {children}
              </SidebarInset>
            </SidebarProvider>
          </ThemeProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
