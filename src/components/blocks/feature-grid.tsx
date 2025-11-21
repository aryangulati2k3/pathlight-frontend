// src/components/blocks/feature-grid.tsx
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/cn";
import { type LucideIcon, Database, Palette, Smartphone } from "lucide-react";

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
      <div className="space-y-8 md:space-y-10">
        <SectionHeader eyebrow={eyebrow} title={title} subtitle={subtitle} align={alignHeader} />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </Section>
  );
}

interface FeatureCardProps {
  feature: FeatureItemProps;
}

function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <Card className="h-full rounded-md border bg-card/60 shadow-sm backdrop-blur">
      <CardContent className="flex h-full flex-col gap-3 p-5 md:p-6">
        <div className="flex items-start gap-3">
          {feature.iconName ? (
            <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-md bg-muted">
              <DynamicIcon name={feature.iconName} className="h-5 w-5" />
            </div>
          ) : null}
          <div>
            <h3 className="text-heading-4">{feature.title}</h3>
          </div>
        </div>
        <p className="text-body text-sm md:text-base">{feature.description}</p>
      </CardContent>
    </Card>
  );
}

interface DynamicIconProps {
  name: string;
  className?: string;
}

const iconMap: Record<string, LucideIcon> = {
  database: Database,
  smartphone: Smartphone,
  palette: Palette,
  // Extend as needed (e.g. "heart": Heart, "star": Star, etc.)
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

  return <IconComponent className={className} />;
}
