import {
  useCompleteRepetition,
  useCompleteRepetitionForm,
} from "@/features/complete-repetition";
import type {
  CompleteRepetitionInput,
  SkipRepetitionInput,
  WaitRepetitionInput,
} from "@/shared/api/schemas";
import {
  useSkipRepetition,
  useSkipRepetitionForm,
} from "@/features/skip-repetition";
import {
  useWaitRepetition,
  useWaitRepetitionForm,
} from "@/features/wait-repetition";

import { createRepetitionAction } from "./create-repetition-action";

export const useCompleteRepetitionAction =
  createRepetitionAction<CompleteRepetitionInput>(
    useCompleteRepetition,
    useCompleteRepetitionForm,
  );

export const useSkipRepetitionAction =
  createRepetitionAction<SkipRepetitionInput>(
    useSkipRepetition,
    useSkipRepetitionForm,
  );

export const useWaitRepetitionAction =
  createRepetitionAction<WaitRepetitionInput>(
    useWaitRepetition,
    useWaitRepetitionForm,
  );
