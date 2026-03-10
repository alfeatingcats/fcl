import { useEffect } from "react";
import { isNull } from "es-toolkit";
import type { UseFormReturn, FieldValues, Path } from "react-hook-form";

type FormWithRepetitionId = FieldValues & { repetitionId: string };

export const useRepetitionActionState = <
  TFormData extends FormWithRepetitionId,
>(
  form: UseFormReturn<TFormData>,
  repetitionId: string | null,
) => {
  useEffect(() => {
    if (isNull(repetitionId)) {
      form.reset();
    } else {
      const field = "repetitionId" as Path<TFormData>;
      const value = repetitionId as TFormData[typeof field];
      form.setValue(field, value);
    }
  }, [form, repetitionId]);
};
