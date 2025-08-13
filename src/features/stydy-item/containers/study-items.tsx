"use client";

import { Loader2Icon } from "lucide-react";
import { useCallback } from "react";

import { api } from "@/trpc/react";
import { Button } from "@/components/ui/button";

export const StudyItem = () => {
  const [studyItems] = api.studyItem.getAll.useSuspenseQuery({ limit: 10 });

  const createStudyItem = api.studyItem.create.useMutation({
    onSuccess: async () => {
      await utils.studyItem.invalidate();
    },
  });

  const _createStudyItem = useCallback(
    () => createStudyItem.mutate({ title: "test", description: "description" }),
    [createStudyItem],
  );

  const utils = api.useUtils();

  return (
    <div className="h-full w-full">
      {/* <Button onClick={_createStudyItem} disabled={createStudyItem.isPending}>
        {createStudyItem.isPending && <Loader2Icon className="animate-spin" />}
        Create study item
      </Button> */}
    </div>
  );
};
