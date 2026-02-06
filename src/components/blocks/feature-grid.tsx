// src/components/blocks/feature-grid.tsx
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/cn";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export interface FeatureItemProps {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  imageAlt?: string;
}

export interface FeatureGridProps {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  alignHeader?: "left" | "center";
  features: FeatureItemProps[];
  sectionClassName?: string;
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
  sectionClassName,
}: FeatureGridProps) {
  if (!features.length) return null;

  return (
    <Section id={id} className={sectionClassName}>
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

const pastelBgVariants = [
  "from-rose-100/90 via-rose-300/80 to-white/60",
  "from-sky-100/90 via-sky-300/80 to-white/60",
  "from-amber-100/90 via-amber-300/80 to-white/60",
  "from-emerald-100/90 via-emerald-300/80 to-white/60",
];

function FeatureCard({ feature, index }: FeatureCardProps) {
  const pastel = pastelBgVariants[index % pastelBgVariants.length];

  return (
    <Card
      className={cn(
        "group relative h-full overflow-hidden rounded-md border bg-card/60 shadow-sm",
        "transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md",
        "focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 focus-within:ring-offset-background",
      )}
    >
      {/* Background image */}
      {feature.imageUrl ? (
        <div
          aria-hidden
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${feature.imageUrl})` }}
        />
      ) : null}

      {/* Pastel wash + readability overlay */}
      <div
        aria-hidden
        className={cn(
          "absolute inset-0 bg-gradient-to-br",
          pastel,
          "opacity-95 transition-opacity duration-200 group-hover:opacity-90",
        )}
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/50 to-transparent"
      />

      <CardContent className="relative flex h-full flex-col gap-4">
        {feature.imageUrl ? (
          <div className="overflow-hidden rounded-md border border-white/60 bg-white/40 shadow-sm">
            <Image
              src={feature.imageUrl}
              alt={feature.imageAlt ?? feature.title}
              width={400}
              height={160}
              className="h-40 w-full object-cover"
              loading="lazy"
            />
          </div>
        ) : null}

        <div className="space-y-1">
          <h3 className="text-heading-4 leading-snug text-foreground">{feature.title}</h3>
        </div>

        <p className="text-body-sm text-foreground/80 line-clamp-2">{feature.description}</p>

        <div className="mt-auto">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground/90 transition-colors hover:text-foreground"
          >
            Read more
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
