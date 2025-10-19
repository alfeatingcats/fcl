import { useTranslations } from "next-intl";
import {
  cloneElement,
  useCallback,
  useEffect,
  type FC,
  type ReactElement,
  type ReactNode,
} from "react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { useResetState } from "ahooks";
import { isNil } from "es-toolkit";
import type {
  ActionRepetitionModalProps,
  RepetitionSummary,
} from "../../model/shared/types";

export const ActionRepetitionModal: FC<ActionRepetitionModalProps> = ({
  isOpen,
  entity,
  overlay,
  renderContent,
  repetitionNumber,
  renderSubmitButton,
  onClear,
}) => {
  const t = useTranslations("UiActions");

  const [state, setState, resetState] = useResetState<RepetitionSummary>({
    repetitionNumber: 1,
    description: null,
    title: "",
  });

  useEffect(() => {
    if (!isNil(entity?.title)) {
      setState({
        repetitionNumber,
        title: entity.title,
        description: entity?.description,
      });
    }
  }, [entity, isOpen, repetitionNumber, resetState, setState]);

  const handleOpenChange = useCallback(
    (open: boolean) => {
      if (!open) {
        onClear();
      }
    },
    [onClear],
  );
  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{overlay.title}</DialogTitle>
          {overlay.description && (
            <DialogDescription>{overlay.description}</DialogDescription>
          )}
        </DialogHeader>

        <Item variant="outline" size="sm">
          <ItemMedia className="text-accent bg-accent-foreground flex shrink-0 items-center justify-center rounded-md border p-3 leading-none">
            {`${state.repetitionNumber}/7`}
          </ItemMedia>
          <ItemContent>
            <ItemTitle className="line-clamp-1">{state.title}</ItemTitle>
            <ItemDescription className="line-clamp-2">
              {state.description}
            </ItemDescription>
          </ItemContent>
        </Item>

        {renderContent}

        <DialogFooter>
          <DialogClose asChild>
            <Button className="flex-1/2" type="button" variant="outline">
              {t("cancel")}
            </Button>
          </DialogClose>
          {cloneElement(
            renderSubmitButton as ReactElement<{
              className?: string;
              type?: "button";
            }>,
            {
              className: "flex-1/2",
              type: "button",
            },
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
