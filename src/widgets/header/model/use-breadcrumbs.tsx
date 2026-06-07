'use client'

import { last } from 'es-toolkit'
import { useLocale, useTranslations } from 'next-intl'
import React from 'react'

import { Link } from '@/i18n/routing'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { breadcrumbRoutesMap } from '@/shared/config/routes'
import { useDynamicBreadcrumbStore } from '@/shared/stores'
import type { SidebarTKey } from '@/shared/types'

import { useCurrentRouteInfo } from './use-current-route-info'

export const useBreadcrumbs = (): React.ReactElement | null => {
  const locale = useLocale()
  const t = useTranslations('Sidebar')
  const entries = useDynamicBreadcrumbStore((s) => s.entries)

  const { current, segments } = useCurrentRouteInfo()

  if (!current) return null

  // Build the parent chain
  const crumbs: (typeof current)[] = []
  for (let route: typeof current | undefined = current; route; ) {
    crumbs.unshift(route)
    route = route.parent ? breadcrumbRoutesMap[route.parent] : undefined
  }

  // Check if there is a title for the dynamic segment
  const lastSegment = last(segments)
  const dynamicTitle = lastSegment ? entries[lastSegment] : undefined

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {/* Home */}
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link locale={locale} href="/">
              {t('home')}
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbSeparator />

        {crumbs.map((crumb, idx) => {
          const isLastCrumb = idx === crumbs.length - 1
          const isDynamic = crumb.dynamic

          // If dynamic route
          if (isDynamic) {
            return (
              <React.Fragment key={crumb.key}>
                <BreadcrumbItem>
                  <BreadcrumbPage>{dynamicTitle ?? '…'}</BreadcrumbPage>
                </BreadcrumbItem>
              </React.Fragment>
            )
          }

          const isLast = isLastCrumb

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
          )
        })}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
