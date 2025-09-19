import { useCallback } from "react";
import { api } from "@/trpc/react";

import type { CreateStudyItemInput } from "@/shared/api/schemas";

export const useCreateStudyItem = () => {
  const utils = api.useUtils();

  const createStudyItem = api.studyItem.create.useMutation({
    onSuccess: async () => {
      await utils.studyItem.invalidate();
    },
  });

  const handleCreateStudyItem = useCallback(
    (data: CreateStudyItemInput) => createStudyItem.mutate(data),
    [createStudyItem],
  );

  return {
    isCreating: createStudyItem.isPending,
    handleCreateStudyItem,
  };
};
