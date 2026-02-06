// src/app/aba-techniques/page.tsx
import {
  BookOpen,
  Brain,
  ClipboardCheck,
  ClipboardList,
  MessageCircle,
  Sparkles,
  Target,
  ThumbsUp,
  Users,
  Wand2,
} from "lucide-react";
import Image from "next/image";

import { BentoTechniques } from "@/components/blocks/bento-techniques";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { Chip } from "@/components/ui/chip";

export const metadata = {
  title: "ABA Techniques – Pathlight Clinic",
  description:
    "Explore evidence-based ABA techniques used at Pathlight Clinic to support communication, independence, and daily living skills.",
};

type TechniqueItem = {
  technique: string;
  purpose: string;
  helps: string;
  iconKey: keyof typeof iconMap;
};

const iconMap = {
  dtt: ClipboardCheck,
  net: Wand2,
  prt: Target,
  fct: MessageCircle,
  task_analysis: ClipboardList,
  modeling: Users,
  reinforcement: ThumbsUp,
  visual_supports: BookOpen,
  self_management: Brain,
  parent_coaching: Sparkles,
};

const techniques: TechniqueItem[] = [
  {
    technique: "DTT (Discrete Trial Training)",
    purpose: "Structured, intensive, and focused trials to build skill acquisition.",
    helps:
      "Builds foundational skills like visual performance, listener-responding skills, verbal behavior, and joint attention through repetition and reinforcement.",
    iconKey: "dtt",
  },
  {
    technique: "NET (Natural Environment Teaching)",
    purpose: "Uses real-life settings to teach skills.",
    helps:
      "Helps children generalize skills including social interaction, safety skills, and daily living routines during everyday activities.",
    iconKey: "net",
  },
  {
    technique: "PRT (Pivotal Response Training)",
    purpose: "Targets key areas like motivation and self-initiation.",
    helps:
      "Supports understanding of social cues and flexibility by focusing on pivotal learning areas and behavioral cusps.",
    iconKey: "prt",
  },
  {
    technique: "FCT (Functional Communication Training)",
    purpose: "Replaces challenging behaviors with communication.",
    helps:
      "Teaches children to express needs (asking for help or a break) instead of using maladaptive behaviors like tantrums or aggression.",
    iconKey: "fct",
  },
  {
    technique: "Task Analysis",
    purpose: "Breaks complex tasks into manageable steps.",
    helps:
      "Helps children learn multi-step routines like brushing teeth or packing a backpack independently.",
    iconKey: "task_analysis",
  },
  {
    technique: "Modeling",
    purpose: "Demonstrates desired behaviors for imitation.",
    helps:
      "Encourages learning through observation, especially for peer interaction and social skills like turn-taking.",
    iconKey: "modeling",
  },
  {
    technique: "Positive Reinforcement",
    purpose: "Rewards desired behaviors to increase them.",
    helps:
      "Builds confidence and motivation by celebrating progress (e.g., “Great job putting on shoes!”).",
    iconKey: "reinforcement",
  },
  {
    technique: "Visual Supports",
    purpose: "Uses pictures, schedules, or icons to guide behavior.",
    helps: "Reduces anxiety and improves transitions by making expectations clear and predictable.",
    iconKey: "visual_supports",
  },
  {
    technique: "Self-Management Training",
    purpose: "Teaches children to monitor and regulate their own behavior.",
    helps:
      "Builds independence and emotional regulation, especially for older children or those with ADHD.",
    iconKey: "self_management",
  },
  {
    technique: "Parent Coaching & Collaboration",
    purpose: "Empowers caregivers to apply ABA strategies at home.",
    helps:
      "Ensures consistency across settings and strengthens the parent-child relationship through shared goals.",
    iconKey: "parent_coaching",
  },
];

export default function TechniquesPage() {
  return (
    <main>
      {/* Hero */}
      <Section variant="muted">
        <div className="relative">
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-primary/12 blur-3xl" />
            <div className="absolute -right-24 top-24 h-80 w-80 rounded-full bg-accent/18 blur-3xl" />
            <div className="absolute left-1/2 top-0 h-56 w-[28rem] -translate-x-1/2 rounded-full bg-muted/40 blur-3xl" />
          </div>

          <div className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:items-center">
            <div className="space-y-6">
              <SectionHeader
                eyebrow="Popular ABA techniques"
                title="Evidence-based methods that support meaningful growth."
                subtitle="Families often ask how ABA works. These techniques are a few of the tools we use to build communication, independence, and daily living skills."
                align="left"
              />

              <div className="flex flex-wrap gap-2">
                <Chip>Clear, practical skills</Chip>
                <Chip>Individualized plans</Chip>
                <Chip>Caregiver collaboration</Chip>
                <Chip>Progress you can track</Chip>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[16/11] overflow-hidden rounded-md border border-border/60 bg-card shadow-sm">
                <Image
                  src="https://images.pexels.com/photos/5435599/pexels-photo-5435599.jpeg"
                  alt="Therapist supporting a child during a learning activity"
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
                <span className="text-foreground">Tools we tailor to each child</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Content */}
      <Section>
        <div className="space-y-6 md:space-y-8">
          <BentoTechniques techniques={techniques} />

          {/* Gentle reassurance strip */}
          <div className="rounded-md border border-border/60 bg-background/60 p-6 shadow-sm backdrop-blur md:p-8">
            <div className="grid gap-6 md:grid-cols-3 md:items-start">
              <div className="space-y-2">
                <p className="text-overline">A note for families</p>
                <h3 className="text-heading-3">ABA should feel respectful and supportive.</h3>
              </div>
              <ul className="space-y-3 md:col-span-2">
                <ExpectItem title="No one-size-fits-all approach">
                  Techniques are chosen based on goals, preferences, and what works best for your
                  child.
                </ExpectItem>
                <ExpectItem title="Skills that generalize">
                  We focus on outcomes that carry into home, school, and community routines.
                </ExpectItem>
                <ExpectItem title="Caregiver collaboration">
                  You’ll understand the “why” and the “how” so support feels consistent between
                  sessions.
                </ExpectItem>
              </ul>
            </div>
          </div>
        </div>
      </Section>
    </main>
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
