import { useCallback } from "react";

import { api } from "@/trpc/react";
import type { CreateStudyItemInput } from "@/shared/api/schemas";

export const useCreateStudyItem = ({
  onError,
  onSuccess,
}: {
  onError: (name: string) => void;
  onSuccess: (name: string) => void;
}) => {
  const utils = api.useUtils();

  const createStudyItem = api.studyItem.create.useMutation({
    onSuccess: async (data) => {
      await utils.studyItem.invalidate();
      await utils.tags.invalidate();
      onSuccess(data?.title ?? "");
    },
    onError: (_, data) => {
      onError(data?.title ?? "");
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
