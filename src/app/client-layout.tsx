"use client";

import { TRPCReactProvider } from "@/trpc/react";
import { ThemeProvider } from "@/providers/theme-provider";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Header } from "@/widgets/header";
import { SidebarInset } from "@/components/ui/sidebar";
import type { CFC } from "@/types";

type ClientLayoutProps = {
  sidebarValue: boolean;
};

export const ClientLayout: CFC<ClientLayoutProps> = ({
  children,
  sidebarValue,
}) => {
  return (
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
  );
};
