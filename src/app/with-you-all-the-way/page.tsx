// src/app/with-you-all-the-way/page.tsx
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";

export const metadata = {
  title: "With You All the Way – Pathlight Clinic",
  description:
    "Explore Pathlight Clinic’s step-by-step care journey from intake to ongoing support.",
};

const careSteps = [
  {
    id: "step-1",
    title: "Quick Start",
    subtitle: "Enrollment & Insurance Guidance",
    description:
      "At Pathlight Clinic, we make your first steps simple and supportive. From your initial call, our team verifies your information and insurance coverage, then takes time to understand your family’s needs. This helps us match your child with the therapist who will be the best fit for your family.",
  },
  {
    id: "step-2",
    title: "Comprehensive Assessment",
    subtitle: "Understanding Your Child’s Unique Profile",
    description:
      "A Pathlight Clinic BCBA creates an individualized treatment plan utilizing empirical behavior assessment tools and also includes direct observations across settings and a detailed parent interview. Your insight matters. Together, we build a complete picture of your child’s strengths, challenges, and priorities.",
  },
  {
    id: "step-3",
    title: "Child-Centered Development Plan",
    subtitle: "A Targeted Path for Growth",
    description:
      "Using the assessment results, your Pathlight BCBA designs a personalized treatment plan tailored to your child’s developmental goals. This roadmap focuses on communication, social skills, behavior support, and independence. Your BCBA guides the therapy team closely, adjusting strategies as your child grows.",
  },
  {
    id: "step-4",
    title: "Insurance Approval",
    subtitle: "Securing Coverage for Services",
    description:
      "Pathlight Clinic handles the paperwork and submits your child’s care plan for insurance authorization. Our team is experienced in navigating approvals and works diligently to minimize delays. You’ll stay informed at every step.",
  },
  {
    id: "step-5",
    title: "Ongoing Care",
    subtitle: "Collaborative, Compassionate Therapy",
    description:
      "Your child begins therapy with a behavior technician under the supervision of your Pathlight BCBA. We believe in partnership—your child, your family, and our team working together toward meaningful milestones. Goals are reviewed and updated regularly to reflect your child’s progress.",
  },
  {
    id: "step-6",
    title: "Streamlined Care Management",
    subtitle: "Scheduling That Fits Your Life",
    description:
      "Life is busy. That’s why Pathlight Clinic provides a dedicated care coordinator to help schedule sessions at times that work best for your family. Our goal is to make therapy accessible, consistent, and stress free.",
  },
];

export default function WithYouAllTheWayPage() {
  return (
    <main>
      <Section variant="muted">
        <div className="space-y-8 md:space-y-10">
          <SectionHeader
            eyebrow="With you all the way"
            title="A clear path from the first call to ongoing care."
            subtitle="We guide families through every step with compassion, clarity, and consistent support."
            align="left"
          />
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {careSteps.map((step) => (
            <div key={step.id} className="space-y-2 rounded-md border bg-card/60 p-5 shadow-sm">
              <p className="text-label text-muted-foreground">{step.title}</p>
              <h3 className="text-heading-4">{step.subtitle}</h3>
              <p className="text-body-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}
