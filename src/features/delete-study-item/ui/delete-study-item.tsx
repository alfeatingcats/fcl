import { Button, type buttonVariants } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { type VariantProps } from "class-variance-authority";

type DeleteStudyItemButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  } & {
    isLoading?: boolean;
  };

export const DeleteStudyItemButton = ({
  isLoading,
  ...props
}: DeleteStudyItemButtonProps) => {
  const t = useTranslations("StudyItem");
  return (
    <Button disabled={isLoading} {...props}>
      {t("deleteButton")}
    </Button>
  );
};
