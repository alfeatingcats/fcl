"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  CompleteRepetitionSchema,
  type CompleteRepetitionInput,
} from "@/shared/api/schemas";

export const useCompleteRepetitionForm = (isLoading: boolean) =>
  useForm<CompleteRepetitionInput>({
    resolver: zodResolver(CompleteRepetitionSchema),
    defaultValues: {
      difficulty: 1,
    },
    disabled: isLoading,
  });
