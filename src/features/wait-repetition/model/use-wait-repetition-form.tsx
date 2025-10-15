"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  WaitRepetitionSchema,
  type WaitRepetitionInput,
} from "@/shared/api/schemas";

export const useWaitRepetitionForm = (isLoading: boolean) =>
  useForm<WaitRepetitionInput>({
    resolver: zodResolver(WaitRepetitionSchema),
    disabled: isLoading,
  });
