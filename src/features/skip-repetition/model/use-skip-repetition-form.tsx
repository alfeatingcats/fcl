"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  SkipRepetitionSchema,
  type SkipRepetitionInput,
} from "@/shared/api/schemas";

export const useSkipRepetitionForm = (isLoading: boolean) =>
  useForm<SkipRepetitionInput>({
    resolver: zodResolver(SkipRepetitionSchema),
    disabled: isLoading,
  });
