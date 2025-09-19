"use client";

import { api } from "@/trpc/react";
import {
  StudyItemTable,
  StudyItemTableHeader,
} from "@/features/study-item-table";
import { StudyItemDrawerCreate } from "@/features/study-item-management";

export const StudyItemsPage = () => {
  const [studyItems] = api.studyItem.getAll.useSuspenseQuery({ limit: 10 });

  return (
    <>
      <StudyItemTableHeader renderCreateButton={<StudyItemDrawerCreate />} />
      <StudyItemTable studyItems={studyItems.items} />
    </>
  );
};
