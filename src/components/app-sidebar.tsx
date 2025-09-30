"use client";

import { useTranslations } from "next-intl";
import type { ComponentProps } from "react";
import { WaypointsIcon } from "lucide-react";

import { Link } from "@/i18n/routing";
import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarMenu,
  SidebarFooter,
  SidebarHeader,
  SidebarContent,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import type { StrictBasicUserInfo } from "@/shared/api/schemas";
import { useSidebarData } from "@/shared/hooks/use-sidebar-data";

type AppSidebarProps = ComponentProps<typeof Sidebar> & {
  user: StrictBasicUserInfo;
};

export const AppSidebar = ({ user, ...props }: AppSidebarProps) => {
  const sidebarData = useSidebarData();
  const t = useTranslations("StudyPage");
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <WaypointsIcon className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-bold">Focu</span>
                  <span className="truncate text-xs">{t("subtitleShort")}</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={sidebarData} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
    </Sidebar>
  );
};
