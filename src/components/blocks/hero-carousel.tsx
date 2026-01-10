// src/components/blocks/hero-carousel.tsx
"use client";

import { HeartHandshake, Home, Laptop, School, Sparkles, type LucideIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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

  /**
   * Optional chips shown under CTAs (short trust markers).
   * If omitted, we auto-generate a small set from badge/title.
   */
  chips?: string[];
}

export interface HeroCarouselProps {
  id?: string;
  slides: HeroSlideProps[];
}

/**
 * Above-the-fold hero with carousel slides and optional CTAs.
 * Design goals:
 * - Warm, friendly, approachable
 * - Token-driven color (inherits from globals.css palette)
 * - Strong hierarchy (display font for hero title)
 */
export function HeroCarousel({ id, slides }: HeroCarouselProps) {
  const [api, setApi] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const slideCount = slides.length;

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      try {
        setActiveIndex(api.selectedScrollSnap?.() ?? 0);
      } catch {
        // no-op: wrapper may not support selectedScrollSnap
      }
    };

    onSelect();

    try {
      api.on?.("select", onSelect);
      return () => api.off?.("select", onSelect);
    } catch {
      return;
    }
  }, [api]);

  if (!slides.length) return null;

  return (
    <Section id={id} variant="default">
      <Carousel className="w-full" setApi={setApi}>
        <CarouselContent className="items-stretch">
          {slides.map((slide) => (
            <CarouselItem key={slide.id} className="flex">
              <HeroSlide slide={slide} />
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="mt-5 flex items-center justify-between gap-3">
          <div className="text-caption text-muted-foreground">
            {slideCount > 1 ? (
              <span>
                {activeIndex + 1} / {slideCount}
              </span>
            ) : null}
          </div>

          <div className="flex items-center gap-2">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </div>
      </Carousel>
    </Section>
  );
}

interface HeroSlideComponentProps {
  slide: HeroSlideProps;
}

type Chip = { label: string; icon: LucideIcon };

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
    chips,
  } = slide;

  const trustChips = useMemo<Chip[]>(() => {
    // If caller provided explicit chips, render them without guessing icons.
    if (chips?.length) {
      return chips.slice(0, 4).map((label) => ({ label, icon: Sparkles }));
    }

    // Otherwise: generate sensible, non-committal chips for a pediatric clinic hero.
    // We intentionally keep these broad so they stay true without requiring backend support.
    const generated: Chip[] = [
      { label: "Family-first support", icon: HeartHandshake },
      { label: "Clear next steps", icon: Sparkles },
    ];

    const badgeText = (badge ?? "").toLowerCase();
    const titleText = title.toLowerCase();

    if (badgeText.includes("telehealth") || titleText.includes("virtual")) {
      generated.push({ label: "Telehealth available", icon: Laptop });
    }

    if (badgeText.includes("school") || titleText.includes("school")) {
      generated.push({ label: "School collaboration", icon: School });
    }

    if (badgeText.includes("home") || titleText.includes("home")) {
      generated.push({ label: "In-home sessions", icon: Home });
    }

    // Keep max 4 chips to avoid visual noise.
    return generated.slice(0, 4);
  }, [badge, chips, title]);

  const hasCtas = (primaryCtaHref && primaryCtaLabel) || (secondaryCtaHref && secondaryCtaLabel);

  return (
    <div className="relative flex w-full flex-col overflow-hidden rounded-md border border-border/60 bg-card">
      {/* Soft, token-driven glow background */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-primary/12 blur-3xl" />
        <div className="absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-accent/18 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/60" />
      </div>

      <div className="relative h-full grid gap-10 p-6 md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] md:items-center md:p-10">
        {/* Left: copy */}
        <div className="space-y-5 md:space-y-7">
          <div className="space-y-3">
            {eyebrow ? (
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-primary/70" aria-hidden />
                <p className="text-caption uppercase tracking-[0.18em] text-muted-foreground">
                  {eyebrow}
                </p>
              </div>
            ) : null}

            <h1 className="text-display">{title}</h1>

            {subtitle ? (
              <p className="text-body max-w-prose text-muted-foreground">{subtitle}</p>
            ) : null}
          </div>

          {hasCtas ? (
            <div className="space-y-3">
              <div className="flex flex-wrap gap-3">
                {primaryCtaHref && primaryCtaLabel ? (
                  <Button asChild size="lg" className="shadow-sm">
                    <Link href={primaryCtaHref}>{primaryCtaLabel}</Link>
                  </Button>
                ) : null}

                {secondaryCtaHref && secondaryCtaLabel ? (
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="bg-background/60 backdrop-blur"
                  >
                    <Link href={secondaryCtaHref}>{secondaryCtaLabel}</Link>
                  </Button>
                ) : null}
              </div>

              <p className="text-caption text-muted-foreground">
                No pressure — share what you’re looking for, and we’ll guide the next steps.
              </p>
            </div>
          ) : null}

          {/* Trust chips */}
          <div className="flex flex-wrap gap-2">
            {trustChips.map((chip) => (
              <TrustChip key={chip.label} icon={chip.icon} label={chip.label} />
            ))}
          </div>
        </div>

        {/* Right: media */}
        <div className="relative">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md border border-border/60 shadow-sm md:aspect-auto md:h-full md:min-h-[360px]">
            {imageUrl ? (
              <>
                <Image
                  src={imageUrl}
                  alt={imageAlt ?? ""}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 520px, 100vw"
                  priority
                />
                {/* Image overlay for warmth + text contrast */}
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-background/35 via-transparent to-transparent"
                />
              </>
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-muted/60">
                <span className="text-muted text-sm">No image configured</span>
              </div>
            )}
          </div>

          {/* Badge chip (top-left) */}
          {badge ? (
            <div className="absolute left-4 top-4">
              <BadgeChip label={badge} />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function TrustChip({ icon: Icon, label }: { icon: LucideIcon; label: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-md border border-border/60 bg-background/60 px-3 py-1 text-caption text-muted-foreground shadow-sm backdrop-blur">
      <Icon className="h-4 w-4 text-primary/80" aria-hidden />
      <span>{label}</span>
    </div>
  );
}

function BadgeChip({ label }: { label: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-md border border-border/60 bg-background/70 px-3 py-1 text-caption shadow-sm backdrop-blur">
      <Sparkles className="h-4 w-4 text-primary/80" aria-hidden />
      <span className="text-foreground">{label}</span>
    </div>
  );
}
