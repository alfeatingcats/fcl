/* eslint-disable @typescript-eslint/no-empty-function */
"use client";

import { useCallback } from "react";

import { api } from "@/trpc/react";
import type { CFC } from "@/shared/types";
import { StudyItemsTable } from "../components";
import { StudyItemsHeader } from "../components/study-items-header";

export const StudyItems: CFC = () => {
  const [studyItems] = api.studyItem.getAll.useSuspenseQuery({ limit: 10 });

  const createStudyItem = api.studyItem.create.useMutation({
    onSuccess: async () => {
      await utils.studyItem.invalidate();
    },
  });

  const handleCreateStudyitem = useCallback(
    () => createStudyItem.mutate({ title: "test", description: "description" }),
    [createStudyItem],
  );

  const utils = api.useUtils();

  return (
    <div className="space-y-4 p-4">
      <StudyItemsHeader isPending={false} onCreate={() => {}} />
      <StudyItemsTable studyItems={studyItems.items} />
    </div>
  );
};

{
  /* <Button onClick={_createStudyItem} disabled={createStudyItem.isPending}>
        {createStudyItem.isPending && <Loader2Icon className="animate-spin" />}
        Create study item
      </Button> */
}
