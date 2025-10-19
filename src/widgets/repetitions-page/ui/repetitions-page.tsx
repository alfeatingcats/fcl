"use client";

import { useMemo, type FC } from "react";
import { useTranslations } from "next-intl";

import {
  ActionRepetitionModal,
  RepetitionList,
  type RepetitionsListRow,
} from "@/entities/repetitions";
import { Button } from "@/components/ui/button";
import { useTodayRepetitions } from "@/entities/repetitions";
import { CompleteRepetitionForm } from "@/features/complete-repetition";

import {
  useWaitRepetitionAction,
  useSkipRepetitionAction,
  useCompleteRepetitionAction,
  useRepetitionsOverlayEntityContent,
} from "../model/hooks";
import { mapTodayRepetitionsToListData } from "../model";

export const RepetitionsPage: FC = () => {
  const t = useTranslations("Repetitions");

  const [todayRepetitions] = useTodayRepetitions();

  const repetitionsListData = useMemo<Array<RepetitionsListRow>>(
    () => mapTodayRepetitionsToListData(todayRepetitions),
    [todayRepetitions],
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
    <div>
      <RepetitionList
        repetitions={repetitionsListData}
        onCompleteRepetition={setActiveRepetition}
        onSkipRepetition={setActiveRepetition}
        onWaitRepetition={setActiveRepetition}
      />

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
