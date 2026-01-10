// src/components/layout/section.tsx
import type { ReactNode } from "react";

type SectionVariant = "default" | "muted" | "inverted";

export interface SectionProps {
  id?: string;
  variant?: SectionVariant;
  className?: string;
  children: ReactNode;
}

const variantClasses: Record<SectionVariant, string> = {
  default: "bg-background",
  muted: "bg-muted",
  inverted: "bg-foreground text-background",
};

/**
 * Generic layout wrapper with max-width and vertical spacing.
 */
export function Section({ id, variant = "default", className, children }: SectionProps) {
  return (
    <section id={id} className={`w-full py-8 ${variantClasses[variant]} ${className ?? ""}`}>
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">{children}</div>
    </section>
  );
}
