"use client";

import { useTranslations } from "next-intl";

import type { CFC } from "@/shared/types";
import { FormDrawer } from "@/components/ui/custom";
import type { DrawerFormProps } from "@/shared/types";

import { StudyItemProgressCard } from "./study-item-progress-card";

export const StudyItemDrawer: CFC<DrawerFormProps> = ({
  onCreate,
  children,
  isDrawerOpen,
  isPending = false,
  handleDrawerChange,
}) => {
  const t = useTranslations("StudyItemDrawer");
  return (
    <FormDrawer
      title={t("title")}
      isPending={isPending}
      isDrawerOpen={isDrawerOpen}
      description={t("description")}
      submitButtonProps={{
        onClick: () => void onCreate(),
      }}
      handleDrawerChange={handleDrawerChange}
    >
      <>
        {children}
        <StudyItemProgressCard />
      </>
    </FormDrawer>
  );
};
