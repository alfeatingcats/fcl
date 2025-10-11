"use client";

import { useTranslations } from "next-intl";

import { FormDrawer } from "@/components/ui/custom";
import type { CFC, OverlayFormProps } from "@/shared/types";
import type { CreateStudyItemInput } from "@/shared/api/schemas";

import { StudyItemProgressCard } from "./study-item-progress-card";

export const StudyItemDrawer: CFC<OverlayFormProps<CreateStudyItemInput>> = ({
  isOpen,
  onSubmit,
  children,
  onOpenChange,
  isLoading = false,
}) => {
  const t = useTranslations("StudyItemDrawer");
  const ta = useTranslations("UiActions");
  return (
    <FormDrawer
      title={t("title")}
      isLoading={isLoading}
      isOpen={isOpen}
      description={t("description")}
      submitButtonProps={{
        onClick: () => void onSubmit(),
        children: ta("create"),
      }}
      onOpenChange={onOpenChange}
    >
      <>
        {children}
        <StudyItemProgressCard />
      </>
    </FormDrawer>
  );
};
