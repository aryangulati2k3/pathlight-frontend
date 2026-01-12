import { cn } from "@/lib/cn";
import * as React from "react";

export interface ChipProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * Optional leading icon (Lucide or any SVG component)
   */
  icon?: React.ComponentType<{ className?: string }>;

  /**
   * Visual variant
   */
  variant?: "default" | "primary" | "accent";

  /**
   * Size variant
   */
  size?: "sm" | "md";
}

export function Chip({
  icon: Icon,
  variant = "default",
  size = "sm",
  className,
  children,
  ...props
}: ChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-md border shadow-sm backdrop-blur",
        "whitespace-nowrap",

        // Size
        size === "sm" && "px-3 py-1 text-caption",
        size === "md" && "px-3.5 py-1.5 text-sm",

        // Variant
        variant === "default" && "border-border/60 bg-background/60 text-muted-foreground",

        variant === "primary" && "border-primary/30 bg-primary/10 text-primary",

        variant === "accent" && "border-accent/30 bg-accent/15 text-accent-foreground",

        className,
      )}
      {...props}
    >
      {Icon ? <Icon className="h-4 w-4 shrink-0" aria-hidden /> : null}
      <span>{children}</span>
    </span>
  );
}
