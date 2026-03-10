"use client";

import React from "react";
import { compact, last } from "es-toolkit";
import { useLocale, useTranslations } from "next-intl";
import { Link, type routing, usePathname } from "@/i18n/routing";

import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { useDynamicBreadcrumbStore } from "@/shared/stores";
import { breadcrumbRoutesMap } from "@/shared/config/routes";
import type { SidebarTKey } from "@/shared/types";

/** Remove trailing slashes */
const normalize = (u: string | undefined | null) =>
  !u ? "/" : u === "/" || u === "#" ? u : u.replace(/\/$/, "");

const supportedLocales: Array<(typeof routing.locales)[number]> = ["en", "uk"];

/** Check if the path matches a template like /my-skills/[id] */
const matchDynamicRoute = (path: string, routeUrl: string): boolean => {
  const pathParts = compact(path.split("/"));
  const routeParts = compact(routeUrl.split("/"));

  if (pathParts.length !== routeParts.length) return false;

  return routeParts.every(
    (part, i) =>
      (part.startsWith("[") && part.endsWith("]")) || part === pathParts[i],
  );
};

export const useBreadcrumbs = (): React.ReactElement | null => {
  const locale = useLocale();
  const t = useTranslations("Sidebar");
  const pathname = usePathname() || "/";
  const entries = useDynamicBreadcrumbStore((s) => s.entries);

  // Remove locale from the path
  const segments = compact(pathname.split("/"));
  const pathNoLocale =
    segments.length > 0 &&
    supportedLocales.includes(segments[0] as (typeof supportedLocales)[number])
      ? "/" + segments.slice(1).join("/")
      : pathname;

  const normalizedPath = normalize(pathNoLocale);
  const allRoutes = Object.values(breadcrumbRoutesMap);

  // Exact or dynamic match
  const current =
    allRoutes.find((r) => normalize(r.url) === normalizedPath) ??
    allRoutes.find(
      (r) => matchDynamicRoute(normalizedPath, r.url) && r.dynamic,
    );

  if (!current) return null;

  // Build the parent chain
  const crumbs: (typeof current)[] = [];
  for (let route: typeof current | undefined = current; route; ) {
    crumbs.unshift(route);
    route = route.parent ? breadcrumbRoutesMap[route.parent] : undefined;
  }

  // Check if there is a title for the dynamic segment
  const lastSegment = last(segments);
  const dynamicTitle = lastSegment ? entries[lastSegment] : undefined;

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {/* Home */}
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link locale={locale} href="/">
              {t("home")}
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbSeparator />

        {crumbs.map((crumb, idx) => {
          const isLastCrumb = idx === crumbs.length - 1;
          const isDynamic = crumb.dynamic;

          // If dynamic route
          if (isDynamic) {
            return (
              <React.Fragment key={crumb.key}>
                <BreadcrumbItem>
                  <BreadcrumbPage>{dynamicTitle ?? "…"}</BreadcrumbPage>
                </BreadcrumbItem>
              </React.Fragment>
            );
          }

          const isLast = isLastCrumb;

          return (
            <BreadcrumbItem key={crumb.key}>
              {isLast ? (
                <BreadcrumbPage>{t(crumb.key as SidebarTKey)}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink asChild>
                  <Link locale={locale} href={crumb.url}>
                    {t(crumb.key as SidebarTKey)}
                  </Link>
                </BreadcrumbLink>
              )}
              {!isLast && <BreadcrumbSeparator />}
            </BreadcrumbItem>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
