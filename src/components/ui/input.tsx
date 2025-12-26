import { cn } from "@/lib/utils";
import * as React from "react";

type InputProps = React.ComponentProps<"input"> & {
  label?: string;
  required?: boolean;
  error?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  onIconLeftClick?: () => void;
  onIconRightClick?: () => void;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      label,
      required,
      error,
      iconLeft,
      iconRight,
      onIconLeftClick,
      onIconRightClick,
      id,
      ...props
    },
    ref
  ) => {
    const inputId = id ?? React.useId();
    const errorId = `${inputId}-error`;

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="block mb-1 text-sm font-medium text-foreground"
          >
            {label}
            {required && <span className="text-destructive ml-1">*</span>}
          </label>
        )}

        <div className="relative w-full">
          {iconLeft &&
            (onIconLeftClick ? (
              <button
                type="button"
                onClick={onIconLeftClick}
                tabIndex={-1}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-foreground"
              >
                {iconLeft}
              </button>
            ) : (
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                {iconLeft}
              </span>
            ))}

          <input
            ref={ref}
            id={inputId}
            type={type}
            aria-invalid={!!error}
            aria-describedby={error ? errorId : undefined}
            className={cn(
              "file:text-foreground placeholder:text-muted-foreground border-input h-12 w-full rounded-md border bg-transparent px-3 text-base shadow-xs outline-none file:inline-flex file:h-10 file:border-0 file:bg-transparent file:text-sm file:font-medium transition-[color,box-shadow]",
              "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-0",
              error &&
                "border-destructive focus-visible:border-destructive focus-visible:ring-destructive/20",
              iconLeft ? "pl-10" : "",
              iconRight ? "pr-10" : "",
              className
            )}
            {...props}
          />

          {iconRight &&
            (onIconRightClick ? (
              <button
                type="button"
                onClick={onIconRightClick}
                tabIndex={-1}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-foreground"
              >
                {iconRight}
              </button>
            ) : (
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                {iconRight}
              </span>
            ))}
        </div>

        {/* Error */}
        {error && (
          <p id={errorId} className="mt-1 text-sm text-destructive">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
export { Input };
