// src/components/blocks/team-section.tsx
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl?: string;
};

export interface TeamSectionProps {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  founders: TeamMember[];
  staff?: TeamMember[];
}

export function TeamSection({
  id,
  eyebrow,
  title,
  subtitle,
  founders,
  staff = [],
}: TeamSectionProps) {
  return (
    <Section id={id} variant="default">
      <div className="space-y-10 md:space-y-12">
        <SectionHeader eyebrow={eyebrow} title={title} subtitle={subtitle} align="left" />

        {/* Founders */}
        <div className="space-y-4">
          <h3 className="text-heading-3">Leadership</h3>

          <div className="grid gap-6 lg:grid-cols-2">
            {founders.map((m) => (
              <Card
                key={m.id}
                className="h-full rounded-md border bg-card/60 shadow-sm backdrop-blur"
              >
                <CardContent className="p-5 md:p-6">
                  <div className="grid gap-5 sm:grid-cols-[96px_1fr] sm:items-start">
                    <div className="relative h-24 w-24 overflow-hidden rounded-md border bg-muted">
                      {m.imageUrl ? (
                        <Image
                          src={m.imageUrl}
                          alt={m.name}
                          fill
                          className="object-cover"
                          sizes="96px"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center">
                          <span className="text-caption text-muted-foreground">Photo</span>
                        </div>
                      )}
                    </div>

                    <div className="space-y-2">
                      <div className="space-y-0.5">
                        <p className="text-heading-3">{m.name}</p>
                        <p className="text-muted">{m.role}</p>
                      </div>

                      <p className="text-body-sm text-muted-foreground">{m.bio}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Staff */}
        {staff.length > 0 ? (
          <div className="space-y-4">
            <h3 className="text-heading-3">Our team</h3>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {staff.map((m) => (
                <Card
                  key={m.id}
                  className="h-full rounded-md border bg-card/60 shadow-sm backdrop-blur"
                >
                  <CardContent className="p-5 md:p-6">
                    <div className="flex items-start gap-4">
                      <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-md border bg-muted">
                        {m.imageUrl ? (
                          <Image
                            src={m.imageUrl}
                            alt={m.name}
                            fill
                            className="object-cover"
                            sizes="56px"
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center">
                            <span className="text-caption text-muted-foreground">Photo</span>
                          </div>
                        )}
                      </div>

                      <div className="min-w-0 space-y-1">
                        <p className="text-heading-4 text-1line">{m.name}</p>
                        <p className="text-caption text-muted-foreground">{m.role}</p>
                      </div>
                    </div>

                    <p className="mt-3 text-body-sm text-muted-foreground">{m.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ) : null}

        {staff.length === 0 ? (
          <div className="rounded-md border bg-muted/40 p-5 md:p-6">
            <p className="text-body-sm text-muted-foreground">
              Staff profiles will be published here as they are finalized (photo + brief bio).
            </p>
          </div>
        ) : null}
      </div>
    </Section>
  );
}
