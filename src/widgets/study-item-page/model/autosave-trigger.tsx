"use client";

import { useWatch, useFormState, type Control } from "react-hook-form";
import { useDebounceEffect } from "ahooks";
import type { UpdateStudyItemInput } from "@/shared/api/schemas";

interface AutosaveTriggerProps {
  control: Control<UpdateStudyItemInput>;
  onSubmit: (data: UpdateStudyItemInput) => void;
  isPending: boolean;
  handleSubmit: (callback: (data: UpdateStudyItemInput) => void) => () => void;
}

export const AutosaveTrigger = ({
  control,
  onSubmit,
  isPending,
  handleSubmit,
}: AutosaveTriggerProps) => {
  const [descriptionInputValue] = useWatch<UpdateStudyItemInput>({
    control,
    name: ["description"],
  });

  const [idInputValue, tagIdsInputValue, titleInputValue] =
    useWatch<UpdateStudyItemInput>({
      control,
      name: ["id", "tagIds", "title"],
    });

  const { isDirty, isValid } = useFormState({ control });

  useDebounceEffect(
    () => {
      if (isDirty && isValid && !isPending) {
        void handleSubmit(onSubmit)();
      }
    },

    [
      descriptionInputValue,
      idInputValue,
      tagIdsInputValue,
      titleInputValue,
      isDirty,
      isValid,
    ],
    { wait: 1000 },
  );

  return null;
};
