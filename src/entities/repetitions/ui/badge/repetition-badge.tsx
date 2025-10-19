import type { FC, ReactNode } from "react";
import { Badge, type badgeVariants } from "@/components/ui/badge";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/shared/lib/utils";

const badgeVariantConfig = cva(undefined, {
  variants: {
    wVariant: {
      default:
        "dark:border-accent-foreground/50 bg-white dark:border dark:bg-black",
      simple: "text-accent-foreground bg-transparent px-0",
    },
  },
  defaultVariants: {
    wVariant: "default",
  },
});

export type RepetitionBadgeVariants = VariantProps<typeof badgeVariantConfig>;

type EventBadgeProps = {
  label: string | null;
  details: string;
  icon: ReactNode;
} & RepetitionBadgeVariants;

export const EventBadge: FC<EventBadgeProps> = ({
  label,
  details,
  icon,
  wVariant,
}) => {
  return (
    <span className="flex items-center gap-2">
      {label && <span className="text-xs">{`${label}: `}</span>}
      <DefaultBadge wVariant={wVariant}>
        {icon}
        {details}
      </DefaultBadge>
    </span>
  );
};

export const DefaultBadge: FC<
  React.ComponentProps<"span"> &
    VariantProps<typeof badgeVariants> &
    RepetitionBadgeVariants & { asChild?: boolean }
> = ({ wVariant, className, ...props }) => {
  const _variant = wVariant ?? "default";
  return (
    <Badge
      variant={_variant === "default" ? "outline" : "default"}
      className={cn(badgeVariantConfig({ wVariant: _variant }), className)}
      {...props}
    />
  );
};
