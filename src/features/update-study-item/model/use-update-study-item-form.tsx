"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  UpdateStudyItemSchema,
  type UpdateStudyItemInput,
} from "@/shared/api/schemas";

type UseStudyItemFormProps = {
  defaultValues?: Partial<UpdateStudyItemInput>;
};

export const useUpdateStudyItemForm = (props?: UseStudyItemFormProps) =>
  useForm<UpdateStudyItemInput>({
    resolver: zodResolver(UpdateStudyItemSchema),
    defaultValues: props?.defaultValues ?? {},
  });
