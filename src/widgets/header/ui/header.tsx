'use client'

import { SidebarTrigger } from '@/components/ui/sidebar'

import { useBreadcrumbs } from '../model/use-breadcrumbs'

export const Header = () => {
  const breadcrumbs = useBreadcrumbs()

  return (
    <header className="flex h-12 shrink-0 items-center gap-2 mb-2">
      <SidebarTrigger className="-ml-1" />
      {breadcrumbs}
    </header>
  )
}
