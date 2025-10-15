'use client"';
import { toast } from "sonner";
import { useBoolean } from "ahooks";
import { useCallback } from "react";
import { useTranslations } from "next-intl";

import type { CreateTagInput } from "@/shared/api/schemas";
import { useCreateTag, useTagForm } from "@/features/create-tag";

import type { UseManageStudyItemReturn } from "./types";

export const useManageTag = (): UseManageStudyItemReturn<CreateTagInput> => {
  const t = useTranslations("TagMessages");

  const [isCreateTagDrawerOpen, { toggle: toggleCreateTagDrawer }] =
    useBoolean(false);

  const { mutate, isPending } = useCreateTag({
    onSuccess: ({ name }) => {
      toast.success(t("createSuccess", { name }));
      toggleCreateTagDrawer();
    },
    onError: ({ name }) => {
      toast.error(t("createError", { name }));
    },
  });

  const { form } = useTagForm({});

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
    onSubmit: mutate,
    handleDrawerChange,
    isCreating: isPending,
    toggleDrawer: toggleCreateTagDrawer,
    isDrawerOpen: isCreateTagDrawerOpen,
  };
};
