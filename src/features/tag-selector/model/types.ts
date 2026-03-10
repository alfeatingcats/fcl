import type { ReactNode } from "react";

import type { CreateTagInput } from "@/shared/api/schemas";

import { type UseTagManagementParams } from "./use-manage-tags";

export type TagsSelectorProps = {
  onChange: (values: string[] | undefined) => void;
  value: string[] | undefined;
  fetchTags: boolean;
  ref?: React.Ref<HTMLInputElement>;
  onBlur?: () => void;
  renderCreateTagButton: ReactNode;
};

export type RequiredCreateTagInput = Required<CreateTagInput> & { id: string };

export interface UseTagSelectorParams
  extends Omit<UseTagManagementParams, "tagIds"> {
  onChange: (
    selectedTags: RequiredCreateTagInput[],
    selectedTagIds: string[],
  ) => void;
  defaultTags?: RequiredCreateTagInput[];
}

export interface UseTagSelectorResult {
  selectedTagIds: string[];
  isAllTagsPending: boolean;
  isAutocompleteTagsPending: boolean;
  handleRemove: (tagId: string) => void;
  handleSelect: (tagId: string) => void;
  selectedTags: RequiredCreateTagInput[];
  availableTags: RequiredCreateTagInput[] | undefined;
  autocompleteTags: RequiredCreateTagInput[] | undefined;
}

export type UseTagSelector = (
  params: UseTagSelectorParams,
) => UseTagSelectorResult;
