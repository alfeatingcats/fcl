"use client";
import { Button } from "@/components/ui/button";
import type { CFC } from "@/shared/types";
import { PlusIcon } from "lucide-react";
import { CreateStudyItemDrawer } from "./create-study-item-drawer";

type StudyItemsHeaderProps = {
  onCreate: () => void;
  isPending: boolean;
};

export const StudyItemsHeader: CFC<StudyItemsHeaderProps> = ({
  onCreate,
  isPending,
}) => {
  return (
    <div className="flex items-center justify-between">
      <CreateStudyItemDrawer onCreate={onCreate} isPending={isPending} />
    </div>
  );
};
