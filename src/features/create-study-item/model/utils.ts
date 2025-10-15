import { type CreateStudyItemInput } from "@/shared/api/schemas";

export const defaultStudyItemFormValues: Partial<CreateStudyItemInput> = {
  title: "",
  description: "",
  tagIds: [],
};

export type StepInfo = {
  step: number;
  date: string;
  diff: string;
  tooltip: string;
};
