"use client";

import React from "react";
import { compact, last } from "es-toolkit";
import { useLocale, useTranslations } from "next-intl";

import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Link, type routing, usePathname } from "@/i18n/routing";
import { routesMap, type SidebarRoute } from "@/shared/lib/routes";

/** Normalizes URL: removes trailing slash (except for root) */
const normalize = (u: string | undefined | null) =>
  !u ? "/" : u === "/" || u === "#" ? u : u.replace(/\/$/, "");

const supportedLocales: Array<(typeof routing.locales)[number]> = ["en", "uk"];

export const useBreadcrumbs = (): React.ReactElement | null => {
  const locale = useLocale();
  const t = useTranslations("Sidebar");
  const pathname = usePathname() || "/";

  // remove locale prefix (if present)
  const segments = compact(pathname.split("/"));
  const pathNoLocale =
    segments.length > 0 &&
    supportedLocales.includes(segments[0] as (typeof supportedLocales)[number])
      ? "/" + segments.slice(1).join("/")
      : pathname;

  const normalizedPath = normalize(pathNoLocale);

  const allRoutes = Object.values(routesMap) as Omit<SidebarRoute, "icon">[];

  // first, exact match
  let current = allRoutes.find((r) => normalize(r.url) === normalizedPath);

  // fallback by last segment
  if (!current) {
    const lastSegment = last(compact(normalizedPath.split("/")));
    if (lastSegment) {
      current = allRoutes.find(
        (r) => last(compact(r.url.split("/"))) === lastSegment,
      );
    }
  }

  if (!current) return null;

  // build crumbs chain
  const crumbs: (typeof current)[] = [];
  for (let route: typeof current | undefined = current; route; ) {
    crumbs.unshift(route);
    route = route.parent
      ? (routesMap[route.parent] as typeof route)
      : undefined;
  }

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link locale={locale} href="/">
              {t("home")}
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbSeparator />

        {crumbs.map((crumb, idx) => {
          const isLast = idx === crumbs.length - 1;
          return (
            <BreadcrumbItem key={crumb.key}>
              {isLast ? (
                <BreadcrumbPage>{t(crumb.key)}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink asChild>
                  <Link locale={locale} href={crumb.url}>
                    {t(crumb.key)}
                  </Link>
                </BreadcrumbLink>
              )}
              {idx < crumbs.length - 1 && <BreadcrumbSeparator />}
            </BreadcrumbItem>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
