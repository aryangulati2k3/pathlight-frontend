// src/app/page.tsx
import { ArticleGrid, type ArticleCardProps } from "@/components/blocks/article-grid";
import { FeatureGrid, type FeatureItemProps } from "@/components/blocks/feature-grid";
import { HeroCarousel, type HeroSlideProps } from "@/components/blocks/hero-carousel";
import { PrimaryCtaSection } from "@/components/blocks/primary-cta-section";

const heroSlides: HeroSlideProps[] = [
  {
    id: "hero-1",
    eyebrow: "Welcome",
    title: "Bring your brand story to life.",
    subtitle:
      "A modern, fast, and maintainable website for your organisation, built for long-term growth.",
    primaryCtaLabel: "Get in touch",
    primaryCtaHref: "/contact",
    secondaryCtaLabel: "View offerings",
    secondaryCtaHref: "#services",
    imageUrl: "https://images.pexels.com/photos/631477/pexels-photo-631477.jpeg",
    imageAlt: "Calm landscape",
    badge: "Now accepting projects",
  },
];

const features: FeatureItemProps[] = [
  {
    id: "feature-1",
    title: "CMS-ready components",
    description: "All sections are driven by props so you can plug any content source in later.",
    iconName: "database",
  },
  {
    id: "feature-2",
    title: "Responsive by design",
    description: "Optimised layouts for mobile, tablet, and desktop with consistent typography.",
    iconName: "smartphone",
  },
  {
    id: "feature-3",
    title: "Brand-consistent UI",
    description:
      "Typography and components tailored to your brand guidelines, not generic templates.",
    iconName: "palette",
  },
];

const articles: ArticleCardProps[] = [
  {
    href: "/publications/spirit-of-seva",
    title: "The Spirit of Seva: Practicing Selfless Service",
    excerpt:
      "Exploring how small, consistent acts of service transform both the giver and the receiver.",
    category: "Wisdom",
    date: "12 Nov 2025",
    imageUrl: "https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg",
    imageAlt: "Person meditating near mountains",
  },
  {
    href: "/publications/satsang-and-everyday-life",
    title: "Satsang and Everyday Life: Habits that Anchor the Mind",
    excerpt: "Building a daily rhythm that keeps the mind anchored amidst modern distractions.",
    category: "Practice",
    date: "01 Nov 2025",
    imageUrl: "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg",
    imageAlt: "Group gathering outdoors",
  },
  {
    href: "/publications/living-tradition",
    title: "Living Tradition in a Digital Age",
    excerpt: "How to translate timeless principles into modern interfaces and experiences.",
    category: "Design",
    date: "25 Oct 2025",
    imageUrl: "https://images.pexels.com/photos/356830/pexels-photo-356830.jpeg",
    imageAlt: "City skyline at dusk",
  },
];

export default function HomePage() {
  return (
    <main>
      <HeroCarousel id="home-hero" slides={heroSlides} />

      <FeatureGrid
        id="home-services"
        eyebrow="What we offer"
        title="Designed for clarity and trust."
        subtitle="Structured content, consistent typography, and a digital presence that respects your brand."
        alignHeader="center"
        features={features}
      />

      <ArticleGrid
        id="home-articles"
        eyebrow="Latest writings"
        title="Recent articles and reflections"
        subtitle="Handpicked content that represents the core of the work."
        articles={articles}
      />

      <PrimaryCtaSection
        id="home-primary-cta"
        eyebrow="Ready to begin?"
        title="Let’s plan your next iteration."
        subtitle="Share your requirements and timelines, and we will get back with a structured roadmap."
        primaryCtaLabel="Contact us"
        primaryCtaHref="/contact"
        secondaryCtaLabel="View case studies"
        secondaryCtaHref="/work"
      />
    </main>
  );
}
