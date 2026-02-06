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
          <div className="grid gap-6 md:grid-cols-4">
            {highlights.map((h) => (
              <Card
                key={h.id}
                className="h-full rounded-md border bg-card/60 shadow-sm backdrop-blur"
              >
                <CardContent className="flex h-full flex-col gap-3 p-5 md:p-6">
                  <p className="text-heading-4">{h.title}</p>
                  <p className="text-body-sm text-muted-foreground">{h.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : null}

        <div className="rounded-md border bg-muted/40 p-5 md:p-6">
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
    </Section>
  );
}
