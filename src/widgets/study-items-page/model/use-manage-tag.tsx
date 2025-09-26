'use client"';
import { toast } from "sonner";
import { useBoolean } from "ahooks";
import { useCallback } from "react";

import { useTagForm } from "@/features/tag-management";
import { useCreateTag } from "@/features/tag-management";
import type { CreateTagInput } from "@/shared/api/schemas";

import type { UseManageStudyItemReturn } from "./types";
import { useTranslations } from "next-intl";

export const useManageTag = (): UseManageStudyItemReturn<CreateTagInput> => {
  const t = useTranslations("TagMessages");

  const [isCreateTagDrawerOpen, { toggle: toggleCreateTagDrawer }] =
    useBoolean(false);

  const { handleCreateTag, isLoading } = useCreateTag({
    onSuccess: (name) => {
      toast.success(t("createSuccess", { name }));
      toggleCreateTagDrawer();
    },
    onError: (name) => {
      toast.error(t("createError", { name }));
    },
  });

  const { form, onSubmit } = useTagForm({
    onCreate: handleCreateTag,
  });

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
