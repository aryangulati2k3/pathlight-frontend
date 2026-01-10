// src/components/blocks/feature-grid.tsx
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/cn";
import {
  type LucideIcon,
  Database,
  HeartHandshake,
  Home,
  Laptop,
  Palette,
  School,
  Smartphone,
  Sparkles,
} from "lucide-react";

export interface FeatureItemProps {
  id: string;
  title: string;
  description: string;
  iconName?: string;
}

export interface FeatureGridProps {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  alignHeader?: "left" | "center";
  features: FeatureItemProps[];
}

/**
 * Grid of feature/service cards with optional icons.
 * Visual goals:
 * - Soft, welcoming richness (shapes, glow, depth)
 * - Token-driven color (inherits from globals.css palette)
 * - Clear hierarchy and scannability
 */
export function FeatureGrid({
  id,
  eyebrow,
  title,
  subtitle,
  alignHeader = "center",
  features,
}: FeatureGridProps) {
  if (!features.length) return null;

  return (
    <Section id={id}>
      <div className="relative">
        {/* Background shapes */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-primary/12 blur-3xl" />
          <div className="absolute -right-24 top-24 h-72 w-72 rounded-full bg-accent/18 blur-3xl" />
          <div className="absolute left-1/2 top-0 h-56 w-[28rem] -translate-x-1/2 rounded-full bg-muted/40 blur-3xl" />
        </div>

        <div className="space-y-8 md:space-y-10">
          <SectionHeader eyebrow={eyebrow} title={title} subtitle={subtitle} align={alignHeader} />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, idx) => (
              <FeatureCard key={feature.id} feature={feature} index={idx} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

interface FeatureCardProps {
  feature: FeatureItemProps;
  index: number;
}

const iconShellVariants = [
  "bg-primary/12 text-primary",
  "bg-accent/16 text-accent-foreground",
  "bg-muted/60 text-foreground",
  "bg-primary/10 text-primary",
];

const topBarVariants = [
  "from-primary/50 to-primary/0",
  "from-accent/60 to-accent/0",
  "from-muted-foreground/35 to-muted-foreground/0",
  "from-primary/40 to-primary/0",
];

function FeatureCard({ feature, index }: FeatureCardProps) {
  const shell = iconShellVariants[index % iconShellVariants.length];
  const bar = topBarVariants[index % topBarVariants.length];

  return (
    <Card
      className={cn(
        "group relative h-full overflow-hidden rounded-md border bg-card/60 shadow-sm backdrop-blur",
        "transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md",
        "focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 focus-within:ring-offset-background",
      )}
    >
      {/* Top accent bar */}
      <div aria-hidden className={cn("absolute inset-x-0 top-0 h-1 bg-gradient-to-r", bar)} />

      {/* Subtle inner shine */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
      >
        <div className="absolute -left-24 -top-24 h-56 w-56 rounded-full bg-primary/10 blur-2xl" />
        <div className="absolute -right-20 -bottom-24 h-60 w-60 rounded-full bg-accent/14 blur-2xl" />
      </div>

      <CardContent className="relative flex h-full flex-col gap-4 p-5 md:p-6">
        <div className="flex items-start gap-3">
          {feature.iconName ? (
            <div
              className={cn(
                "mt-0.5 flex h-10 w-10 items-center justify-center rounded-md border border-border/60",
                "shadow-sm",
                shell,
              )}
            >
              <DynamicIcon name={feature.iconName} className="h-5 w-5" />
            </div>
          ) : (
            <div
              className={cn(
                "mt-0.5 flex h-10 w-10 items-center justify-center rounded-md border border-border/60",
                "bg-muted/40 text-muted-foreground",
              )}
              aria-hidden
            >
              <Sparkles className="h-5 w-5" />
            </div>
          )}

          <div className="space-y-1">
            <h3 className="text-heading-4 leading-snug">{feature.title}</h3>
          </div>
        </div>

        <p className="text-body-sm text-muted-foreground">{feature.description}</p>

        {/* Decorative corner shapes */}
        <div aria-hidden className="pointer-events-none mt-auto">
          <div className="absolute right-4 top-10 h-12 w-12 rounded-full border border-border/50 bg-background/40 backdrop-blur" />
          <div className="absolute right-10 top-20 h-6 w-6 rotate-12 rounded-md bg-muted/50" />
        </div>
      </CardContent>
    </Card>
  );
}

interface DynamicIconProps {
  name: string;
  className?: string;
}

/**
 * Keep icons mapped and controlled, so content config can't import arbitrary components.
 * Extend as you add service-specific icons.
 */
const iconMap: Record<string, LucideIcon> = {
  database: Database,
  smartphone: Smartphone,
  palette: Palette,

  // Service-friendly extras (recommended)
  heartHandshake: HeartHandshake,
  home: Home,
  school: School,
  laptop: Laptop,
  sparkles: Sparkles,
};

function DynamicIcon({ name, className }: DynamicIconProps) {
  const IconComponent = iconMap[name];

  if (!IconComponent) {
    return (
      <div
        className={cn(
          "h-5 w-5 rounded-sm border border-dashed border-muted-foreground/40",
          className,
        )}
      />
    );
  }

  return <IconComponent className={className} aria-hidden />;
}
