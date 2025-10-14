import { createRepetitionAction } from "./create-repetition-action";
import type { SkipRepetitionInput } from "@/shared/api/schemas";
import {
  useSkipRepetition,
  useSkipRepetitionForm,
} from "@/features/skip-repetition";

export const useSkipRepetitionAction =
  createRepetitionAction<SkipRepetitionInput>(
    useSkipRepetition,
    useSkipRepetitionForm,
  );
