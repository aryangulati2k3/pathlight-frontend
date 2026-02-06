import { cn } from "@/lib/cn";

type BentoTheme = {
  background?: string;
  accent?: string;
  glow?: string;
};

export function BentoGrid({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "grid auto-rows-[140px] gap-5 md:grid-cols-6 md:auto-rows-[160px] lg:auto-rows-[180px]",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function BentoGridItem({
  className,
  header,
  title,
  description,
  helpText,
  icon,
  footerLabel,
  footerBadge,
  isActive,
  onClick,
  theme,
}: {
  className?: string;
  header?: string;
  title: string;
  description: string;
  helpText: string;
  icon: React.ReactNode;
  footerLabel: string;
  footerBadge: string;
  isActive: boolean;
  onClick: () => void;
  theme?: BentoTheme;
}) {
  return (
    <button
      type="button"
      aria-expanded={isActive}
      onClick={onClick}
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-lg border border-border/60 p-5 text-left shadow-sm transition-all duration-300 md:p-6",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2",
        "hover:-translate-y-0.5 hover:shadow-md",
        theme?.background,
        className,
      )}
    >
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute -right-16 -bottom-16 h-48 w-48 rounded-full blur-3xl",
          theme?.glow,
        )}
      />

      <div className="flex items-start gap-3">
        <div className="mt-0.5 flex h-11 w-11 items-center justify-center rounded-md bg-white/70 text-foreground shadow-sm">
          {icon}
        </div>

        <div className="space-y-1">
          {header ? (
            <p className={cn("text-overline uppercase tracking-wide", theme?.accent)}>{header}</p>
          ) : null}
          <h3 className="text-heading-4 text-foreground">{title}</h3>
          <p className="text-caption text-foreground/70">{description}</p>
        </div>
      </div>

      <div className="mt-4 flex-1">
        <p className="text-label text-foreground">How it helps</p>
        <p className="mt-2 text-body-sm text-foreground/80">{helpText}</p>
      </div>

      <div className="mt-4 flex items-center justify-between text-caption text-foreground/70">
        <span>{footerLabel}</span>
        <span className="rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-foreground">
          {footerBadge}
        </span>
      </div>
    </button>
  );
}
