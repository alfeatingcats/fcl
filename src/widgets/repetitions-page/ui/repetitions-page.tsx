"use client";

import { useMemo, type FC } from "react";
import { isNil, pick } from "es-toolkit";
import { isEmpty } from "es-toolkit/compat";

import {
  RepetitionList,
  type RepetitionsListRow,
} from "@/entities/repetitions";
import { api } from "@/trpc/react";
import {
  CompleteRepetitionForm,
  useCompleteRepetitionOverlay,
} from "@/features/complete-repetition";

import { CompleteRepetitionModal } from "./modals";
import { mapTodayRepetitionsToListData } from "../model";
import { getActiveRepetitionDetails } from "../model/utils";

export const RepetitionsPage: FC = () => {
  const [todayRepetitions] =
    api.repetitions.getTodayRepetitions.useSuspenseQuery();

  const {
    form,
    isOpen,
    handleOpenChange,
    isLoading,
    activeRepetitionId,
    onSubmit,
  } = useCompleteRepetitionOverlay();

  const repetitionsListData = useMemo<Array<RepetitionsListRow>>(
    () => mapTodayRepetitionsToListData(todayRepetitions),
    [todayRepetitions],
  );

  const activeRepetitionDetails = useMemo(
    () => getActiveRepetitionDetails(repetitionsListData, activeRepetitionId),
    [activeRepetitionId, repetitionsListData],
  );

  return (
    <div>
      <RepetitionList
        repetitions={repetitionsListData}
        onCompleteRepetition={handleOpenChange}
      />

      <CompleteRepetitionModal
        isOpen={isOpen}
        onOpenChange={handleOpenChange}
        onSubmit={form.handleSubmit(onSubmit)}
        isLoading={isLoading}
        title={activeRepetitionDetails?.title}
        description={activeRepetitionDetails?.description}
        repetitionNumber={activeRepetitionDetails?.repetitionNumber}
      >
        <CompleteRepetitionForm form={form} />
      </CompleteRepetitionModal>
    </div>
  );
};
