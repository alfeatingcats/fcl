import { ErrorBoundary, Suspense } from "@suspensive/react";

import { HydrateClient } from "@/trpc/server";
import { protectedApiPrefetch } from "@/shared/api";
import { RepetitionsPage } from "@/widgets/repetitions-page";

const ReviewCyclePage = async () => {
  await protectedApiPrefetch((api) =>
    api.studyItem.getTodayRepetitions.prefetch(),
  );

  return (
    <HydrateClient>
      <ErrorBoundary fallback="Error">
        <Suspense fallback="Loading...">
          <RepetitionsPage />
        </Suspense>
      </ErrorBoundary>
    </HydrateClient>
  );
};

export default ReviewCyclePage;
