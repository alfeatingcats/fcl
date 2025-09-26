'use client"';
import { useBoolean } from "ahooks";
import { useCallback } from "react";

import { useTagForm } from "@/features/tag-management";
import { useCreateTag } from "@/features/tag-management";
import type { CreateTagInput } from "@/shared/api/schemas";

import type { UseManageStudyItemReturn } from "./types";

export const useManageTag = (): UseManageStudyItemReturn<CreateTagInput> => {
  const [isCreateTagDrawerOpen, { toggle: toggleCreateTagDrawer }] =
    useBoolean(false);
  const { handleCreateTag, isLoading } = useCreateTag();
  const { form } = useTagForm({
    onCreate: handleCreateTag,
  });

  const onSubmit = useCallback((data: CreateTagInput) => {
    console.log(data);
  }, []);

  const handleDrawerChange = useCallback(
    (open: boolean) => {
      if (!open) {
        form.reset();
      }
      toggleCreateTagDrawer();
    },
    [form, toggleCreateTagDrawer],
  );

  return {
    form,
    onSubmit,
    handleDrawerChange,
    isCreating: isLoading,
    toggleDrawer: toggleCreateTagDrawer,
    isDrawerOpen: isCreateTagDrawerOpen,
  };
};
