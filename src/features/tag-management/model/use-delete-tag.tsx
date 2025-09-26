import { api } from "@/trpc/react";
import { useCallback } from "react";

export const useDeleteTag = () => {
  const utils = api.useUtils();

  const deleteTagMutation = api.tags.delete.useMutation({
    onSuccess: async () => {
      await utils.tags.invalidate();
      await utils.studyItem.invalidate();
      console.log("Tag deleted and related data invalidated");
    },
  });

  const handleDeleteTag = useCallback(
    (id: string) => deleteTagMutation.mutate({ id }),
    [deleteTagMutation],
  );

  return {
    deleteTagMutation,
    handleDeleteTag,
    isLoading: deleteTagMutation.isPending,
  };
};
