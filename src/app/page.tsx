// src/app/page.tsx
import { ArticleGrid, type ArticleCardProps } from "@/components/blocks/article-grid";
import { FeatureGrid, type FeatureItemProps } from "@/components/blocks/feature-grid";
import { PrimaryCtaSection } from "@/components/blocks/primary-cta-section";
import {
  TestimonialsCarousel,
  type TestimonialItem,
} from "@/components/blocks/testimonials-carousel";
import Image from "next/image";

const heroSlides = [
  {
    id: "hero-1",
    eyebrow: "Pathlight Clinic",
    title: "Lighting the path to every child’s potential",
    subtitle:
      "At Pathlight Clinic, we provide compassionate, evidence based ABA therapy designed around each child’s unique strengths and needs.",
    primaryCtaLabel: "Start an intake",
    primaryCtaHref: "/contact",
    secondaryCtaLabel: "Explore services",
    secondaryCtaHref: "#services",
    imageUrl: "https://images.pexels.com/photos/8923042/pexels-photo-8923042.jpeg",
    imageAlt: "Therapist supporting a child during a learning activity",
    badge: "In-home • School-based • Telehealth available",
  },
];

const features: FeatureItemProps[] = [
  {
    id: "feature-1",
    title: "Clinic-based services (coming soon in Orlando)",
    description:
      "Structured, individualized schedules delivered by clinical practitioners. Focused on communication, social skills, play, behavior reduction, and caregiver training—with consistency and peer interaction built in.",
    imageUrl: "https://images.pexels.com/photos/8923042/pexels-photo-8923042.jpeg",
    imageAlt: "Therapist supporting a child during a learning activity",
  },
  {
    id: "feature-2",
    title: "Home & community-based services",
    description:
      "Natural environment teaching that builds functional communication, daily living skills, school readiness, and behavior management—helping children generalize skills in real-life settings.",
    imageUrl: "https://images.pexels.com/photos/3662630/pexels-photo-3662630.jpeg",
    imageAlt: "Parent and child working together at a table",
  },
  {
    id: "feature-3",
    title: "School-based services",
    description:
      "Collaboration with educators to integrate ABA strategies into the classroom, supporting verbal behavior, daily living skills, social inclusion, and IEP alignment.",
    imageUrl: "https://images.pexels.com/photos/8617981/pexels-photo-8617981.jpeg",
    imageAlt: "Therapist talking to a parent in a clinic setting",
  },
  {
    id: "feature-4",
    title: "Virtual services",
    description:
      "Flexible sessions delivered via secure video platforms, focused on family guidance, caregiver training, behavior consultation, and continuity of care.",
    imageUrl: "https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg",
    imageAlt: "Family walking together toward a building",
  },
];

const articles: ArticleCardProps[] = [
  {
    href: "/resources/aba-basics",
    title: "ABA Basics: Understanding Behavioural Therapy for Children",
    excerpt:
      "A gentle introduction to Applied Behavior Analysis (ABA)—what it is, how it works, and how it can support your child’s communication, independence, and daily routines.",
    category: "ABA Therapy",
    date: "01 Nov 2025",
    imageUrl: "https://images.pexels.com/photos/3662630/pexels-photo-3662630.jpeg",
    imageAlt: "Parent and child working together at a table",
  },
  {
    href: "/resources/navigating-early-intervention",
    title: "Navigating Early Intervention: Where to Begin",
    excerpt:
      "Feeling overwhelmed by the term “early intervention”? This guide walks parents through what it means, when to seek support, and how to prepare for the first steps.",
    category: "Early Intervention",
    date: "05 Nov 2025",
    imageUrl: "https://images.pexels.com/photos/8617981/pexels-photo-8617981.jpeg",
    imageAlt: "Therapist talking to a parent in a clinic setting",
  },
  {
    href: "/resources/preparing-for-your-first-visit",
    title: "Preparing for Your First Visit to Pathlight Clinic",
    excerpt:
      "Practical tips on what to expect in your first appointment—what to bring, how sessions are structured, and how to talk to your child about visiting the clinic.",
    category: "For Parents",
    date: "10 Nov 2025",
    imageUrl: "https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg",
    imageAlt: "Family walking together toward a building",
  },
];

const testimonials: TestimonialItem[] = [
  {
    id: "t-1",
    quote:
      "We finally felt like we had a clear plan. The goals were practical, and we understood what to do between sessions.",
    name: "Parent",
    meta: "In-home ABA services",
  },
  {
    id: "t-2",
    quote:
      "The support helped our child feel more confident and comfortable communicating needs at home and in school.",
    name: "Caregiver",
    meta: "School-based support",
  },
  {
    id: "t-3",
    quote:
      "We appreciated how collaborative and respectful the team was—parent coaching made a real difference in our routines.",
    name: "Parent",
    meta: "Parent training",
  },
  {
    id: "t-4",
    quote:
      "Everything felt individualized. We could see progress in small steps that added up over time.",
    name: "Caregiver",
  },
];

export default function HomePage() {
  const hero = heroSlides[0];

  return (
    <main>
      <section
        id="home-hero"
        className="relative h-[75vh] overflow-hidden bg-gradient-to-br from-rose-50 via-amber-50 to-sky-50"
      >
        <Image
          src={hero.imageUrl}
          alt={hero.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/50 to-transparent"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.85),_transparent_60%)]"
        />
        <div className="relative mx-auto flex h-full max-w-6xl items-center px-4 py-16 md:px-6">
          <div className="max-w-2xl space-y-4">
            <p className="text-overline text-muted-foreground">{hero.eyebrow}</p>
            <h1 className="text-heading-1">{hero.title}</h1>
            <p className="text-body text-muted-foreground">{hero.subtitle}</p>
          </div>
        </div>
      </section>

      <FeatureGrid
        id="services"
        eyebrow="Services"
        title="Personalized ABA care across clinic, home, school, and virtual settings."
        subtitle="Our services focus on evidence-based techniques, caregiver partnership, and meaningful skills that support each child’s independence and confidence."
        alignHeader="center"
        features={features}
      />

      <ArticleGrid
        id="home-articles"
        eyebrow="Parent resource hub"
        title="Start with simple, practical guides."
        subtitle="A small library of introductory content—like “ABA Basics” and “Navigating Early Intervention”—to help families understand options and feel less alone in the process."
        articles={articles}
        sectionClassName="bg-gradient-to-br from-sky-50 via-sky-400/70 to-white"
      />

      <TestimonialsCarousel
        id="home-testimonials"
        eyebrow="Testimonials"
        title="Support that families can feel."
        subtitle="Hear from caregivers about their experiences with Pathlight Clinic’s ABA therapy services."
        testimonials={testimonials}
        alignHeader="center"
      />

      <PrimaryCtaSection
        id="home-intake"
        eyebrow="Start here"
        title="Tell us about your child, and we’ll guide the next steps."
        subtitle="From your first call, we help with insurance guidance, scheduling, and the right service match—so your family feels supported from day one."
        primaryCtaLabel="Start the intake"
        primaryCtaHref="/contact"
        secondaryCtaLabel="Email us"
        secondaryCtaHref="mailto:contact@pathlighttherapy.com"
        sectionClassName="bg-gradient-to-br from-emerald-100 via-emerald-400/70 to-emerald-100"
      />
    </main>
  );
}
