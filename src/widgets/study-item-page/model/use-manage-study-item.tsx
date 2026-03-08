"use client";

import { useLocale, useTranslations } from "next-intl";
import { toast } from "sonner";
import {
  useUpdateStudyItem,
  useUpdateStudyItemForm,
} from "@/features/update-study-item";
import type { UpdateStudyItemInput } from "@/shared/api/schemas";
import { useDeleteStudyItem } from "@/features/delete-study-item";
import { useRouter } from "@/i18n/routing";

type FormFields = Pick<
  UpdateStudyItemInput,
  "description" | "tagIds" | "title" | "id"
>;

export const useManageStudyItem = (formInitValues: FormFields) => {
  const t = useTranslations("StudyItemMessages");
  const locale = useLocale();
  const router = useRouter();

  const form = useUpdateStudyItemForm({ defaultValues: formInitValues });

  const { mutate, isPending } = useUpdateStudyItem({
    onSuccess: (data) => {
      form.reset(form.getValues(), { keepValues: true });
      toast.success(t("updateSuccess", { name: data.name }));
    },
    onError: ({ name }) => {
      toast.error(t("updateError", { name }));
    },
  });

  const { mutate: deleteStudyItem, isPending: isDeleteLoading } =
    useDeleteStudyItem({
      onSuccess: () => {
        toast.success(
          t("deleteSuccess", { name: formInitValues?.title ?? "" }),
        );
        router.replace("/my-skills", { locale });
      },
      onError: () => {
        toast.error(t("deleteError", { name: formInitValues?.title ?? "" }));
      },
    });

  return {
    form,
    onSubmit: mutate,
    isLoading: isPending,
    deleteStudyItem,
    isDeleteLoading,
  };
};
