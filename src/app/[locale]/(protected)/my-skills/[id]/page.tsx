import { ErrorBoundary, Suspense } from "@suspensive/react";

import { HydrateClient } from "@/trpc/server";
import { StudyItemPage } from "@/widgets/study-item-page";
import { protectedApiPrefetch } from "@/shared/api";

const MySkillsPage = async (props: PageProps<"/[locale]/my-skills/[id]">) => {
  const { id } = await props.params;

  await protectedApiPrefetch((api) => api.studyItem.getById.prefetch({ id }));

  return (
    <HydrateClient>
      <ErrorBoundary fallback="Error">
        <Suspense fallback="Loading...">
          <StudyItemPage />
        </Suspense>
      </ErrorBoundary>
    </HydrateClient>
  );
};

export default MySkillsPage;
