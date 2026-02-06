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
  sectionClassName?: string;
}

export function TestimonialsCarousel({
  id,
  eyebrow,
  title,
  subtitle,
  testimonials,
  alignHeader = "center",
  sectionClassName,
}: TestimonialsCarouselProps) {
  if (!testimonials.length) return null;

  const cardThemes = [
    {
      card: "bg-gradient-to-br from-rose-50 via-white to-amber-50 border-rose-200/70 shadow-[0_20px_50px_-30px_rgba(251,113,133,0.6)]",
      glow: "bg-rose-300/60",
      tag: "text-rose-700",
    },
    {
      card: "bg-gradient-to-br from-sky-50 via-white to-cyan-50 border-sky-200/70 shadow-[0_20px_50px_-30px_rgba(56,189,248,0.6)]",
      glow: "bg-sky-300/60",
      tag: "text-sky-700",
    },
    {
      card: "bg-gradient-to-br from-emerald-50 via-white to-lime-50 border-emerald-200/70 shadow-[0_20px_50px_-30px_rgba(16,185,129,0.6)]",
      glow: "bg-emerald-300/60",
      tag: "text-emerald-700",
    },
  ];

  return (
    <Section id={id} variant="default" className={sectionClassName}>
      <div className="space-y-8 md:space-y-10">
        <SectionHeader eyebrow={eyebrow} title={title} subtitle={subtitle} align={alignHeader} />

        <Carousel className="w-full">
          <CarouselContent>
            {testimonials.map((t, index) => {
              const theme = cardThemes[index % cardThemes.length];

              return (
                <CarouselItem key={t.id} className="md:basis-1/2 lg:basis-1/3">
                  <Card
                    className={`relative h-full overflow-hidden rounded-2xl border-2 transition-transform duration-300 hover:-translate-y-1 ${theme.card}`}
                  >
                    <div
                      aria-hidden="true"
                      className={`absolute -right-8 top-8 h-24 w-24 rounded-full blur-3xl ${theme.glow}`}
                    />
                    <CardContent className="relative flex h-full flex-col gap-4 p-5 md:p-6">
                      <p className="text-body text-sm md:text-base">
                        <span aria-hidden="true" className={theme.tag}>
                          “
                        </span>
                        {t.quote}
                        <span aria-hidden="true" className={theme.tag}>
                          ”
                        </span>
                      </p>

                      <div className="mt-auto space-y-0.5">
                        <p className="text-body font-medium">{t.name}</p>
                        {t.meta ? <p className={`text-sm ${theme.tag}`}>{t.meta}</p> : null}
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              );
            })}
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
