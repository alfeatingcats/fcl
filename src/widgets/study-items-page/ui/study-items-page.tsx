"use client";

import { api } from "@/trpc/react";
import { StudyItemDataTable } from "@/features/study-item-table";
import {
  StudyItemDrawer,
  StudyItemForm,
} from "@/features/create-study-item/ui";
import { CreateTagButton } from "@/features/tag-selector";
import {
  CreateStudyItemButton,
  TagCreateDrawer,
  TagForm,
} from "@/features/create-tag";

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
      <StudyItemDataTable
        studyItems={studyItems.items}
        renderCreateButton={
          <CreateStudyItemButton
            isCreating={isCreating}
            onClick={toggleStudyItemCreation}
          />
        }
      />

      <StudyItemDrawer
        isLoading={isCreating}
        onSubmit={form.handleSubmit(onSubmit)}
        isOpen={isStudyItemCreationOpen}
        onOpenChange={handleDrawerChange}
      >
        <StudyItemForm
          form={form}
          renderCreateTagButton={
            <CreateTagButton onClick={toggleCreateTagDrawer} />
          }
        />

        <TagCreateDrawer
          isLoading={isCreatingTag}
          isOpen={isCreateTagDrawerOpen}
          onOpenChange={handleTagDrawerChange}
          onSubmit={formTag.handleSubmit(onSubmitTag)}
        >
          <TagForm form={formTag} />
        </TagCreateDrawer>
      </StudyItemDrawer>
    </>
  );
};
