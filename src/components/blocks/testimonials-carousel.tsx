// src/components/blocks/testimonials-carousel.tsx
"use client";

import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export type TestimonialItem = {
  id: string;
  quote: string;
  name: string;
  meta?: string; // optional: e.g. "Parent of a 5-year-old"
};

export interface TestimonialsCarouselProps {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  testimonials: TestimonialItem[];
  alignHeader?: "left" | "center";
}

export function TestimonialsCarousel({
  id,
  eyebrow,
  title,
  subtitle,
  testimonials,
  alignHeader = "center",
}: TestimonialsCarouselProps) {
  if (!testimonials.length) return null;

  return (
    <Section id={id} variant="default">
      <div className="space-y-8 md:space-y-10">
        <SectionHeader eyebrow={eyebrow} title={title} subtitle={subtitle} align={alignHeader} />

        <Carousel className="w-full">
          <CarouselContent>
            {testimonials.map((t) => (
              <CarouselItem key={t.id} className="md:basis-1/2 lg:basis-1/3">
                <Card className="h-full rounded-md border-2">
                  <CardContent className="flex h-full flex-col gap-4 p-5 md:p-6">
                    <p className="text-body text-sm md:text-base">
                      <span aria-hidden="true">“</span>
                      {t.quote}
                      <span aria-hidden="true">”</span>
                    </p>

                    <div className="mt-auto space-y-0.5">
                      <p className="text-body font-medium">{t.name}</p>
                      {t.meta ? <p className="text-muted text-sm">{t.meta}</p> : null}
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="mt-4 flex items-center justify-between">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </Section>
  );
}
