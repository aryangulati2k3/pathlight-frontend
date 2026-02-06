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
  sectionClassName?: string;
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
  sectionClassName,
}: PrimaryCtaSectionProps) {
  return (
    <Section id={id} variant="muted" className={sectionClassName}>
      <div className="flex flex-col items-start justify-between gap-4 rounded-md bg-white/75 px-6 py-8 shadow-sm backdrop-blur-sm md:flex-row md:items-center md:px-8 md:py-10">
        <div className="space-y-2 md:space-y-3">
          {eyebrow ? <p className="text-caption uppercase tracking-[0.18em]">{eyebrow}</p> : null}
          <h2 className="text-heading-2">{title}</h2>
          {subtitle ? <p className="text-muted">{subtitle}</p> : null}
        </div>
        <div className="grid w-full gap-3 sm:grid-cols-1 md:w-1/2 p-2">
          <Button asChild size="lg" className="w-full">
            <Link href={primaryCtaHref}>{primaryCtaLabel}</Link>
          </Button>

          {secondaryCtaHref && secondaryCtaLabel ? (
            <Button asChild variant={"outline"} size="lg" className="w-full">
              <Link href={secondaryCtaHref}>{secondaryCtaLabel}</Link>
            </Button>
          ) : null}
        </div>
      </div>
    </Section>
  );
}
