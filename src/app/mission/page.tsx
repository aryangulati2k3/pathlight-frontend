// src/app/mission/page.tsx
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";

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

export default function MissionPage() {
  return (
    <main>
      <Section variant="muted">
        <div className="space-y-8 md:space-y-10">
          <SectionHeader
            eyebrow="Mission statement"
            title="Lighting the path to every child’s potential."
            subtitle="A promise to deliver compassionate, individualized ABA care that empowers families."
            align="left"
          />
        </div>
      </Section>

      <Section>
        <div className="space-y-6 text-body text-muted-foreground">
          <blockquote className="rounded-md border border-muted-foreground/20 bg-muted/40 px-5 py-4 text-heading-4 text-foreground">
            “Lighting the path to every child’s potential”
          </blockquote>
          {missionParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Section>
    </main>
  );
}
