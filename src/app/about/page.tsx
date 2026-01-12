// src/app/about/page.tsx
import { HeartHandshake, ShieldCheck, Sparkles, Users } from "lucide-react";
import Image from "next/image";

import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { Chip } from "@/components/ui/chip";

export const metadata = {
  title: "About Us – Pathlight Clinic",
  description:
    "Learn about Pathlight Clinic’s origins, values, and commitment to compassionate, evidence-based ABA care.",
};

const storyParagraphs = [
  "Our story began in India, when our only child was first diagnosed with autism. At the time, resources were limited and evidence-based therapies like ABA were not widely accessible. As parents, we searched tirelessly for guidance, support, and effective interventions. That journey taught us the profound importance of advocacy, education, and access to quality care.",
  "When we moved to the United States, we hoped the road ahead would be smoother. While more services were available, we quickly realized that families still face significant barriers—long waitlists, complicated insurance processes, and multiple evaluations before therapy can even begin. We experienced those challenges firsthand: navigating healthcare systems, learning to advocate, and pushing through delays while holding onto hope for our child’s future.",
  "Along the way, we made life-changing decisions to prioritize our child’s needs. Mom stepped away from a promising corporate career to dedicate herself fully to the field of autism and ADHD. Dad transitioned to working from home to be more present and engaged in our child’s growth. These choices reflect the heart of our mission: putting families first and ensuring that every child receives the attention and support they deserve.",
  "These experiences shaped our vision for this clinic. We set out to create a place where barriers are minimized, where families feel supported from the very first conversation, and where caregivers are empowered with knowledge and confidence. A place where children receive individualized, evidence-based treatment programs designed to help them thrive.",
  "Our clinic was built from both personal experience and professional dedication. We understand the emotional weight of waiting, the frustration of paperwork, and the resilience it takes to keep moving forward. That is why we are committed to providing care that is compassionate, transparent, and accessible.",
  "We also value cultural sensitivity, and the diverse backgrounds families bring with them. Every child’s story is unique, and their care should reflect that individuality. By combining evidence-based practices with meaningful caregiver collaboration, we ensure families are not just involved in therapy—they are true partners in their child’s progress.",
  "At our core, we believe every child deserves timely, high-quality support, and every family deserves a trusted partner to walk alongside them. Our vision extends beyond therapy sessions. We are committed to building a future where awareness, advocacy, and accessibility are not exceptions, but expectations.",
];

const timeline = [
  {
    title: "A diagnosis, and a search for answers",
    body: "We began as parents navigating autism support with limited resources. It shaped our belief that families deserve clarity, compassion, and practical guidance.",
  },
  {
    title: "New country, familiar barriers",
    body: "Even with more services available, we still faced waitlists, insurance complexity, and delays. We built Pathlight to reduce friction from day one.",
  },
  {
    title: "Family-first choices",
    body: "We reshaped our careers and routines around our child’s needs—because the work has to fit real life, not just clinic hours.",
  },
  {
    title: "A clinic designed to support the whole family",
    body: "We focus on individualized plans, caregiver coaching, and progress you can feel—without losing warmth or dignity in the process.",
  },
];

const values = [
  {
    title: "Compassion without guesswork",
    description:
      "Warm, respectful care paired with clear goals and measurable progress—so families feel supported and informed.",
    Icon: HeartHandshake,
  },
  {
    title: "Evidence-based, child-led",
    description:
      "We use research-backed methods while honoring each child’s strengths, autonomy, and pace.",
    Icon: ShieldCheck,
  },
  {
    title: "Caregiver partnership",
    description:
      "We coach and collaborate so progress continues between sessions, at home, and in the community.",
    Icon: Users,
  },
  {
    title: "Lower barriers, faster clarity",
    description:
      "We help families navigate next steps—intake, scheduling, and practical expectations—without overwhelming complexity.",
    Icon: Sparkles,
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <Section variant="muted">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:items-center">
          <div className="space-y-6">
            <SectionHeader
              eyebrow="About us"
              title="A clinic built by parents, guided by compassion."
              subtitle="We created Pathlight Clinic to remove barriers, empower families, and deliver individualized ABA care that honors every child’s unique strengths."
              align="left"
            />

            {/* A small, human reassurance strip */}
            <div className="flex flex-wrap gap-2">
              <Chip>Family-first</Chip>
              <Chip>Clear next steps</Chip>
              <Chip>Strength-based care</Chip>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[16/11] overflow-hidden rounded-md border border-border/60 bg-card shadow-sm">
              <Image
                src="https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg"
                alt="A family walking together outdoors"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 520px, 100vw"
                priority
              />
              {/* Warm overlay */}
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-background/45 via-transparent to-transparent"
              />
            </div>

            {/* Soft glow behind image */}
            <div aria-hidden className="pointer-events-none absolute -inset-10 -z-10">
              <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-primary/12 blur-3xl" />
              <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-accent/18 blur-3xl" />
            </div>
          </div>
        </div>
      </Section>

      {/* Story: Timeline + body */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div className="space-y-6">
            <h2 className="text-heading-2">Our story, in a few moments</h2>
            <p className="text-body text-muted-foreground">
              This clinic was shaped by lived experience and sustained by professional dedication.
              We know how heavy waiting can feel—and how powerful it is to finally have a plan.
            </p>

            <ol className="space-y-4">
              {timeline.map((item, idx) => (
                <li key={item.title} className="relative pl-10">
                  {/* Line */}
                  <span
                    aria-hidden
                    className="absolute left-[0.9rem] top-0 h-full w-px bg-border/70"
                  />
                  {/* Dot */}
                  <span
                    aria-hidden
                    className="absolute left-2 top-1.5 h-4 w-4 rounded-full border border-border/70 bg-primary/20"
                  />
                  <div className="rounded-md border border-border/60 bg-card/60 p-4 shadow-sm backdrop-blur">
                    <p className="text-label">{`${idx + 1}. ${item.title}`}</p>
                    <p className="text-body-sm text-muted-foreground">{item.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="space-y-6 text-body text-muted-foreground">
            {storyParagraphs.map((paragraph) => (
              <p key={paragraph} className="max-w-prose">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section variant="muted">
        <div className="space-y-8 md:space-y-10">
          <SectionHeader
            eyebrow="What we value"
            title="Care that feels human, structured, and supportive."
            subtitle="Families deserve clarity and compassion at the same time. We aim to deliver both—consistently."
            align="left"
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map(({ title, description, Icon }) => (
              <div
                key={title}
                className="relative overflow-hidden rounded-md border border-border/60 bg-card/60 p-5 shadow-sm backdrop-blur md:p-6"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-md border border-border/60 bg-primary/10 text-primary shadow-sm">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-heading-4">{title}</h3>
                    <p className="text-body-sm text-muted-foreground">{description}</p>
                  </div>
                </div>

                {/* Decorative shapes */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/14 blur-2xl"
                />
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Expectations / reassurance strip */}
      <Section>
        <div className="rounded-md border border-border/60 bg-card/60 p-6 shadow-sm backdrop-blur md:p-8">
          <div className="grid gap-6 md:grid-cols-3 md:items-start">
            <div>
              <p className="text-overline">What families can expect</p>
              <h2 className="text-heading-3 mt-2">A calmer start, and a clearer plan.</h2>
            </div>

            <ul className="space-y-3 md:col-span-2">
              <ExpectItem title="A warm first conversation">
                We’ll listen first, ask clear questions, and explain what comes next in plain
                language.
              </ExpectItem>
              <ExpectItem title="Support beyond sessions">
                Caregiver coaching and practical strategies so progress carries into daily routines.
              </ExpectItem>
              <ExpectItem title="Transparency and respect">
                Clear goals, measurable progress, and a partnership that honors your child and your
                family.
              </ExpectItem>
            </ul>
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
        <p className="text-label">{title}</p>
        <p className="text-body-sm text-muted-foreground">{children}</p>
      </div>
    </li>
  );
}
