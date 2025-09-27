"use client";

import {
  useRef,
  useState,
  useEffect,
  useContext,
  type ReactNode,
  createContext,
  type HTMLAttributes,
  type ComponentProps,
  type MouseEventHandler,
} from "react";
import { isNil } from "es-toolkit";
import { motion } from "motion/react";
import { CircleXIcon, LoaderCircleIcon, SearchX, XIcon } from "lucide-react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { cn } from "@/shared/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

type TagsContextType = {
  value?: string;
  setValue?: (value: string) => void;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  width?: number;
  setWidth?: (width: number) => void;
};

const TagsContext = createContext<TagsContextType>({
  value: undefined,
  setValue: undefined,
  open: false,
  onOpenChange: () => void 0,
  width: undefined,
  setWidth: undefined,
});

const useTagsContext = () => {
  const context = useContext(TagsContext);

  if (!context) {
    throw new Error("useTagsContext must be used within a TagsProvider");
  }

  return context;
};

export type TagsProps = {
  value?: string;
  setValue?: (value: string) => void;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children?: ReactNode;
  className?: string;
};

export const Tags = ({
  value,
  setValue,
  open: controlledOpen,
  onOpenChange: controlledOnOpenChange,
  children,
  className,
}: TagsProps) => {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(false);
  const [width, setWidth] = useState<number>();
  const ref = useRef<HTMLDivElement>(null);

  const open = controlledOpen ?? uncontrolledOpen;
  const onOpenChange = controlledOnOpenChange ?? setUncontrolledOpen;

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const resizeObserver = new ResizeObserver((entries) => {
      setWidth(entries[0]?.contentRect.width);
    });

    resizeObserver.observe(ref.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <TagsContext.Provider
      value={{ value, setValue, open, onOpenChange, width, setWidth }}
    >
      <Popover onOpenChange={onOpenChange} open={open}>
        <div className={cn("relative w-full", className)} ref={ref}>
          {children}
        </div>
      </Popover>
    </TagsContext.Provider>
  );
};

export type TagsTriggerProps = ComponentProps<typeof Button> & {
  tagsInputHint?: string;
};

export const TagsTrigger = ({
  className,
  children,
  tagsInputHint,
  ...props
}: TagsTriggerProps) => (
  <PopoverTrigger asChild>
    <Button
      className={cn("h-auto w-full justify-between p-2", className)}
      role="combobox"
      variant="outline"
      {...props}
    >
      <div className="flex flex-wrap items-center gap-1">
        {children}
        <span className="text-muted-foreground px-2 py-px">
          {tagsInputHint}
        </span>
      </div>
    </Button>
  </PopoverTrigger>
);

export type TagsValueProps = ComponentProps<typeof Badge>;

export const TagsValue = ({
  className,
  children,
  onRemove,
  ...props
}: TagsValueProps & { onRemove?: () => void }) => {
  const handleRemove: MouseEventHandler<HTMLDivElement> = (event) => {
    event.preventDefault();
    event.stopPropagation();
    onRemove?.();
  };

  return (
    <Badge className={cn("flex items-center gap-2", className)} {...props}>
      {children}
      {onRemove && (
        <div
          className="hover:text-muted-foreground size-auto cursor-pointer"
          onClick={handleRemove}
        >
          <XIcon size={12} />
        </div>
      )}
    </Badge>
  );
};

export type TagsContentProps = ComponentProps<typeof PopoverContent> & {
  footer?: ReactNode;
  commandCN?: HTMLAttributes<HTMLDivElement>["className"];
};

export const TagsContent = ({
  children,
  className,
  footer = null,
  commandCN = "",
  ...props
}: TagsContentProps) => {
  const { width } = useTagsContext();

  return (
    <PopoverContent
      className={cn("p-0", className)}
      style={{ width }}
      {...props}
    >
      <Command className={cn("relative", commandCN)}>
        {children}
        {footer}
      </Command>
    </PopoverContent>
  );
};

export type TagsInputProps = ComponentProps<typeof CommandInput> & {
  onClearInput?: () => void;
  isLoading?: boolean;
};

export const TagsInput = ({
  className,
  isLoading,
  onClearInput,
  ...props
}: TagsInputProps) => (
  <div className="relative">
    <CommandInput className={cn("h-9", className)} {...props} />
    {props.value && !isNil(onClearInput) && (
      <button
        className="text-muted-foreground/80 hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-md transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
        aria-label="Clear input"
        onClick={onClearInput}
        disabled={isLoading}
      >
        {isLoading ? (
          <LoaderCircleIcon className="size-4 animate-spin" />
        ) : (
          <CircleXIcon size={16} aria-hidden="true" />
        )}
      </button>
    )}
  </div>
);

export type TagsListProps = ComponentProps<typeof CommandList>;

export const TagsList = ({ className, ...props }: TagsListProps) => (
  <CommandList className={cn("max-h-[200px]", className)} {...props} />
);

export type TagsEmptyProps = ComponentProps<typeof CommandEmpty>;

export const TagsEmpty = ({
  children,
  className,
  ...props
}: TagsEmptyProps) => {
  const t = useTranslations("TagsSelector");
  return (
    <CommandEmpty
      className={cn(
        "relative flex flex-col items-center justify-center gap-3 p-6 text-center",
        className,
      )}
      {...props}
    >
      {children ?? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="text-muted-foreground flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, -5, 5, 0],
            }}
            transition={{
              duration: 0.6,
              repeat: 0,
              ease: "easeInOut",
            }}
            className="bg-muted rounded-full p-3 shadow-sm"
          >
            <SearchX className="h-5 w-5" />
          </motion.div>

          <span className="text-sm font-medium">{t("noTagsFound")}</span>
          <p className="text-muted-foreground text-xs">
            {t("tryDifferentSearch")}
          </p>
        </motion.div>
      )}
    </CommandEmpty>
  );
};

export type TagsGroupProps = ComponentProps<typeof CommandGroup>;

export const TagsGroup = CommandGroup;

export type TagsItemProps = ComponentProps<typeof CommandItem>;

export const TagsItem = ({ className, ...props }: TagsItemProps) => (
  <CommandItem
    className={cn("cursor-pointer items-center justify-between", className)}
    {...props}
  />
);
