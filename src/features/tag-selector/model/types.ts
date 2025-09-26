import type { ReactNode } from "react";

export type TagsSelectorProps = {
  onChange: (values: string[] | undefined) => void;
  value: string[] | undefined;
  fetchTags: boolean;
  ref?: React.Ref<HTMLInputElement>;
  onBlur?: () => void;
  renderCreateTagButton: ReactNode;
};
