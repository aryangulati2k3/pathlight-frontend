// src/components/layout/section-header.tsx

export interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

/**
 * Consistent heading block with eyebrow / title / subtitle.
 */
export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className,
}: SectionHeaderProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <header
      className={`space-y-2 md:space-y-3 ${
        align === "center" ? "max-w-2xl" : ""
      } ${alignment} ${className ?? ""}`}
    >
      {eyebrow ? (
        <p className="text-caption uppercase tracking-[0.18em] text-primary/80">{eyebrow}</p>
      ) : null}
      <h2 className="text-heading-2">{title}</h2>
      {subtitle ? <p className="text-muted">{subtitle}</p> : null}
    </header>
  );
}
