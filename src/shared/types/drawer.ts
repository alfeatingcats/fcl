import type { FormHandleSubmit } from "@/shared/types";
import type { CreateStudyItemInput } from "@/shared/api/schemas";

export type DrawerFormProps<T extends object = CreateStudyItemInput> = {
  isPending?: boolean;
  onCreate: FormHandleSubmit<T>;
  isDrawerOpen: boolean;
  handleDrawerChange: (open: boolean) => void;
};
