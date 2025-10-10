import { ErrorBoundary, Suspense } from "@suspensive/react";

import { HydrateClient } from "@/trpc/server";
import { StudyItemsPage } from "@/widgets/study-items-page";
import { protectedApiPrefetch } from "@/shared/api";

const MySkillsPage = async () => {
  await protectedApiPrefetch((api) =>
    api.studyItem.getAll.prefetch({ limit: 10 }),
  );

  return (
    <HydrateClient>
      <ErrorBoundary fallback="Error">
        <Suspense fallback="Loading...">
          <StudyItemsPage />
        </Suspense>
      </ErrorBoundary>
    </HydrateClient>
  );
};

export default MySkillsPage;
