// src/app/with-you-all-the-way/page.tsx
import {
  CalendarCheck,
  ClipboardList,
  FileCheck2,
  HandHeart,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Image from "next/image";

import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { cn } from "@/lib/cn";

export const metadata = {
  title: "With You All the Way – Pathlight Clinic",
  description:
    "Explore Pathlight Clinic’s step-by-step care journey from intake to ongoing support.",
};

const careSteps = [
  {
    id: "step-1",
    title: "Quick Start",
    subtitle: "Enrollment & Insurance Guidance",
    description:
      "At Pathlight Clinic, we make your first steps simple and supportive. From your initial call, our team verifies your information and insurance coverage, then takes time to understand your family’s needs. This helps us match your child with the therapist who will be the best fit for your family.",
    Icon: CalendarCheck,
  },
  {
    id: "step-2",
    title: "Comprehensive Assessment",
    subtitle: "Understanding Your Child’s Unique Profile",
    description:
      "A Pathlight Clinic BCBA creates an individualized treatment plan utilizing empirical behavior assessment tools and also includes direct observations across settings and a detailed parent interview. Your insight matters. Together, we build a complete picture of your child’s strengths, challenges, and priorities.",
    Icon: ClipboardList,
  },
  {
    id: "step-3",
    title: "Child-Centered Development Plan",
    subtitle: "A Targeted Path for Growth",
    description:
      "Using the assessment results, your Pathlight BCBA designs a personalized treatment plan tailored to your child’s developmental goals. This roadmap focuses on communication, social skills, behavior support, and independence. Your BCBA guides the therapy team closely, adjusting strategies as your child grows.",
    Icon: Sparkles,
  },
  {
    id: "step-4",
    title: "Insurance Approval",
    subtitle: "Securing Coverage for Services",
    description:
      "Pathlight Clinic handles the paperwork and submits your child’s care plan for insurance authorization. Our team is experienced in navigating approvals and works diligently to minimize delays. You’ll stay informed at every step.",
    Icon: ShieldCheck,
  },
  {
    id: "step-5",
    title: "Ongoing Care",
    subtitle: "Collaborative, Compassionate Therapy",
    description:
      "Your child begins therapy with a behavior technician under the supervision of your Pathlight BCBA. We believe in partnership—your child, your family, and our team working together toward meaningful milestones. Goals are reviewed and updated regularly to reflect your child’s progress.",
    Icon: HandHeart,
  },
  {
    id: "step-6",
    title: "Streamlined Care Management",
    subtitle: "Scheduling That Fits Your Life",
    description:
      "Life is busy. That’s why Pathlight Clinic provides a dedicated care coordinator to help schedule sessions at times that work best for your family. Our goal is to make therapy accessible, consistent, and stress free.",
    Icon: FileCheck2,
  },
];

export default function WithYouAllTheWayPage() {
  return (
    <main>
      {/* Hero */}
      <Section variant="muted">
        <div className="relative">
          {/* Background glow shapes */}
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-primary/12 blur-3xl" />
            <div className="absolute -right-24 top-24 h-80 w-80 rounded-full bg-accent/18 blur-3xl" />
            <div className="absolute left-1/2 top-0 h-56 w-[28rem] -translate-x-1/2 rounded-full bg-muted/40 blur-3xl" />
          </div>

          <div className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:items-center">
            <div className="space-y-6">
              <SectionHeader
                eyebrow="With you all the way"
                title="A clear path from the first call to ongoing care."
                subtitle="We guide families through every step with compassion, clarity, and consistent support."
                align="left"
              />

              <div className="flex flex-wrap gap-2">
                <Chip>Clear next steps</Chip>
                <Chip>Insurance guidance</Chip>
                <Chip>Individualized plan</Chip>
                <Chip>Ongoing collaboration</Chip>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[16/11] overflow-hidden rounded-md border border-border/60 bg-card shadow-sm">
                <Image
                  src="https://images.pexels.com/photos/8617981/pexels-photo-8617981.jpeg"
                  alt="Therapist speaking with a parent about a child’s support plan"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 520px, 100vw"
                  priority
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-background/45 via-transparent to-transparent"
                />
              </div>

              <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-md border border-border/60 bg-background/70 px-3 py-1 text-caption shadow-sm backdrop-blur">
                <Sparkles className="h-4 w-4 text-primary/80" aria-hidden />
                <span className="text-foreground">A steady, supportive process</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Steps */}
      <Section>
        <div className="space-y-6 md:space-y-8">
          <div className="space-y-2">
            <p className="text-overline">The care journey</p>
            <h2 className="text-heading-2">What to expect, step by step.</h2>
            <p className="text-body text-muted-foreground max-w-prose">
              You’ll always know what’s happening, what’s next, and who to contact. We minimize
              barriers and keep communication simple and transparent.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {careSteps.map((step, idx) => (
              <StepCard key={step.id} step={step} index={idx} />
            ))}
          </div>

          {/* Reassurance strip */}
          <div className="rounded-md border border-border/60 bg-card/60 p-6 shadow-sm backdrop-blur md:p-8">
            <div className="grid gap-6 md:grid-cols-3 md:items-start">
              <div className="space-y-2">
                <p className="text-overline">A note for families</p>
                <h3 className="text-heading-3">You won’t have to figure it out alone.</h3>
              </div>
              <ul className="space-y-3 md:col-span-2">
                <ExpectItem title="Clear communication">
                  We explain each step in plain language and keep you updated along the way.
                </ExpectItem>
                <ExpectItem title="A plan that fits real life">
                  Scheduling support and goals designed for home, school, and community routines.
                </ExpectItem>
                <ExpectItem title="Ongoing adjustments">
                  We review progress regularly and adapt strategies as your child grows.
                </ExpectItem>
              </ul>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}

function StepCard({ step, index }: { step: (typeof careSteps)[number]; index: number }) {
  const { title, subtitle, description, Icon } = step;

  const topBar = index % 2 === 0 ? "from-primary/55 to-primary/0" : "from-accent/55 to-accent/0";

  const glow = index % 2 === 0 ? "bg-primary/10" : "bg-accent/12";

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-md border border-border/60 bg-card/60 p-5 shadow-sm backdrop-blur md:p-6",
        "transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md",
      )}
    >
      {/* Top accent bar */}
      <div aria-hidden className={cn("absolute inset-x-0 top-0 h-1 bg-gradient-to-r", topBar)} />

      {/* Decorative glow */}
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute -right-14 -bottom-14 h-44 w-44 rounded-full blur-2xl",
          glow,
        )}
      />

      <div className="flex items-start gap-4">
        {/* Number + Icon stack */}
        <div className="flex flex-col items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-md border border-border/60 bg-primary/10 text-primary shadow-sm">
            <Icon className="h-5 w-5" aria-hidden />
          </div>
          <span className="text-caption text-muted-foreground">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <div className="space-y-2">
          <p className="text-label text-muted-foreground">{title}</p>
          <h3 className="text-heading-4">{subtitle}</h3>
          <p className="text-body-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md border border-border/60 bg-background/60 px-3 py-1 text-caption text-muted-foreground shadow-sm backdrop-blur">
      {children}
    </span>
  );
}

function ExpectItem({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <span aria-hidden className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary/70" />
      <div className="space-y-1">
        <p className="text-label text-foreground">{title}</p>
        <p className="text-body-sm text-muted-foreground">{children}</p>
      </div>
    </li>
  );
}
