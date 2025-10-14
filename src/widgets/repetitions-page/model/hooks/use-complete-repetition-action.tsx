import {
  useCompleteRepetition,
  useCompleteRepetitionForm,
} from "@/features/complete-repetition";
import { createRepetitionAction } from "./create-repetition-action";
import type { CompleteRepetitionInput } from "@/shared/api/schemas";

export const useCompleteRepetitionAction =
  createRepetitionAction<CompleteRepetitionInput>(
    useCompleteRepetition,
    useCompleteRepetitionForm,
  );
