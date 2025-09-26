'use client"';
import { useBoolean } from "ahooks";
import { useCallback } from "react";

import {
  useCreateStudyItem,
  useStudyItemForm,
} from "@/features/study-item-management";
import type { CreateStudyItemInput } from "@/shared/api/schemas";

import type { UseManageStudyItemReturn } from "./types";

export const useManageStudyItem = (): UseManageStudyItemReturn => {
  const [isStudyItemCreationOpen, { toggle: toggleStudyItemCreation }] =
    useBoolean(false);
  const { handleCreateStudyItem, isCreating } = useCreateStudyItem();
  const { form } = useStudyItemForm({
    onCreate: handleCreateStudyItem,
  });

  const onSubmit = useCallback((data: CreateStudyItemInput) => {
    console.log(data);
  }, []);

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
    onSubmit,
    isCreating,
    handleDrawerChange,
    toggleDrawer: toggleStudyItemCreation,
    isDrawerOpen: isStudyItemCreationOpen,
  };
};
