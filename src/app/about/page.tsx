// src/app/about/page.tsx
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";

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

export default function AboutPage() {
  return (
    <main>
      <Section variant="muted">
        <div className="space-y-8 md:space-y-10">
          <SectionHeader
            eyebrow="About us"
            title="A clinic built by parents, guided by compassion."
            subtitle="We created Pathlight Clinic to remove barriers, empower families, and deliver individualized ABA care that honors every child’s unique strengths."
            align="left"
          />
        </div>
      </Section>

      <Section>
        <div className="space-y-6 text-body text-muted-foreground">
          {storyParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Section>
    </main>
  );
}
