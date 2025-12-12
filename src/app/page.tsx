// src/app/page.tsx
import { ArticleGrid, type ArticleCardProps } from "@/components/blocks/article-grid";
import { FeatureGrid, type FeatureItemProps } from "@/components/blocks/feature-grid";
import { HeroCarousel, type HeroSlideProps } from "@/components/blocks/hero-carousel";
import { PrimaryCtaSection } from "@/components/blocks/primary-cta-section";

const heroSlides: HeroSlideProps[] = [
  {
    id: "hero-1",
    eyebrow: "Pathlight Clinic",
    title: "Structured support for neurodivergent children and their families.",
    subtitle:
      "Pathlight Clinic provides ABA therapy for children, early intervention, and autism support—helping families navigate behaviour, learning, and daily life with confidence.",
    primaryCtaLabel: "Book a consultation",
    primaryCtaHref: "/contact",
    secondaryCtaLabel: "Learn about our approach",
    secondaryCtaHref: "#services",
    imageUrl: "https://images.pexels.com/photos/8618003/pexels-photo-8618003.jpeg",
    imageAlt: "Therapist supporting a child in a calm clinic environment",
    badge: "Specialised ABA therapy & early intervention",
  },
];

const features: FeatureItemProps[] = [
  {
    id: "feature-1",
    title: "Evidence-based ABA therapy for children",
    description:
      "Individualised Applied Behavior Analysis (ABA) programmes focused on communication, daily living, social skills, and behaviour support for neurodivergent children.",
    iconName: "database", // you can swap this to a more appropriate icon later
  },
  {
    id: "feature-2",
    title: "Early intervention & assessment",
    description:
      "Support for families seeking early intervention, screenings, and structured behavioural therapy near them—so children can receive help at the most impactful stages.",
    iconName: "smartphone",
  },
  {
    id: "feature-3",
    title: "Parent-focused guidance & resources",
    description:
      "A parent resource hub with introductory guides like “ABA Basics” and “Navigating Early Intervention” to help caregivers understand options and next steps.",
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

export default function HomePage() {
  return (
    <main>
      <HeroCarousel id="home-hero" slides={heroSlides} />

      <FeatureGrid
        id="home-services"
        eyebrow="Support for your child"
        title="ABA therapy, early intervention, and parent guidance in one clinic."
        subtitle="Pathlight Clinic focuses on early intervention, autism support, and evidence-based behavioural therapy, with clear pathways for parents to seek help and ask questions."
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
        id="home-primary-cta"
        eyebrow="Next step"
        title="Tell us about your child, and we’ll help you plan the way forward."
        subtitle="Use the contact form to share your child’s age, key concerns, and preferred contact method. The Pathlight Clinic team will reach out with suggested next steps."
        primaryCtaLabel="Submit an enquiry"
        primaryCtaHref="/contact"
        secondaryCtaLabel="Explore parent resources"
        secondaryCtaHref="/resources"
      />
    </main>
  );
}
