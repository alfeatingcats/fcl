"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { CreateTagSchema, type CreateTagInput } from "@/shared/api/schemas";

import { defaultTagFormValues } from "./utils";

type UseTagFormProps = {
  defaultValues?: Partial<CreateTagInput>;
};

export const useTagForm = ({
  defaultValues = defaultTagFormValues,
}: UseTagFormProps) => {
  const form = useForm<CreateTagInput>({
    resolver: zodResolver(CreateTagSchema),
    defaultValues,
  });

  return { form };
};
