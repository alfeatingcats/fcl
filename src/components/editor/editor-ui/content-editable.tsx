import { type JSX } from "react";
import { ContentEditable as LexicalContentEditable } from "@lexical/react/LexicalContentEditable";
import { cn } from "@/shared/lib/utils";

type Props = {
  placeholder: string;
  className?: string;
  placeholderClassName?: string;
};

export function ContentEditable({
  placeholder,
  className,
  placeholderClassName,
}: Props): JSX.Element {
  return (
    <LexicalContentEditable
      className={cn(
        `dark:bg-input/30 relative block overflow-auto rounded-md px-8 py-4
        focus:outline-none border border-input m-1.5 mt-1 mb-1`,
        className,
      )}
      aria-placeholder={placeholder}
      placeholder={
        <div
          className={
            placeholderClassName ??
            `text-muted-foreground pointer-events-none absolute top-0 left-0
            overflow-hidden px-9.5 py-4.5 text-ellipsis select-none`
          }
        >
          {placeholder}
        </div>
      }
    />
  );
}
