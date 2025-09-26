import type { UseFormReturn, FieldValues } from "react-hook-form";

import type { CreateStudyItemInput } from "@/shared/api/schemas";

export type UseManageStudyItemReturn<
  T extends FieldValues = CreateStudyItemInput,
> = {
  isCreating: boolean;
  isDrawerOpen: boolean;
  toggleDrawer: () => void;
  form: UseFormReturn<T>;
  handleDrawerChange: (open: boolean) => void;
  onSubmit: (data: T) => void;
};
