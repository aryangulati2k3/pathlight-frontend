// src/app/mission/page.tsx
import { HeartHandshake, ShieldCheck, Sparkles, Users } from "lucide-react";
import Image from "next/image";

import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { Chip } from "@/components/ui/chip";

export const metadata = {
  title: "Mission – Pathlight Clinic",
  description:
    "Learn about Pathlight Clinic’s mission to deliver compassionate, evidence-based ABA care.",
};

const missionParagraphs = [
  "At Pathlight Clinic, our mission is to brighten the journey for every child with autism by providing evidence-based Applied Behavior Analysis (ABA) delivered with compassion, dedication, and unwavering commitment. We recognize that every child is unique, with their own strengths, challenges, and story. That is why we create individualized treatment plans—one child at a time—ensuring each program is thoughtful, comprehensive, and responsive to their needs.",
  "We are devoted to blending clinical excellence with genuine care, empowering families through open communication, education, and consistent support. Our goal extends beyond measurable progress; we strive to nurture confidence, independence, and joy throughout every stage of a child’s development.",
  "At Pathlight Clinic, we stand beside families as partners, helping them navigate the complexities of therapy and systems while keeping the child’s growth at the heart of every decision. Our purpose is simple and steadfast: to deliver high-quality ABA that honors individuality, fosters meaningful growth, and lights the way toward a brighter, more empowered future.",
];

const pillars = [
  {
    title: "Compassionate support",
    description: "Warm, respectful care that makes families feel safe and understood.",
    Icon: HeartHandshake,
  },
  {
    title: "Evidence-based practice",
    description: "Structured programs grounded in research and measurable progress.",
    Icon: ShieldCheck,
  },
  {
    title: "Family partnership",
    description: "Caregiver coaching and collaboration across home, school, and community.",
    Icon: Users,
  },
  {
    title: "Confidence & independence",
    description: "Meaningful skills that help children thrive in everyday life.",
    Icon: Sparkles,
  },
];

export default function MissionPage() {
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
                eyebrow="Mission statement"
                title="Lighting the path to every child’s potential."
                subtitle="A promise to deliver compassionate, individualized ABA care that empowers families."
                align="left"
              />

              <div className="flex flex-wrap gap-2">
                <Chip>Compassionate care</Chip>
                <Chip>Evidence-based practice</Chip>
                <Chip>Family partnership</Chip>
                <Chip>Confidence & independence</Chip>
              </div>
            </div>

            {/* Visual card */}
            <div className="relative">
              <div className="relative aspect-[16/10] overflow-hidden rounded-md border border-border/60 bg-card shadow-sm">
                <Image
                  src="https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg"
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
                <span className="text-foreground">Support that feels steady and clear</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Quote + body */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start">
          {/* Main content */}
          <div className="space-y-6 text-body text-muted-foreground">
            {missionParagraphs.map((paragraph) => (
              <p key={paragraph} className="max-w-prose">
                {paragraph}
              </p>
            ))}

            <div className="rounded-md border border-border/60 bg-background/60 p-5 shadow-sm backdrop-blur">
              <p className="text-label text-foreground">What this means for families</p>
              <p className="text-body-sm text-muted-foreground">
                We will explain each step, set practical goals, and collaborate with caregivers so
                progress carries into everyday routines—at home, in school, and in the community.
              </p>
            </div>
          </div>

          {/* Pillars */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-overline">Our pillars</p>
              <h2 className="text-heading-2">How we live the mission.</h2>
              <p className="text-body-sm text-muted-foreground">
                These principles guide how we design care, communicate, and support each family.
              </p>
            </div>

            <div className="grid gap-4">
              {pillars.map(({ title, description, Icon }, idx) => (
                <div
                  key={title}
                  className="group relative overflow-hidden rounded-md border border-border/60 bg-card/60 p-5 shadow-sm backdrop-blur transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div
                    aria-hidden
                    className={
                      idx % 2 === 0
                        ? "absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary/55 to-primary/0"
                        : "absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent/55 to-accent/0"
                    }
                  />

                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-md border border-border/60 bg-primary/10 text-primary shadow-sm">
                      <Icon className="h-5 w-5" aria-hidden />
                    </div>

                    <div className="space-y-1">
                      <p className="text-label text-foreground">{title}</p>
                      <p className="text-body-sm text-muted-foreground">{description}</p>
                    </div>
                  </div>

                  <div
                    aria-hidden
                    className={
                      idx % 2 === 0
                        ? "pointer-events-none absolute -right-12 -bottom-12 h-40 w-40 rounded-full bg-primary/10 blur-2xl"
                        : "pointer-events-none absolute -right-12 -bottom-12 h-40 w-40 rounded-full bg-accent/12 blur-2xl"
                    }
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
