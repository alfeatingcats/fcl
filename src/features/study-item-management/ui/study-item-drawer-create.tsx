'use client"';
import { useBoolean } from "ahooks";
import { useCallback } from "react";

import { StudyItemForm } from "./study-item-form";
import { StudyItemDrawer } from "./study-item-drawer";
import { useCreateStudyItem, useStudyItemForm } from "../model";
import type { CreateStudyItemInput } from "@/shared/api/schemas";

export const StudyItemDrawerCreate = () => {
  const [isDrawerOpen, { toggle: toggleDrawer }] = useBoolean(false);
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
      toggleDrawer();
    },
    [form, toggleDrawer],
  );

  return (
    <>
      <StudyItemDrawer
        onCreate={form.handleSubmit(onSubmit)}
        isPending={isCreating}
        isDrawerOpen={isDrawerOpen}
        handleDrawerChange={handleDrawerChange}
      >
        <StudyItemForm form={form} />
      </StudyItemDrawer>
    </>
  );
};
