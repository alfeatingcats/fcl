"use client";

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
  );
};
