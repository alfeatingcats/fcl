import {
  useCompleteRepetition,
  useCompleteRepetitionForm,
} from "@/features/complete-repetition";
import type {
  CompleteRepetitionInput,
  WaitRepetitionInput,
  SkipRepetitionInput,
} from "@/shared/api/schemas";
import {
  useSkipRepetition,
  useSkipRepetitionForm,
} from "@/features/skip-repetition";
import {
  useWaitRepetition,
  useWaitRepetitionForm,
} from "@/features/wait-repetition";
import { createRepetitionAction } from "@/shared/hooks/repetition";

export const useCompleteRepetitionAction = createRepetitionAction<
  CompleteRepetitionInput,
  "repetitions",
  "complete"
>(useCompleteRepetition, useCompleteRepetitionForm);

export const useSkipRepetitionAction = createRepetitionAction<
  SkipRepetitionInput,
  "repetitions",
  "skip"
>(useSkipRepetition, useSkipRepetitionForm);

export const useWaitRepetitionAction = createRepetitionAction<
  WaitRepetitionInput,
  "repetitions",
  "wait"
>(useWaitRepetition, useWaitRepetitionForm);
