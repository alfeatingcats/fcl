import { ErrorBoundary, Suspense } from '@suspensive/react'

import { protectedApiPrefetch } from '@/shared/api'

import { StudyItemsPage } from '@/widgets/study-items-page'

import { HydrateClient } from '@/trpc/server'

const MySkillsPage = async () => {
  await protectedApiPrefetch((api) =>
    api.studyItem.getAll.prefetch({ limit: 10 }),
  )

  return (
    <HydrateClient>
      <ErrorBoundary fallback="Error">
        <Suspense fallback="Loading...">
          <StudyItemsPage />
        </Suspense>
      </ErrorBoundary>
    </HydrateClient>
  )
}

export default MySkillsPage
