'use client'

import { OverlayScrollbarsComponent } from 'overlayscrollbars-react'
import { useMemo } from 'react'

import { AppSidebar } from '@/components/app-sidebar'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import type { StrictBasicUserInfo } from '@/shared/api/schemas'
import { breadcrumbRoutesMap } from '@/shared/config/routes'
import type { CFC } from '@/shared/types'

import { Header, useCurrentRouteInfo } from '@/widgets/header'

import { cn } from '@/lib/utils'

type ClientLayoutProps = {
  user: StrictBasicUserInfo
  sidebarValue: boolean
}

export const ClientLayout: CFC<ClientLayoutProps> = ({
  user,
  children,
  sidebarValue,
}) => {
  const { current } = useCurrentRouteInfo()
  const showHeader = useMemo(
    () => current?.key !== breadcrumbRoutesMap.mySkills.key,
    [current?.key],
  )
  return (
    <div className="flex h-screen w-screen max-w-screen! overflow-hidden">
      <SidebarProvider
        defaultOpen={sidebarValue}
        style={
          {
            '--sidebar-width': '18rem',
          } as React.CSSProperties
        }
      >
        <AppSidebar user={user} />

        <SidebarInset className="min-h-0 w-full min-w-0 flex-1">
          <OverlayScrollbarsComponent
            element="div"
            options={{
              scrollbars: { autoHide: 'scroll' },
              overflow: { x: 'hidden', y: 'scroll' },
            }}
            defer
          >
            <div
              className={cn(
                'min-h-full w-full',
                showHeader ? 'px-10 pb-8 pt-2' : '',
              )}
            >
              {showHeader ? <Header /> : null}
              {children}
            </div>
          </OverlayScrollbarsComponent>
        </SidebarInset>
      </SidebarProvider>
    </div>
  )
}
