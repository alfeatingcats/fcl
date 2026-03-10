import type { FieldValues, UseFormReturn } from "react-hook-form";

export type FormHandleSubmit<T extends object = object> = ReturnType<
  UseFormReturn<T>["handleSubmit"]
>;

export type UseFormOverlayReturn<
  T extends FieldValues,
  H = (open: boolean) => void,
> = {
  isLoading: boolean;
  isOpen: boolean;
  form: UseFormReturn<T>;
  onSubmit: (data: T) => void;
  handleOpenChange: H;
  toggleVisibility: () => void;
};

export type OverlayFormProps<T extends object, H = (open: boolean) => void> = {
  isOpen: boolean;
  onOpenChange: H;
  isLoading?: boolean;
  onSubmit: FormHandleSubmit<T>;
};
