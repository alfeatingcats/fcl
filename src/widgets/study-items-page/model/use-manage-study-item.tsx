'use client"';

import {
  useCreateStudyItem,
  useStudyItemForm,
} from "@/features/create-study-item";

import { toast } from "sonner";
import { useTranslations } from "next-intl";
import type { UseFormOverlayReturn } from "@/shared/types";
import type { CreateStudyItemInput } from "@/shared/api/schemas";
import { useDrawerState } from "@/shared/hooks";

export const useManageStudyItem =
  (): UseFormOverlayReturn<CreateStudyItemInput> => {
    const t = useTranslations("StudyItemMessages");

    const { form } = useStudyItemForm({});

    const drawer = useDrawerState({
      onClose: () => form.reset(),
    });

    const { mutate, isPending } = useCreateStudyItem({
      onSuccess: ({ name }) => {
        toast.success(t("createSuccess", { name }));
        drawer.handleChange(false);
      },
      onError: ({ name }) => {
        toast.error(t("createError", { name }));
      },
    });

    return {
      form,
      onSubmit: mutate,
      isLoading: isPending,
      handleOpenChange: drawer.handleChange,
      toggleVisibility: drawer.toggle,
      isOpen: drawer.isOpen,
    };
  };
