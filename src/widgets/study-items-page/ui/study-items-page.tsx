"use client";

import { api } from "@/trpc/react";
import {
  StudyItemTable,
  StudyItemTableHeader,
} from "@/features/study-item-table";
import {
  StudyItemDrawer,
  StudyItemForm,
} from "@/features/study-item-management/ui";
import {
  TagCreateDrawer,
  TagForm,
  CreateStudyItemButton,
} from "@/features/tag-management";
import { CreateTagButton } from "@/features/tag-selector";

import { useManageStudyItem, useManageTag } from "../model";

export const StudyItemsPage = () => {
  const [studyItems] = api.studyItem.getAll.useSuspenseQuery({ limit: 10 });

  const {
    form,
    onSubmit,
    isCreating,
    handleDrawerChange,
    isDrawerOpen: isStudyItemCreationOpen,
    toggleDrawer: toggleStudyItemCreation,
  } = useManageStudyItem();

  const {
    form: formTag,
    onSubmit: onSubmitTag,
    isCreating: isCreatingTag,
    isDrawerOpen: isCreateTagDrawerOpen,
    toggleDrawer: toggleCreateTagDrawer,
    handleDrawerChange: handleTagDrawerChange,
  } = useManageTag();

  return (
    <>
      <StudyItemTableHeader
        renderCreateButton={
          <CreateStudyItemButton
            isCreating={isCreating}
            onClick={toggleStudyItemCreation}
          />
        }
      />
      <StudyItemTable studyItems={studyItems.items} />

      <StudyItemDrawer
        isPending={isCreating}
        onCreate={form.handleSubmit(onSubmit)}
        isDrawerOpen={isStudyItemCreationOpen}
        handleDrawerChange={handleDrawerChange}
      >
        <StudyItemForm
          form={form}
          renderCreateTagButton={
            <CreateTagButton onClick={toggleCreateTagDrawer} />
          }
        />

        <TagCreateDrawer
          isPending={isCreatingTag}
          isDrawerOpen={isCreateTagDrawerOpen}
          handleDrawerChange={handleTagDrawerChange}
          onCreate={formTag.handleSubmit(onSubmitTag)}
        >
          <TagForm form={formTag} />
        </TagCreateDrawer>
      </StudyItemDrawer>
    </>
  );
};
