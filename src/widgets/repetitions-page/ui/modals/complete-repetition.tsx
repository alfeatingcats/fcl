import { useCallback } from "react";

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
import type { CFC, OverlayFormProps } from "@/shared/types";
import type { OnCompleteRepetition } from "@/entities/repetitions";
import type { CompleteRepetitionInput } from "@/shared/api/schemas";
import { useTranslations } from "next-intl";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckCircle2Icon } from "lucide-react";

type CompleteRepetitionModalProps = OverlayFormProps<
  CompleteRepetitionInput,
  OnCompleteRepetition
> & { title?: string; description?: string | null; repetitionNumber?: number };

export const CompleteRepetitionModal: CFC<CompleteRepetitionModalProps> = ({
  isOpen,
  children,
  onSubmit,
  onOpenChange,
  isLoading,
  title,
  description,
  repetitionNumber,
}) => {
  const t = useTranslations("Repetitions");
  const tui = useTranslations("UiActions");
  const handleOpenChange = useCallback(
    (open: boolean) => {
      if (!open) {
        onOpenChange(null);
      }
    },
    [onOpenChange],
  );

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{t("completeButton")}</DialogTitle>
          <DialogDescription>
            {t("completeRepetitionDescription")}
          </DialogDescription>
        </DialogHeader>

        <Alert className="flex flex-row gap-2">
          <span className="text-accent bg-accent-foreground flex size-6 shrink-0 items-center justify-center rounded-full border leading-none">
            {repetitionNumber}
          </span>
          <div>
            <AlertTitle className="line-clamp-1">{title}</AlertTitle>
            <AlertDescription className="line-clamp-2">
              {description}
            </AlertDescription>
          </div>
        </Alert>

        {children}
        <DialogFooter>
          <DialogClose asChild>
            <Button className="flex-1/2" type="button" variant="outline">
              {tui("cancel")}
            </Button>
          </DialogClose>
          <Button
            className="flex-1/2"
            onClick={onSubmit}
            disabled={isLoading}
            type="button"
          >
            {tui("submit")}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
