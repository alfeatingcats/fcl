import {
  Route,
  LifeBuoy,
  Settings2,
  BookOpenCheck,
  type LucideIcon,
  LayoutDashboard,
} from "lucide-react";

import type messages from "../../../messages/en.json";

export type SidebarMessageKeys = Exclude<keyof typeof messages.Sidebar, "home">;
export type SidebarRouteRoot = Record<SidebarMessageKeys, SidebarRoute>;
export type SidebarRoute = {
  url: string;
  icon: LucideIcon;
  parent: SidebarMessageKeys | null;
  key: SidebarMessageKeys;
};

export const routesMap: SidebarRouteRoot = {
  dashboard: {
    key: "dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
    parent: null,
  },
  mySkills: {
    key: "mySkills",
    url: "/my-skills",
    icon: BookOpenCheck,
    parent: null,
  },
  reviewCycle: {
    key: "reviewCycle",
    url: "/review-cycle",
    icon: Route,
    parent: "mySkills",
  },
  settings: {
    key: "settings",
    url: "/settings",
    icon: Settings2,
    parent: null,
  },
  support: {
    key: "support",
    url: "#",
    icon: LifeBuoy,
    parent: null,
  },
} as const;

export type RouteKey = keyof typeof routesMap;

export const routesList = Object.values(routesMap);
