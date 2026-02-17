// src/components/pages/team-page.tsx
import { HeartHandshake, MapPin, Quote, ShieldCheck, Sparkles, Users } from "lucide-react";
import Image from "next/image";

import { TeamSection, type TeamMember } from "@/components/blocks/team-section";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { Chip } from "@/components/ui/chip";
import { cn } from "@/lib/cn";

const founders: TeamMember[] = [
  {
    id: "nisha-arora",
    name: "Nisha Arora",
    role: "Founder & Managing Director",
    bio: "Nisha Arora, M.S. ABA, BCBA, brings over a decade of clinical experience and serves as the guiding force behind Pathlight’s vision. As both a behavioral practitioner and a parent, she blends deep expertise with genuine compassion—creating individualized programs that honor each child’s strengths while supporting families with evidence-based care, cultural sensitivity, and a belief that every child’s potential deserves to shine.",
    // imageUrl: "/images/team/nisha.jpg",
  },
  {
    id: "himanshu",
    name: "Himanshu",
    role: "Co-Founder & Parent Advocate",
    bio: "Himanshu brings a deeply personal understanding of the autism journey. After navigating his child’s diagnosis across two countries, he transitioned from a successful corporate career into the field of ABA, driven by a commitment to make care more accessible, compassionate, and individualized. He leads with empathy, cultural sensitivity, and a clear mission: to support each child and family toward meaningful growth and a brighter future.",
    // imageUrl: "/images/team/himanshu.jpg",
  },
];

const staff: TeamMember[] = [];

const values = [
  {
    title: "Compassionate, family-first care",
    description: "We meet families with warmth, respect, and clear next steps.",
    Icon: HeartHandshake,
  },
  {
    title: "Evidence-based, structured support",
    description: "Goals are measurable, practical, and designed for real life routines.",
    Icon: ShieldCheck,
  },
  {
    title: "Caregiver partnership",
    description: "We coach and collaborate so progress continues between sessions.",
    Icon: Users,
  },
  {
    title: "A hopeful, steady path forward",
    description: "We focus on confidence, independence, and meaningful progress over time.",
    Icon: Sparkles,
  },
];

const storyBlocks = [
  {
    title: "Where it began",
    body: "Our story began in India, when our only child was first diagnosed with autism. Resources were limited and evidence-based therapies like ABA were not widely accessible. As parents, we searched tirelessly for guidance, support, and effective interventions—a journey that taught us the importance of advocacy, education, and access to quality care.",
  },
  {
    title: "Barriers we recognized",
    body: "When we moved to the United States, we hoped the road ahead would be smoother. While more services were available, we quickly realized families still face significant barriers—long waitlists, complicated insurance processes, and multiple evaluations before therapy can begin. We experienced those challenges firsthand, navigating systems while holding onto hope for our child’s future.",
  },
  {
    title: "Family-first choices",
    body: "Along the way, we made life-changing decisions to prioritize our child’s needs. Mom stepped away from a corporate career to dedicate herself fully to the field of autism and ADHD, and Dad transitioned to working from home to be more present in our child’s growth. These choices reflect the heart of our mission: putting families first and ensuring every child receives the attention and support they deserve.",
  },
  {
    title: "Why Pathlight exists",
    body: "These experiences shaped our vision for this clinic. We set out to create a place where barriers are minimized, families feel supported from the very first conversation, and caregivers are empowered with knowledge and confidence. A place where children receive individualized, evidence-based treatment programs designed to help them thrive.",
  },
  {
    title: "Cultural sensitivity and partnership",
    body: "We also value cultural sensitivity and the diverse backgrounds families bring with them. Every child’s story is unique, and their care should reflect that individuality. By combining evidence-based practices with meaningful caregiver collaboration, families are not just involved in therapy—they are true partners in their child’s progress.",
  },
  {
    title: "A bigger vision",
    body: "At our core, we believe every child deserves timely, high-quality support, and every family deserves a trusted partner to walk alongside them. Our vision extends beyond therapy sessions. We are committed to building a future where awareness, advocacy, and accessibility are not exceptions, but expectations.",
  },
];

export function TeamPageContent() {
  return (
    <main>
      {/* Hero + story intro */}
      <Section variant="muted">
        <div className="relative">
          {/* Background glow shapes */}
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-primary/12 blur-3xl" />
            <div className="absolute -right-24 top-24 h-80 w-80 rounded-full bg-accent/18 blur-3xl" />
            <div className="absolute left-1/2 top-0 h-56 w-[28rem] -translate-x-1/2 rounded-full bg-muted/40 blur-3xl" />
          </div>

          <div className="grid gap-10 md:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] md:items-center">
            <div className="space-y-6">
              <SectionHeader
                eyebrow="Our team"
                title="People behind Pathlight Therapy."
                subtitle="We’re a family-centered team focused on compassionate, evidence-based ABA services—delivered in clinic, at home, in school settings, and through telehealth when appropriate."
                align="left"
              />

              <div className="flex flex-wrap gap-2">
                <Chip icon={MapPin}>Orlando area • Services expanding</Chip>
                <Chip icon={HeartHandshake}>Family-first</Chip>
                <Chip icon={ShieldCheck}>Evidence-based</Chip>
                <Chip icon={Users}>Caregiver partnership</Chip>
              </div>
            </div>

            {/* Visual card (image + overlay) */}
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

              {/* Corner badge */}
              <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-md border border-border/60 bg-background/70 px-3 py-1 text-caption shadow-sm backdrop-blur">
                <Sparkles className="h-4 w-4 text-primary/80" aria-hidden />
                <span className="text-foreground">Child-led • Strength-based • Supportive</span>
              </div>
            </div>
          </div>

          {/* Values strip */}
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {values.map(({ title, description, Icon }) => (
              <div
                key={title}
                className="relative overflow-hidden rounded-md border border-border/60 bg-card/60 p-5 shadow-sm backdrop-blur"
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

                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/14 blur-2xl"
                />
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Story + Mission side-by-side (more scannable, less “wall of text”) */}
      <Section>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-start">
          {/* Story cards */}
          <div className="space-y-5">
            <div className="space-y-2">
              <p className="text-overline">Our story</p>
              <h2 className="text-heading-2">Built from experience, shaped by care.</h2>
              <p className="text-body text-muted-foreground max-w-prose">
                We know what it feels like to wait, to navigate systems, and to fight for support.
                Pathlight exists to make that journey calmer and clearer.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {storyBlocks.map((item, idx) => (
                <div
                  key={item.title}
                  className="group relative overflow-hidden rounded-md border border-border/60 bg-card/60 p-5 shadow-sm backdrop-blur transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md"
                >
                  {/* Tiny top bar with varied emphasis */}
                  <div
                    aria-hidden
                    className={cn(
                      "absolute inset-x-0 top-0 h-1 bg-gradient-to-r",
                      idx % 2 === 0 ? "from-primary/55 to-primary/0" : "from-accent/55 to-accent/0",
                    )}
                  />

                  <h3 className="text-heading-4">{item.title}</h3>
                  <p className="text-body-sm text-muted-foreground">{item.body}</p>

                  <div
                    aria-hidden
                    className={cn(
                      "pointer-events-none absolute -right-12 -bottom-12 h-40 w-40 rounded-full blur-2xl",
                      idx % 2 === 0 ? "bg-primary/10" : "bg-accent/12",
                    )}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Mission statement (rich card) */}
          <div className="sticky top-6">
            <div className="relative overflow-hidden rounded-md border border-border/60 bg-card/60 p-6 shadow-sm backdrop-blur md:p-7">
              {/* Decorative background */}
              <div aria-hidden className="pointer-events-none absolute inset-0">
                <div className="absolute -left-16 -top-16 h-56 w-56 rounded-full bg-primary/12 blur-3xl" />
                <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-accent/16 blur-3xl" />
              </div>

              <div className="relative space-y-4">
                <p className="text-overline">Mission statement</p>

                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-md border border-border/60 bg-accent/18 text-foreground shadow-sm">
                    <Quote className="h-5 w-5" aria-hidden />
                  </div>
                  <blockquote className="text-heading-3 text-foreground">
                    “Lighting the path to every child’s potential”
                  </blockquote>
                </div>

                <div className="space-y-3 text-body-sm text-muted-foreground">
                  <p>
                    At Pathlight, our mission is to brighten the journey for every child with autism
                    by providing evidence-based Applied Behavior Analysis (ABA) delivered with
                    compassion, dedication, and unwavering commitment.
                  </p>
                  <p>
                    We blend clinical excellence with genuine care, empowering families through open
                    communication, education, and consistent support. Our goal extends beyond
                    measurable progress; we strive to nurture confidence, independence, and joy
                    throughout every stage of a child’s development.
                  </p>
                  <p>
                    Our purpose is simple and steadfast: to deliver high-quality ABA that honors
                    individuality, fosters meaningful growth, and lights the way toward a brighter,
                    more empowered future.
                  </p>
                </div>

                <div className="mt-5 rounded-md border border-border/60 bg-background/60 p-4">
                  <p className="text-label">What this means in practice</p>
                  <p className="text-body-sm text-muted-foreground">
                    Clear goals, caregiver coaching, and respectful collaboration—so families feel
                    supported and children feel understood.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Keep your team section as-is */}
      <TeamSection
        id="team"
        eyebrow="Leadership & staff"
        title="Meet our leadership team."
        subtitle="More staff profiles will be added as they are finalized."
        founders={founders}
        staff={staff}
      />
    </main>
  );
}
