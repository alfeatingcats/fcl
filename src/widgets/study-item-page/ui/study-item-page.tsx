"use client";
import { useMemo } from "react";
import { useTranslations } from "next-intl";

import {
  ActionRepetitionModal,
  type RepetitionsListRow,
} from "@/entities/repetitions";
import {
  CreateTagButton,
  type RequiredCreateTagInput,
} from "@/features/tag-selector";
import { Button } from "@/components/ui/button";
import { useStudyItem } from "@/entities/study-item";
import { TagCreateDrawer, TagForm } from "@/features/create-tag";
import { useDynamicBreadcrumb, useIdParam } from "@/shared/hooks";
import { RepetitionsTableContent } from "@/features/repetitions-table";
import { CompleteRepetitionForm } from "@/features/complete-repetition";

import {
  useSkipRepetitionAction,
  useWaitRepetitionAction,
  useCompleteRepetitionAction,
  useRepetitionsOverlayEntityContent,
} from "../model/hooks";
import { StudyItemForm } from "./study-item-form";
import { useManageTag } from "../model/use-manage-tag";
import { mapStudyItemToRepetitionList } from "../model/utils";
import { useManageStudyItem } from "../model/use-manage-study-item";

export const StudyItemPage = () => {
  const id = useIdParam();
  const studyItem = useStudyItem(id);
  useDynamicBreadcrumb(studyItem?.title, id);
  const t = useTranslations("Repetitions");

  const { form } = useManageStudyItem({
    description: studyItem?.description ?? undefined,
    title: studyItem?.title,
    id: studyItem?.id,
    tagIds: studyItem?.itemTags.map((itemTag) => itemTag.tag.id),
  });

  const mappedItemTags: Array<RequiredCreateTagInput> = studyItem?.itemTags.map(
    (itemTag) => ({
      id: itemTag.tag.id,
      color: itemTag.tag.color!,
      name: itemTag.tag.name,
    }),
  );

  const {
    form: formTag,
    onSubmit: onSubmitTag,
    isLoading: isCreatingTag,
    isOpen: isCreateTagDrawerOpen,
    toggleVisibility: toggleCreateTagDrawer,
    handleOpenChange: handleTagDrawerChange,
  } = useManageTag();

  const repetitionsListData = useMemo<Array<RepetitionsListRow>>(
    () => mapStudyItemToRepetitionList(studyItem),
    [studyItem],
  );

  const {
    skip,
    wait,
    title,
    onClear,
    complete,
    description,
    activeRepetition,
    repetitionNumber,
    setActiveRepetition,
  } = useRepetitionsOverlayEntityContent(repetitionsListData);

  const {
    form: completeForm,
    isLoading: isCompleteLoading,
    onSubmit: onCompleteSubmit,
  } = useCompleteRepetitionAction(activeRepetition, onClear);
  const {
    form: skipForm,
    isLoading: isSkipLoading,
    onSubmit: onSkipSubmit,
  } = useSkipRepetitionAction(activeRepetition, onClear);
  const {
    form: waitForm,
    isLoading: isWaitLoading,
    onSubmit: onWaitSubmit,
  } = useWaitRepetitionAction(activeRepetition, onClear);

  return (
    <div className="space-y-6">
      <StudyItemForm
        form={form}
        defaultTags={mappedItemTags}
        renderCreateTagButton={
          <CreateTagButton onClick={toggleCreateTagDrawer} />
        }
      />

      <RepetitionsTableContent
        repetitions={studyItem?.repetitions}
        onSkipRepetition={setActiveRepetition}
        onWaitRepetition={setActiveRepetition}
        onCompleteRepetition={setActiveRepetition}
      />

      <TagCreateDrawer
        isLoading={isCreatingTag}
        isOpen={isCreateTagDrawerOpen}
        onOpenChange={handleTagDrawerChange}
        onSubmit={formTag.handleSubmit(onSubmitTag)}
      >
        <TagForm form={formTag} />
      </TagCreateDrawer>

      <ActionRepetitionModal
        onClear={onClear}
        entity={{
          title: title,
          description: description,
        }}
        repetitionNumber={repetitionNumber || ""}
        overlay={{
          title: complete.overlay.title,
          description: complete.overlay.description,
        }}
        isOpen={activeRepetition.action === "complete"}
        renderContent={<CompleteRepetitionForm form={completeForm} />}
        renderSubmitButton={
          <Button
            onClick={completeForm.handleSubmit(onCompleteSubmit)}
            disabled={isCompleteLoading}
          >
            {t("completeLabel")}
          </Button>
        }
      />
      <ActionRepetitionModal
        onClear={onClear}
        entity={{
          title: title,
          description: description,
        }}
        repetitionNumber={repetitionNumber || ""}
        overlay={{
          title: skip.overlay.title,
          description: skip.overlay.description,
        }}
        isOpen={activeRepetition.action === "skip"}
        renderContent={null}
        renderSubmitButton={
          <Button
            onClick={skipForm.handleSubmit(onSkipSubmit)}
            disabled={isSkipLoading}
          >
            {t("skipLabel")}
          </Button>
        }
      />
      <ActionRepetitionModal
        onClear={onClear}
        entity={{
          title: title,
          description: description,
        }}
        repetitionNumber={repetitionNumber || ""}
        overlay={{
          title: wait.overlay.title,
          description: wait.overlay.description,
        }}
        isOpen={activeRepetition.action === "wait"}
        renderContent={null}
        renderSubmitButton={
          <Button
            onClick={waitForm.handleSubmit(onWaitSubmit)}
            disabled={isWaitLoading}
          >
            {t("waitLabel")}
          </Button>
        }
      />
    </div>
  );
};
