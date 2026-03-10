import {
  BookOpenCheck,
  LayoutDashboard,
  LifeBuoy,
  type LucideIcon,
  Route,
  Settings2,
  Tags,
} from 'lucide-react'

import type { SidebarTKey } from '../types'

type RouteBreadcrumbProperties = SidebarTKey | DynamicRouteKeys

export type DynamicRouteKeys = 'skillDetails'

export type BreadcrumbsRouteRoot = Record<
  RouteBreadcrumbProperties,
  BreadcrumbRoute
>

export type BreadcrumbRoute = {
  url: string
  icon: LucideIcon
  parent: SidebarTKey | null
  key: RouteBreadcrumbProperties
  dynamic?: boolean
}

export const breadcrumbRoutesMap: BreadcrumbsRouteRoot = {
  dashboard: {
    key: 'dashboard',
    url: '/dashboard',
    icon: LayoutDashboard,
    parent: null,
  },
  mySkills: {
    key: 'mySkills',
    url: '/my-skills',
    icon: BookOpenCheck,
    parent: null,
  },
  skillDetails: {
    key: 'skillDetails',
    url: '/my-skills/[id]',
    icon: BookOpenCheck,
    parent: 'mySkills',
    dynamic: true,
  },
  reviewCycle: {
    key: 'reviewCycle',
    url: '/review-cycle',
    icon: Route,
    parent: 'mySkills',
  },
  tags: {
    key: 'tags',
    url: '/tags',
    icon: Tags,
    parent: 'mySkills',
  },
  settings: {
    key: 'settings',
    url: '/settings',
    icon: Settings2,
    parent: null,
  },
  support: {
    key: 'support',
    url: '#',
    icon: LifeBuoy,
    parent: null,
  },
} as const

export type RouteKey = keyof typeof breadcrumbRoutesMap

export const routesList = Object.values(breadcrumbRoutesMap)
