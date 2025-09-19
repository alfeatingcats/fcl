"use client";
import { api } from "@/trpc/react";

export const useStudyItems = (limit = 10) => {
  const [studyItems] = api.studyItem.getAll.useSuspenseQuery({ limit });

  return studyItems;
};
