import { useTranslations } from "next-intl";

import { usePathname } from "@/i18n/routing";

import { routesMap } from "../config/routes";
import type { NavMainItem } from "../types/nav-main";

export const useSidebarData = (): NavMainItem[] => {
  const t = useTranslations("Sidebar");
  const pathname = usePathname();

  const rootRoutes = Object.values(routesMap).filter((r) => r.parent === null);

  return rootRoutes.map((route) => {
    const children = Object.values(routesMap).filter(
      (r) => r.parent === route.key,
    );

    return {
      title: t(route.key),
      url: route.url,
      icon: route.icon,
      isActive: pathname === route.url,
      items:
        children?.length > 0
          ? children.map((child) => ({
              title: t(child.key),
              url: child.url,
              icon: child.icon,
              isActive: pathname === child.url,
            }))
          : undefined,
    };
  });
};
