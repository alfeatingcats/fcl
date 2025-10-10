"use client";

import type { FC } from "react";
import { api } from "@/trpc/react";
import {
  RepetitionList,
  type RepetitionsListRow,
} from "@/entities/repetitions";

export const RepetitionsPage: FC = () => {
  const [todayRepetitions] =
    api.repetitions.getTodayRepetitions.useSuspenseQuery();

  const repetitionsListData: Array<RepetitionsListRow> = todayRepetitions.map(
    (repetition) => ({
      scheduledAt: repetition.scheduledAt,
      status: repetition.status,
      difficulty: repetition.difficulty,
      id: repetition.id,
      studyItemId: repetition.studyItemId,
      title: repetition.studyItem.title,
      description: repetition.studyItem.description,
      itemTags: repetition.studyItem.itemTags,
      repetitionNumber: repetition.repetitionNumber,
    }),
  );
  console.log({ todayRepetitions, repetitionsListData });

  return (
    <div>
      <RepetitionList repetitions={repetitionsListData} />
    </div>
  );
};
