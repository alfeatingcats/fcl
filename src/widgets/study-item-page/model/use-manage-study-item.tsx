'use client"';

import { toast } from "sonner";
import { useTranslations } from "next-intl";

import type { UseFormOverlayReturn } from "@/shared/types";
import type { UpdateStudyItemInput } from "@/shared/api/schemas";
import {
  useUpdateStudyItem,
  useUpdateStudyItemForm,
} from "@/features/update-study-item";

type ManageStudyItemReturn = Pick<
  UseFormOverlayReturn<UpdateStudyItemInput>,
  "form" | "onSubmit" | "isLoading"
>;

export const useManageStudyItem = (
  formInitValues: UpdateStudyItemInput,
): ManageStudyItemReturn => {
  const t = useTranslations("StudyItemMessages");

  const form = useUpdateStudyItemForm({ defaultValues: formInitValues });

  const { mutate, isPending } = useUpdateStudyItem({
    onSuccess: ({ name }) => {
      toast.success(t("updateSuccess", { name }));
    },
    onError: ({ name }) => {
      toast.error(t("updateError", { name }));
    },
  });

  return {
    form,
    onSubmit: mutate,
    isLoading: isPending,
  };
};
