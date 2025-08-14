"use client";

import { Header } from "@/widgets/header";
import type { CFC, BasicUserInfo, StrictBasicUserInfo } from "@/types";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset } from "@/components/ui/sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

type ClientLayoutProps = {
  user: StrictBasicUserInfo;
  sidebarValue: boolean;
};

export const ClientLayout: CFC<ClientLayoutProps> = ({
  user,
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
      <AppSidebar user={user} />

      <SidebarInset>
        <Header />
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
};
