"use client";
import { useForm } from "react-hook-form";
import { useMemo } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  SkipRepetitionSchema,
  type SkipRepetitionInput,
} from "@/shared/api/schemas";

export const useSkipRepetitionForm = (isLoading: boolean) => {
  const form = useForm<SkipRepetitionInput>({
    resolver: zodResolver(SkipRepetitionSchema),
    disabled: isLoading,
  });

  return useMemo(() => ({ form }), [form]);
};
