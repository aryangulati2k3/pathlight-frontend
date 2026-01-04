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
    role: "Founder & Managing Director",
    bio: "Nisha Arora, M.S. ABA, BCBA, brings over a decade of clinical experience and serves as the guiding force behind Pathlight Clinic’s vision. As both a behavioral practitioner and a parent, she blends deep expertise with genuine compassion—creating individualized programs that honor each child’s strengths while supporting families with evidence-based care, cultural sensitivity, and a belief that every child’s potential deserves to shine.",
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
            subtitle="We’re a family-centered team focused on compassionate, evidence-based ABA services—delivered in clinic, at home, in school settings, and through telehealth when appropriate."
            align="left"
          />

          <div className="space-y-6 text-body text-muted-foreground">
            <div className="space-y-3">
              <h2 className="text-heading-4 text-foreground">About us</h2>
              <p>
                Our story began in India, when our only child was first diagnosed with autism.
                Resources were limited and evidence-based therapies like ABA were not widely
                accessible. As parents, we searched tirelessly for guidance, support, and effective
                interventions—a journey that taught us the importance of advocacy, education, and
                access to quality care.
              </p>
              <p>
                When we moved to the United States, we hoped the road ahead would be smoother. While
                more services were available, we quickly realized families still face significant
                barriers—long waitlists, complicated insurance processes, and multiple evaluations
                before therapy can begin. We experienced those challenges firsthand, navigating
                systems while holding onto hope for our child’s future.
              </p>
              <p>
                Along the way, we made life-changing decisions to prioritize our child’s needs. Mom
                stepped away from a corporate career to dedicate herself fully to the field of
                autism and ADHD, and Dad transitioned to working from home to be more present in our
                child’s growth. These choices reflect the heart of our mission: putting families
                first and ensuring every child receives the attention and support they deserve.
              </p>
              <p>
                These experiences shaped our vision for this clinic. We set out to create a place
                where barriers are minimized, families feel supported from the very first
                conversation, and caregivers are empowered with knowledge and confidence. A place
                where children receive individualized, evidence-based treatment programs designed to
                help them thrive.
              </p>
              <p>
                We also value cultural sensitivity and the diverse backgrounds families bring with
                them. Every child’s story is unique, and their care should reflect that
                individuality. By combining evidence-based practices with meaningful caregiver
                collaboration, families are not just involved in therapy—they are true partners in
                their child’s progress.
              </p>
              <p>
                At our core, we believe every child deserves timely, high-quality support, and every
                family deserves a trusted partner to walk alongside them. Our vision extends beyond
                therapy sessions. We are committed to building a future where awareness, advocacy,
                and accessibility are not exceptions, but expectations.
              </p>
            </div>

            <div className="space-y-3 rounded-md border border-muted-foreground/20 bg-background/70 p-5">
              <h2 className="text-heading-4 text-foreground">Mission statement</h2>
              <blockquote className="text-heading-3 text-foreground">
                “Lighting the path to every child’s potential”
              </blockquote>
              <p>
                At Pathlight Clinic, our mission is to brighten the journey for every child with
                autism by providing evidence-based Applied Behavior Analysis (ABA) delivered with
                compassion, dedication, and unwavering commitment. We recognize that every child is
                unique, which is why we create individualized treatment plans—one child at a
                time—ensuring each program is thoughtful, comprehensive, and responsive to their
                needs.
              </p>
              <p>
                We blend clinical excellence with genuine care, empowering families through open
                communication, education, and consistent support. Our goal extends beyond measurable
                progress; we strive to nurture confidence, independence, and joy throughout every
                stage of a child’s development. We stand beside families as partners, helping them
                navigate the complexities of therapy while keeping the child’s growth at the heart
                of every decision.
              </p>
              <p>
                Our purpose is simple and steadfast: to deliver high-quality ABA that honors
                individuality, fosters meaningful growth, and lights the way toward a brighter, more
                empowered future.
              </p>
            </div>
          </div>
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
