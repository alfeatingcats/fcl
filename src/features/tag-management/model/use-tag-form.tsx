"use client";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { CreateTagSchema, type CreateTagInput } from "@/shared/api/schemas";

import { defaultTagFormValues } from "./utils";

type UseTagFormProps = {
  defaultValues?: Partial<CreateTagInput>;
  onCreate: (data: CreateTagInput) => void;
};

export const useTagForm = ({
  defaultValues = defaultTagFormValues,
  onCreate,
}: UseTagFormProps) => {
  const form = useForm<CreateTagInput>({
    resolver: zodResolver(CreateTagSchema),
    defaultValues,
  });

  const onSubmit = useCallback(
    (data: CreateTagInput) => {
      onCreate(data);
    },
    [onCreate],
  );

  return { form, onSubmit };
};
