import type { CreateTagInput } from "@/shared/api/schemas";
import { PRESET_COLOR_CLASSES } from "@/shared/lib/const";

export const defaultTagFormValues: Partial<CreateTagInput> = {
  name: "",
  color: PRESET_COLOR_CLASSES[0],
};
