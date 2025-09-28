import { cn } from "@/shared/lib/utils";
import { SearchIcon } from "lucide-react";
import type { ComponentProps, FC } from "react";

type InputProps = FC<ComponentProps<"input">> & {
  Search: FC<ComponentProps<"input">>;
};

const Input: InputProps = ({ className, type, ...props }) => {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className,
      )}
      {...props}
    />
  );
};

const Search: InputProps["Search"] = (props) => {
  return (
    <div className="relative">
      <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
        <SearchIcon size={16} />
      </div>
      <Input className="peer ps-9 pe-9" type="search" {...props} />
    </div>
  );
};

Input.Search = Search;

export { Input };
