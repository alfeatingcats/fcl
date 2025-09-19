"use client";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  CreateStudyItemSchema,
  type CreateStudyItemInput,
} from "@/shared/api/schemas";

import { defaultStudyItemFormValues } from "./utils";

type UseStudyItemFormProps = {
  defaultValues?: Partial<CreateStudyItemInput>;
  onCreate: (data: CreateStudyItemInput) => void;
};

export const useStudyItemForm = ({
  defaultValues = defaultStudyItemFormValues,
  onCreate,
}: UseStudyItemFormProps) => {
  const form = useForm<CreateStudyItemInput>({
    resolver: zodResolver(CreateStudyItemSchema),
    defaultValues,
  });

  const onSubmit = useCallback(
    (data: CreateStudyItemInput) => {
      onCreate(data);
    },
    [onCreate],
  );

  return { form, onSubmit };
};
