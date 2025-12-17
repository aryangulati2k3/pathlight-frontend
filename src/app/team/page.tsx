// src/app/team/page.tsx
import { TeamSection, type TeamMember } from "@/components/blocks/team-section";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";

export const metadata = {
  title: "Our Team – Pathlight Clinic",
  description:
    "Meet the Pathlight Clinic leadership team and the professionals supporting children and families through ABA services.",
};

const founders: TeamMember[] = [
  {
    id: "nisha-arora",
    name: "Nisha Arora",
    role: "Founder / Managing Director",
    bio: "Nisha Arora is a Founder and Managing Director at Pathlight Clinic with a Master’s in Applied Behavior Analysis (ABA) and over a decade of experience supporting children and families. She is passionate about creating individualized, evidence-based programs that build functional communication, independence, and confidence—while partnering closely with parents and educators to make progress sustainable across daily life.",
    // imageUrl: "/images/team/nisha.jpg",
  },
  {
    id: "himanshu-kumar",
    name: "Himanshu Kumar",
    role: "Founder / Managing Director",
    bio: "Himanshu Kumar is a Founder and Managing Director at Pathlight Clinic. He is committed to building family-centered services that are practical, compassionate, and outcomes-focused. His work emphasizes collaboration with caregivers and schools, helping children develop skills that improve everyday routines, learning readiness, and social connection.",
    // imageUrl: "/images/team/himanshu.jpg",
  },
];

const staff: TeamMember[] = [
  // Add when provided by client:
  // { id: "staff-1", name: "...", role: "...", bio: "...", imageUrl: "..." }
];

export default function TeamPage() {
  return (
    <main>
      <Section variant="muted">
        <div className="space-y-8 md:space-y-10">
          <SectionHeader
            eyebrow="Our team"
            title="People behind Pathlight Clinic."
            subtitle="We’re a family-centered team focused on compassionate, evidence-based ABA services—delivered in-home, in school settings, and through telehealth when appropriate."
            align="left"
          />
        </div>
      </Section>

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
