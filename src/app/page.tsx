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
    title: "In-home and school-based ABA therapy for ages 2–9.",
    subtitle:
      "We support neurodivergent children and their families with evidence-based therapy, clear progress pathways, and practical caregiver guidance—delivered where your child learns best.",
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
    eyebrow: "Care that meets you where you are",
    title: "Structured support that builds skills for daily life.",
    subtitle:
      "Programs focus on communication, social learning, school readiness, and independence—using individualized goals that matter to your family.",
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
    eyebrow: "Family-centered approach",
    title: "Parents are partners in every step.",
    subtitle:
      "We provide coaching and support so strategies carry over into home routines and school settings—creating consistent, meaningful progress.",
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
    eyebrow: "Compassion + evidence",
    title: "Support rooted in respect, dignity, and science.",
    subtitle:
      "We aim for calm, supportive sessions that help children feel safe while learning new skills—without losing sight of what makes each child unique.",
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
    title: "Assessment + Functional Behavior Assessment (FBA)",
    description:
      "We begin with comprehensive assessment to understand what drives challenging behaviours and how to support meaningful change with clarity and care.",
    iconName: "database",
  },
  {
    id: "feature-2",
    title: "Individualized treatment plans + 1:1 therapy",
    description:
      "Tailored programs and direct one-on-one sessions focused on communication, social skills, school readiness, and daily living skills—built around goals that matter.",
    iconName: "smartphone",
  },
  {
    id: "feature-3",
    title: "Parent training + school collaboration",
    description:
      "Practical coaching for caregivers and guidance for schools to help strategies generalize across home routines and classroom settings.",
    iconName: "palette",
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
        eyebrow="Service offerings (ages 2–9)"
        title="ABA therapy delivered at home and in school settings."
        subtitle="Pathlight Clinic provides in-home and school-based ABA services including assessment (FBA), individualized treatment plans, one-on-one therapy, parent training, school preparedness support, and more."
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
        eyebrow="Info intake"
        title="Tell us about your child, and we’ll guide the next steps."
        subtitle="Share your child’s age (2–9), key concerns, school setting, insurance/payment questions (if any), and your preferred contact method. Our team will follow up with a plan for assessment and services."
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
