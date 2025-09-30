"use client";

import { Header } from "@/widgets/header";
import type { CFC } from "@/shared/types";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset } from "@/components/ui/sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import type { StrictBasicUserInfo } from "@/shared/api/schemas";

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
    <div className="flex h-screen w-screen overflow-hidden">
      <SidebarProvider
        defaultOpen={sidebarValue}
        style={
          {
            "--sidebar-width": "18rem",
          } as React.CSSProperties
        }
      >
        <AppSidebar user={user} />

        <SidebarInset className="min-h-0 w-full min-w-0 flex-1 p-4 pt-0">
          {/* <ScrollArea
            scrollBarProps={{ orientation: "vertical" }}
            className="overflow-y-hidden"
          > */}
          <Header />
          {children}
          {/* </ScrollArea> */}
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
};
