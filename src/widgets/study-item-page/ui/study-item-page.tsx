"use client";

import { useStudyItem } from "@/entities/study-item";
import { useDynamicBreadcrumb } from "@/shared/hooks";

import { useParams } from "next/navigation";

export const StudyItemPage = () => {
  const { id } = useParams<{ id: string }>();

  const studyItem = useStudyItem(id);

  useDynamicBreadcrumb(studyItem?.title, id);

  return <div>StudyItemPage</div>;
};
