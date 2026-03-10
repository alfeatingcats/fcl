"use client";
import { api } from "@/trpc/react";

export const useStudyItem = (id: string) => {
  const [studyItem] = api.studyItem.getById.useSuspenseQuery({ id });

  return studyItem;
};
