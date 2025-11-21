// src/components/blocks/primary-cta-section.tsx
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export interface PrimaryCtaSectionProps {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
}

/**
 * Prominent CTA band used towards the end of a page.
 */
export function PrimaryCtaSection({
  id,
  eyebrow,
  title,
  subtitle,
  primaryCtaHref,
  primaryCtaLabel,
  secondaryCtaHref,
  secondaryCtaLabel,
}: PrimaryCtaSectionProps) {
  return (
    <Section id={id} variant="muted">
      <div className="flex flex-col items-start justify-between gap-4 rounded-md bg-background px-6 py-8 shadow-sm md:flex-row md:items-center md:px-8 md:py-10">
        <div className="space-y-2 md:space-y-3">
          {eyebrow ? <p className="text-caption uppercase tracking-[0.18em]">{eyebrow}</p> : null}
          <h2 className="text-heading-2">{title}</h2>
          {subtitle ? <p className="text-muted">{subtitle}</p> : null}
        </div>
        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg">
            <Link href={primaryCtaHref}>{primaryCtaLabel}</Link>
          </Button>
          {secondaryCtaHref && secondaryCtaLabel ? (
            <Button asChild variant="outline" size="lg">
              <Link href={secondaryCtaHref}>{secondaryCtaLabel}</Link>
            </Button>
          ) : null}
        </div>
      </div>
    </Section>
  );
}
