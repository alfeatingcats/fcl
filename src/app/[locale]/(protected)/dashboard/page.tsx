import { ErrorBoundary, Suspense } from '@suspensive/react'

import { protectedApiPrefetch } from '@/shared/api'

import { DashboardPage as DashboardWidget } from '@/widgets/dashboard-page'

import { HydrateClient } from '@/trpc/server'

const DashboardPage = async () => {
  await protectedApiPrefetch((api) => api.repetitions.getStats.prefetch())

  return (
    <HydrateClient>
      <ErrorBoundary fallback="Error">
        <Suspense fallback="Loading...">
          <DashboardWidget />
        </Suspense>
      </ErrorBoundary>
    </HydrateClient>
  )
}

export default DashboardPage
