'use client'

import { compact } from 'es-toolkit'

import { type routing, usePathname } from '@/i18n/routing'

import { breadcrumbRoutesMap } from '@/shared/config/routes'

const supportedLocales: Array<(typeof routing.locales)[number]> = ['en', 'uk']

/** Remove trailing slashes */
const normalize = (u: string | undefined | null) =>
  !u ? '/' : u === '/' || u === '#' ? u : u.replace(/\/$/, '')

/** Check if the path matches a template like /my-skills/[id] */
const matchDynamicRoute = (path: string, routeUrl: string): boolean => {
  const pathParts = compact(path.split('/'))
  const routeParts = compact(routeUrl.split('/'))

  if (pathParts.length !== routeParts.length) return false

  return routeParts.every(
    (part, i) =>
      (part.startsWith('[') && part.endsWith(']')) || part === pathParts[i],
  )
}

export const useCurrentRouteInfo = () => {
  const pathname = usePathname() || '/'

  // Remove locale from the path
  const segments = compact(pathname.split('/'))
  const pathNoLocale =
    segments.length > 0 &&
    supportedLocales.includes(segments[0] as (typeof supportedLocales)[number])
      ? `/${segments.slice(1).join('/')}`
      : pathname

  const normalizedPath = normalize(pathNoLocale)
  const allRoutes = Object.values(breadcrumbRoutesMap)

  // Exact or dynamic match
  const current =
    allRoutes.find((r) => normalize(r.url) === normalizedPath) ??
    allRoutes.find((r) => matchDynamicRoute(normalizedPath, r.url) && r.dynamic)

  return { current, segments }
}
