// src/components/blocks/hero-carousel.tsx
"use client";

import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

export interface HeroSlideProps {
  id: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  imageUrl?: string;
  imageAlt?: string;
  badge?: string;
}

export interface HeroCarouselProps {
  id?: string;
  slides: HeroSlideProps[];
}

/**
 * Above-the-fold hero with carousel slides and optional CTAs.
 */
export function HeroCarousel({ id, slides }: HeroCarouselProps) {
  if (!slides.length) return null;

  return (
    <Section id={id} variant="default">
      <Carousel className="w-full">
        <CarouselContent>
          {slides.map((slide) => (
            <CarouselItem key={slide.id}>
              <HeroSlide slide={slide} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="mt-4 flex items-center justify-between">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </Section>
  );
}

interface HeroSlideComponentProps {
  slide: HeroSlideProps;
}

function HeroSlide({ slide }: HeroSlideComponentProps) {
  const {
    eyebrow,
    title,
    subtitle,
    primaryCtaHref,
    primaryCtaLabel,
    secondaryCtaHref,
    secondaryCtaLabel,
    imageUrl,
    imageAlt,
    badge,
  } = slide;

  return (
    <div className="grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:items-center">
      <div className="space-y-4 md:space-y-6">
        <div className="space-y-2">
          {eyebrow ? <p className="text-caption uppercase tracking-[0.18em]">{eyebrow}</p> : null}
          <h1 className="text-heading-1">{title}</h1>
          {subtitle ? <p className="text-body">{subtitle}</p> : null}
        </div>

        {(primaryCtaHref && primaryCtaLabel) || (secondaryCtaHref && secondaryCtaLabel) ? (
          <div className="flex flex-wrap gap-3">
            {primaryCtaHref && primaryCtaLabel ? (
              <Button asChild size="lg">
                <Link href={primaryCtaHref}>{primaryCtaLabel}</Link>
              </Button>
            ) : null}
            {secondaryCtaHref && secondaryCtaLabel ? (
              <Button asChild size="lg" variant="outline">
                <Link href={secondaryCtaHref}>{secondaryCtaLabel}</Link>
              </Button>
            ) : null}
          </div>
        ) : null}
      </div>

      <div className="relative">
        <div className="relative aspect-[4/3] overflow-hidden rounded-md">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={imageAlt ?? ""}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 480px, 100vw"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-muted">
              <span className="text-muted text-sm">No image configured</span>
            </div>
          )}
        </div>

        {badge ? (
          <div className="absolute left-4 top-4 rounded-md bg-background/80 px-3 py-1 text-caption shadow-sm backdrop-blur">
            {badge}
          </div>
        ) : null}
      </div>
    </div>
  );
}
