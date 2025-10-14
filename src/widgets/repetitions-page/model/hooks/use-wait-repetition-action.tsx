import { createRepetitionAction } from "./create-repetition-action";
import type { WaitRepetitionInput } from "@/shared/api/schemas";
import {
  useWaitRepetition,
  useWaitRepetitionForm,
} from "@/features/wait-repetition";

export const useWaitRepetitionAction =
  createRepetitionAction<WaitRepetitionInput>(
    useWaitRepetition,
    useWaitRepetitionForm,
  );
