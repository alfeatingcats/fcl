'use client"';
import { useBoolean } from "ahooks";
import { useCallback } from "react";

import {
  useCreateStudyItem,
  useStudyItemForm,
} from "@/features/study-item-management";

import type { UseManageStudyItemReturn } from "./types";
import { toast } from "sonner";
import { useTranslations } from "next-intl";

export const useManageStudyItem = (): UseManageStudyItemReturn => {
  const t = useTranslations("StudyItemMessages");

  const [isStudyItemCreationOpen, { toggle: toggleStudyItemCreation }] =
    useBoolean(false);

  const { handleCreateStudyItem, isCreating } = useCreateStudyItem({
    onSuccess: ({ name }) => {
      toast.success(t("createSuccess", { name }));
      handleDrawerChange(false);
    },
    onError: ({ name }) => {
      toast.error(t("createError", { name }));
    },
  });

  const { form } = useStudyItemForm({});

  const handleDrawerChange = useCallback(
    (open: boolean) => {
      if (!open) {
        form.reset();
      }
      toggleStudyItemCreation();
    },
    [form, toggleStudyItemCreation],
  );

  return {
    form,
    onSubmit: handleCreateStudyItem,
    isCreating,
    handleDrawerChange,
    toggleDrawer: toggleStudyItemCreation,
    isDrawerOpen: isStudyItemCreationOpen,
  };
};
