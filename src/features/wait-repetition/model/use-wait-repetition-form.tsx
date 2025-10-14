"use client";
import { useForm } from "react-hook-form";
import { useMemo } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  WaitRepetitionSchema,
  type WaitRepetitionInput,
} from "@/shared/api/schemas";

export const useWaitRepetitionForm = (isLoading: boolean) => {
  const form = useForm<WaitRepetitionInput>({
    resolver: zodResolver(WaitRepetitionSchema),
    disabled: isLoading,
  });

  return useMemo(() => ({ form }), [form]);
};
