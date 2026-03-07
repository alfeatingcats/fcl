"use client";

import { useSuspenseGetAllTags } from "@/entities/tag";
import { useTranslations } from "next-intl";

export const TagsPage = () => {
  const t = useTranslations("Repetitions");
  const [a] = useSuspenseGetAllTags();
  console.log({ a });

  return <div></div>;
};
