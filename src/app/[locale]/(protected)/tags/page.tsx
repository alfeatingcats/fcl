import { ErrorBoundary, Suspense } from '@suspensive/react'

import { protectedApiPrefetch } from '@/shared/api'

import { TagsPage } from '@/widgets/tags-page'

import { HydrateClient } from '@/trpc/server'

const StydyItemsTagsPage = async () => {
  await protectedApiPrefetch((api) => api.tags.getAll.prefetch({}))

  return (
    <HydrateClient>
      <ErrorBoundary fallback="Error">
        <Suspense fallback="Loading...">
          <TagsPage />
        </Suspense>
      </ErrorBoundary>
    </HydrateClient>
  )
}

export default StydyItemsTagsPage
