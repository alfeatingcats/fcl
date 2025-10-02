import type { FC, ReactNode } from "react";
import { Badge, type badgeVariants } from "@/components/ui/badge";
import { type VariantProps } from "class-variance-authority";

type EventBadgeProps = {
  label: string;
  details: string;
  icon: ReactNode;
};

export const EventBadge: FC<EventBadgeProps> = ({ label, details, icon }) => {
  return (
    <span className="flex items-center gap-2">
      <span className="text-xs">{`${label}: `}</span>
      <DefaultBadge>
        {icon}
        {details}
      </DefaultBadge>
    </span>
  );
};

export const DefaultBadge: FC<
  React.ComponentProps<"span"> &
    VariantProps<typeof badgeVariants> & { asChild?: boolean }
> = (props) => {
  return (
    <Badge
      variant="outline"
      className="dark:border-accent-foreground/50 bg-white dark:border dark:bg-black"
      {...props}
    />
  );
};
