// src/app/page.tsx
import { ArticleGrid, type ArticleCardProps } from "@/components/blocks/article-grid";
import { FeatureGrid, type FeatureItemProps } from "@/components/blocks/feature-grid";
import { HeroCarousel, type HeroSlideProps } from "@/components/blocks/hero-carousel";
import { PrimaryCtaSection } from "@/components/blocks/primary-cta-section";
import {
  TestimonialsCarousel,
  type TestimonialItem,
} from "@/components/blocks/testimonials-carousel";

const heroSlides: HeroSlideProps[] = [
  {
    id: "hero-1",
    eyebrow: "Pathlight Clinic",
    title: "Compassionate, evidence-based ABA therapy for children.",
    subtitle:
      "At Pathlight Clinic, we provide compassionate, evidence-based ABA therapy designed around each child’s unique strengths and needs. Founded by parents who have walked this journey themselves, we remove barriers, empower families, and deliver individualized care that nurtures confidence, independence, and meaningful progress.",
    primaryCtaLabel: "Start an intake",
    primaryCtaHref: "/contact",
    secondaryCtaLabel: "Explore services",
    secondaryCtaHref: "#services",
    imageUrl: "https://images.pexels.com/photos/8618003/pexels-photo-8618003.jpeg",
    imageAlt: "Therapist supporting a child during a learning activity",
    badge: "In-home • School-based • Telehealth available",
  },
  {
    id: "hero-2",
    eyebrow: "Clinic-based services (coming soon)",
    title: "Structured support in a carefully planned environment.",
    subtitle:
      "Our clinic-based services in the Orlando area will offer individualized schedules implemented by clinical practitioners, focusing on skill acquisition, behavior reduction, and caregiver training.",
    primaryCtaLabel: "Start an intake",
    primaryCtaHref: "/contact",
    secondaryCtaLabel: "Explore services",
    secondaryCtaHref: "#services",
    imageUrl: "https://images.pexels.com/photos/3662630/pexels-photo-3662630.jpeg",
    imageAlt: "Parent and child working together at a table",
    badge: "Individualized plans • Measurable progress",
  },
  {
    id: "hero-3",
    eyebrow: "Home & community-based services",
    title: "Therapy that fits real life routines.",
    subtitle:
      "We teach functional skills in natural environments, focusing on communication, daily living, and school readiness while helping caregivers feel confident implementing strategies.",
    primaryCtaLabel: "Start an intake",
    primaryCtaHref: "/contact",
    secondaryCtaLabel: "Explore services",
    secondaryCtaHref: "#services",
    imageUrl: "https://images.pexels.com/photos/8617981/pexels-photo-8617981.jpeg",
    imageAlt: "Therapist speaking with a parent about a child's support plan",
    badge: "Parent training • School collaboration",
  },
  {
    id: "hero-4",
    eyebrow: "School & virtual services",
    title: "Consistent care across every setting.",
    subtitle:
      "Our team partners with educators and provides virtual support to keep progress moving—whether in the classroom or at home.",
    primaryCtaLabel: "Start an intake",
    primaryCtaHref: "/contact",
    secondaryCtaLabel: "Explore services",
    secondaryCtaHref: "#services",
    imageUrl: "https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg",
    imageAlt: "Family walking together outdoors",
    badge: "Neuroaffirming • Child-led • Strength-based",
  },
];

const features: FeatureItemProps[] = [
  {
    id: "feature-1",
    title: "Clinic-based services (coming soon in Orlando)",
    description:
      "Structured, individualized schedules delivered by clinical practitioners. Focused on communication, social skills, play, behavior reduction, and caregiver training—with consistency and peer interaction built in.",
  },
  {
    id: "feature-2",
    title: "Home & community-based services",
    description:
      "Natural environment teaching that builds functional communication, daily living skills, school readiness, and behavior management—helping children generalize skills in real-life settings.",
  },
  {
    id: "feature-3",
    title: "School-based services",
    description:
      "Collaboration with educators to integrate ABA strategies into the classroom, supporting verbal behavior, daily living skills, social inclusion, and IEP alignment.",
  },
  {
    id: "feature-4",
    title: "Virtual services",
    description:
      "Flexible sessions delivered via secure video platforms, focused on family guidance, caregiver training, behavior consultation, and continuity of care.",
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
  return (
    <main>
      <HeroCarousel id="home-hero" slides={heroSlides} />

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
      />

      <TestimonialsCarousel
        id="home-testimonials"
        eyebrow="Testimonials"
        title="Support that families can feel."
        subtitle="Hear from caregivers about their experiences with Pathlight Clinic’s ABA therapy services."
        testimonials={testimonials}
        alignHeader="center"
      />
    </main>
  );
}
