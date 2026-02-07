// src/components/blocks/services-section.tsx
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export type ServiceItem = {
  id: string;
  title: string;
  description: string;
};

export interface ServicesSectionProps {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  highlights?: { id: string; title: string; description: string }[];
  services: ServiceItem[];
}

export function ServicesSection({
  id,
  eyebrow,
  title,
  subtitle,
  highlights = [],
  services,
}: ServicesSectionProps) {
  return (
    <Section id={id} variant="default">
      <div className="space-y-10 md:space-y-12">
        <SectionHeader eyebrow={eyebrow} title={title} subtitle={subtitle} align="left" />

        {highlights.length > 0 ? (
          <div className="relative">
            <div aria-hidden className="pointer-events-none absolute -inset-x-6 -top-6 h-32">
              <div className="absolute left-10 top-0 h-20 w-20 rounded-full bg-sky-100/80 blur-2xl" />
              <div className="absolute right-16 top-4 h-24 w-24 rounded-full bg-rose-100/80 blur-2xl" />
              <div className="absolute left-1/2 top-6 h-16 w-16 -translate-x-1/2 rounded-full bg-amber-100/80 blur-2xl" />
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {highlights.map((h, idx) => (
                <Card
                  key={h.id}
                  className="group relative h-full overflow-hidden rounded-2xl border border-white/70 bg-gradient-to-br from-white via-white to-sky-50 shadow-sm"
                >
                  <div
                    aria-hidden
                    className={
                      idx % 2 === 0
                        ? "pointer-events-none absolute -right-12 -bottom-12 h-40 w-40 rounded-full bg-sky-100/60 blur-2xl"
                        : "pointer-events-none absolute -right-12 -bottom-12 h-40 w-40 rounded-full bg-rose-100/60 blur-2xl"
                    }
                  />
                  <CardContent className="relative flex h-full flex-col gap-3 p-5 md:p-6">
                    <p className="text-heading-4">{h.title}</p>
                    <p className="text-body-sm text-muted-foreground">{h.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ) : null}

        <div className="relative overflow-hidden rounded-2xl border border-white/70 bg-gradient-to-br from-sky-50 via-white to-amber-50 p-5 shadow-sm md:p-6">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute -right-10 top-4 h-24 w-24 rounded-full bg-sky-100/70 blur-2xl" />
            <div className="absolute -left-8 bottom-0 h-24 w-24 rounded-full bg-rose-100/70 blur-2xl" />
          </div>
          <div className="relative">
            <p className="text-label">Target population</p>
            <p className="text-muted mt-1">Ages 2 to 9 years</p>
            <Separator className="my-5" />
            <p className="text-body-sm text-muted-foreground">
              Services are individualized based on assessment results, family priorities, and
              clinically meaningful goals—delivered in-home, in school settings, and through
              telehealth when appropriate.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
