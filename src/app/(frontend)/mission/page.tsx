// src/app/mission/page.tsx
import { HeartHandshake, ShieldCheck, Sparkles, Users } from "lucide-react";
import Image from "next/image";

import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { Chip } from "@/components/ui/chip";

export const metadata = {
  title: "Mission – Pathlight Therapy",
  description: "Learn about Pathlight’s mission to deliver compassionate, evidence-based ABA care.",
};

const missionParagraphs = [
  "We brighten the journey for every child with autism through evidence-based ABA delivered with warmth and respect.",
  "Every plan is individualized—built around strengths, real-life goals, and steady progress.",
  "We walk beside families with clear guidance, collaboration, and care that supports confidence and independence.",
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

              <div className="flex flex-wrap items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-sky-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-rose-300" />
                <span className="h-4 w-4 rounded-full bg-amber-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
                <div className="h-1 w-16 rounded-full bg-gradient-to-r from-sky-300 via-rose-300 to-amber-300" />
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
        <div className="space-y-10">
          {/* Main content */}
          <div className="space-y-6 text-body text-muted-foreground">
            <div className="rounded-2xl border border-white/70 bg-gradient-to-br from-sky-50 via-white to-amber-50 p-6 shadow-sm">
              <p className="text-label text-foreground">Our commitment</p>
              <div className="mt-4 space-y-4">
                {missionParagraphs.map((paragraph) => (
                  <p key={paragraph} className="max-w-prose">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  src: "https://images.pexels.com/photos/8923042/pexels-photo-8923042.jpeg",
                  alt: "Therapist and child working together on a learning activity",
                },
                {
                  src: "https://images.pexels.com/photos/3662630/pexels-photo-3662630.jpeg",
                  alt: "Parent and child practicing skills at a table",
                },
                {
                  src: "https://images.pexels.com/photos/8617981/pexels-photo-8617981.jpeg",
                  alt: "Therapist talking with a caregiver in a clinic setting",
                },
              ].map((image) => (
                <div
                  key={image.src}
                  className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/70 bg-gradient-to-br from-white via-white to-sky-50 shadow-sm"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 1024px) 320px, 100vw"
                    className="object-cover"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-transparent"
                  />
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-white/70 bg-gradient-to-br from-rose-50 via-white to-sky-50 p-5 shadow-sm">
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

            <div className="grid gap-4 md:grid-cols-2">
              {pillars.map(({ title, description, Icon }, idx) => (
                <div
                  key={title}
                  className="group relative overflow-hidden rounded-2xl border border-white/70 bg-gradient-to-br from-white via-white to-sky-50 p-5 shadow-sm transition-transform duration-200 hover:-translate-y-1"
                >
                  <div
                    aria-hidden
                    className="absolute inset-0 rounded-2xl border border-dashed border-white/60"
                  />

                  <div className="relative space-y-3">
                    <div className="flex items-center gap-3">
                      <div
                        className={
                          idx % 2 === 0
                            ? "flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-100 text-sky-600"
                            : "flex h-11 w-11 items-center justify-center rounded-2xl bg-rose-100 text-rose-600"
                        }
                      >
                        <Icon className="h-5 w-5" aria-hidden />
                      </div>
                      <p className="text-label text-foreground">{title}</p>
                    </div>
                    <p className="text-body-sm text-muted-foreground">{description}</p>
                  </div>

                  <div
                    aria-hidden
                    className={
                      idx % 2 === 0
                        ? "pointer-events-none absolute -right-12 -bottom-12 h-40 w-40 rounded-full bg-sky-100/60 blur-2xl"
                        : "pointer-events-none absolute -right-12 -bottom-12 h-40 w-40 rounded-full bg-rose-100/60 blur-2xl"
                    }
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
          <div className="space-y-4">
            <p className="text-overline">What to expect</p>
            <h2 className="text-heading-2">A thoughtful, steady experience for families.</h2>
            <p className="text-body text-muted-foreground">
              We keep goals clear and care consistent. Families receive guidance, coaching, and
              support that fits everyday life—not just the therapy session.
            </p>
            <div className="grid gap-3">
              {[
                "Clear next steps after every session",
                "Parent coaching that fits real routines",
                "Collaborative goal-setting with your care team",
                "Progress updates you can understand and use",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary/70" />
                  <p className="text-body-sm text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                src: "https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg",
                alt: "Family walking together toward a building",
              },
              {
                src: "https://images.pexels.com/photos/8466788/pexels-photo-8466788.jpeg",
                alt: "Therapist supporting a child during a learning activity",
              },
            ].map((image) => (
              <div
                key={image.src}
                className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 420px, 100vw"
                  className="object-cover"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-background/55 via-transparent to-transparent"
                />
              </div>
            ))}
          </div>
        </div>
      </Section>
    </main>
  );
}
