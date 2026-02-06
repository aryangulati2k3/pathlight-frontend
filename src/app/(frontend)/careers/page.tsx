// src/app/careers/page.tsx
import { GraduationCap, HandHeart, Sparkles, Users } from "lucide-react";
import Image from "next/image";

import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { Chip } from "@/components/ui/chip";

export const metadata = {
  title: "Careers – Pathlight Clinic",
  description:
    "Join Pathlight Behavioral and help light the path to every child’s potential with compassionate, evidence-based ABA care.",
};

const reasons = [
  {
    title: "Make a Real Difference—One Child at a Time",
    description:
      "Every child we serve has a unique story, strengths, and journey. You’ll play a vital role in creating individualized ABA programs that honor each child’s needs and help them grow with confidence, independence, and joy.",
  },
  {
    title: "A Culture Built on Compassion and Clinical Excellence",
    description:
      "We blend evidence based ABA with genuine care. You’ll join a team that values empathy as much as expertise—where your dedication is recognized, your voice matters, and your work directly shapes a child’s future.",
  },
  {
    title: "Supportive Supervision & Mentorship",
    description:
      "Our BCBAs are committed to walking beside you, not ahead of you. You’ll receive hands on coaching, open communication, and consistent support so you can grow your skills and feel confident in your role.",
  },
  {
    title: "Training That Sets You Up for Success",
    description:
      "Whether you’re brand new to ABA or advancing your career, we provide everything you need to build mastery and confidence.",
    bullets: [
      "Comprehensive onboarding",
      "High quality RBT training and competency support",
      "Ongoing professional development",
      "Opportunities to learn, ask questions, and refine your craft",
    ],
  },
  {
    title: "A Team That Feels Like Family",
    description:
      "Families trust us to guide them through complex systems and emotional journeys. We extend that same care to our staff. You’ll join a collaborative, uplifting environment where you’re encouraged to bring your full self—and where your contributions genuinely matter.",
  },
  {
    title: "A Mission You Can Stand Behind",
    description:
      "Our purpose is simple and steadfast: deliver high quality ABA that honors individuality, fosters meaningful growth, and lights the way toward a brighter future. If that resonates with you, you’re exactly who we want on our team.",
  },
];

export default function CareersPage() {
  return (
    <main>
      <Section>
        <div className="relative overflow-hidden rounded-2xl border border-white/60 bg-white/60 p-6 shadow-sm backdrop-blur md:p-10">
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -left-16 -top-10 h-48 w-48 rounded-full bg-rose-100 blur-3xl" />
            <div className="absolute right-6 top-10 h-56 w-56 rounded-full bg-rose-200 blur-3xl" />
            <div className="absolute bottom-0 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-amber-100 blur-3xl" />
          </div>

          <div className="grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-1 text-caption text-foreground shadow-sm">
                <span className="h-2 w-2 rounded-full bg-rose-300" />
                Careers at Pathlight Clinic
              </div>

              <h1 className="text-heading-1">
                Join Us in Lighting the Path to Every Child’s Potential
              </h1>
              <p className="text-body text-muted-foreground">
                At Pathlight Clinic, your work isn’t just a job—it’s a calling. Our mission,
                “Lighting the path to every child’s potential,” guides everything we do. If you’re a
                future BT or RBT looking for a place where your impact truly matters, you’ll find
                your purpose here.
              </p>

              <div className="flex flex-wrap gap-2">
                <Chip icon={Sparkles} className="bg-white/80">
                  Mission-led care
                </Chip>
                <Chip icon={Users} className="bg-white/80">
                  Supportive supervision
                </Chip>
                <Chip icon={GraduationCap} className="bg-white/80">
                  Training & growth
                </Chip>
                <Chip icon={HandHeart} className="bg-white/80">
                  People-first culture
                </Chip>
              </div>
            </div>

            <div className="relative grid gap-4">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/70 bg-white/70 shadow-md">
                <Image
                  src="https://images.pexels.com/photos/8466788/pexels-photo-8466788.jpeg"
                  alt="Therapist supporting a child during a learning activity"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 520px, 100vw"
                  priority
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-transparent"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="space-y-8 md:space-y-10">
          <SectionHeader
            eyebrow="Why work with us"
            title="A culture built for meaningful impact."
            subtitle="We believe that meaningful progress happens when skilled professionals are supported, valued, and empowered to deliver exceptional care."
            align="left"
          />

          <div className="grid gap-5 md:grid-cols-2">
            {reasons.map(({ title, description, bullets }) => (
              <div
                key={title}
                className="group relative overflow-hidden rounded-2xl border border-rose-100 bg-white/80 p-5 shadow-sm transition-transform duration-200 hover:-translate-y-1"
              >
                <div
                  aria-hidden
                  className="absolute inset-0 rounded-2xl border border-dashed border-rose-200/70"
                />
                <div
                  aria-hidden
                  className="absolute right-4 top-4 h-2.5 w-2.5 rounded-full bg-rose-200"
                />
                <div
                  aria-hidden
                  className="absolute left-4 bottom-4 h-2.5 w-2.5 rounded-full bg-amber-200"
                />

                <div className="relative space-y-2">
                  <p className="text-label text-foreground">{title}</p>
                  <p className="text-body-sm text-muted-foreground">{description}</p>
                  {bullets ? (
                    <ul className="space-y-1 text-body-sm text-muted-foreground">
                      {bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-rose-300" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>

                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-10 -bottom-10 h-28 w-28 rounded-full bg-rose-100/70 blur-2xl"
                />
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-gradient-to-r from-rose-50 via-rose-100 to-amber-50">
        <div className="relative grid gap-8 rounded-2xl border border-white/70 bg-white/70 p-6 shadow-sm backdrop-blur md:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] md:items-center md:p-10">
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -left-8 bottom-0 h-36 w-36 rounded-full  blur-3xl" />
            <div className="absolute right-8 top-4 h-40 w-40 rounded-full blur-3xl" />
          </div>

          <div className="space-y-4">
            <p className="text-overline">Grow with us</p>
            <h2 className="text-heading-2">Grow With Us. Make an Impact. Build a Future.</h2>
            <p className="text-body text-muted-foreground">
              Pathlight Behavioral is a newly built clinic with fresh systems, modern tools, and a
              culture shaped by people—not legacy policies. You won’t be stepping into someone
              else’s outdated structure; you’ll help build best practices, shape workflows, and
              contribute to a positive environment from day one.
            </p>
            <p className="text-body-sm text-muted-foreground">
              Your ideas matter here, and your voice directly influences how our clinic grows.
            </p>
          </div>

          <div className="space-y-4 rounded-2xl border border-white/70 bg-white/80 p-6 shadow-sm">
            <p className="text-label text-foreground">What you can expect</p>
            <div className="grid gap-3">
              {[
                "Modern tools and workflows designed to reduce friction and support great care",
                "A leadership team that listens, responds, and builds alongside you",
                "A clinic community that celebrates progress—for clients and team members",
                "Room to grow into leadership, training, and specialty roles",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary/70" />
                  <p className="text-body-sm text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
