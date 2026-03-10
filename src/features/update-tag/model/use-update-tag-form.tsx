"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  UpdateTagFormSchema,
  type TagFormReturn,
  type UpdateTagFormInput,
  type UseTagFormProps,
} from "./types";

export const useUpdateTagForm = (props?: UseTagFormProps): TagFormReturn =>
  useForm<UpdateTagFormInput>({
    resolver: zodResolver(UpdateTagFormSchema),
    defaultValues: props?.defaultValues,
  });
