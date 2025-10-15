"use client";

import { useStudyItem } from "@/entities/study-item";
import { useDynamicBreadcrumb, useIdParam } from "@/shared/hooks";

export const StudyItemPage = () => {
  const id = useIdParam();
  const studyItem = useStudyItem(id);
  useDynamicBreadcrumb(studyItem?.title, id);

  return <div>StudyItemPage</div>;
};
