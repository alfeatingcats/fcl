'use client"';
import { toast } from "sonner";
import { useTranslations } from "next-intl";
import type { TagType } from "prisma/generated/schemas/models/Tag.schema";

import {
  useDeleteTagModal,
  useDeleteTag as useDeleteTagMutation,
} from "@/features/delete-tag";
import { useCallback } from "react";

export type DeleteTagModalState =
  | (Omit<TagType, "createdAt"> & { usageCount: number })
  | null;

export const useDeleteTag = () => {
  const t = useTranslations("TagMessages");

  const { clearTagToDelete, hasTagToDelete, setTagToDelete, tagToDelete } =
    useDeleteTagModal();

  const { mutate, isPending } = useDeleteTagMutation({
    onSuccess: () => {
      toast.success(t("deleteSuccess", { name: tagToDelete?.name ?? "" }));
      clearTagToDelete();
    },
    onError: () => {
      toast.error(t("deleteError", { name: tagToDelete?.name ?? "" }));
    },
  });

  const handleDelete = useCallback(() => {
    if (!tagToDelete) {
      return;
    }
    mutate({ id: tagToDelete.id });
  }, [mutate, tagToDelete]);

  return {
    tagToDelete,
    setTagToDelete,
    clearTagToDelete,
    hasTagToDelete,

    onDelete: handleDelete,
    isLoading: isPending,
  };
};
