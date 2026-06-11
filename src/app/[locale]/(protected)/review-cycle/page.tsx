import { ErrorBoundary, Suspense } from '@suspensive/react'

import { protectedApiPrefetch } from '@/shared/api'

import { RepetitionsPage } from '@/widgets/repetitions-page'

import { HydrateClient } from '@/trpc/server'

const ReviewCyclePage = async () => {
  await protectedApiPrefetch(async (api) => {
    await Promise.all([
      api.repetitions.getTodayRepetitions.prefetch(),
      api.repetitions.getStats.prefetch(undefined),
    ])
  })

  return (
    <HydrateClient>
      <ErrorBoundary fallback="Error">
        <Suspense fallback="Loading...">
          <RepetitionsPage />
        </Suspense>
      </ErrorBoundary>
    </HydrateClient>
  )
}

export default ReviewCyclePage
