// src/app/services/page.tsx
import { ServicesSection, type ServiceItem } from "@/components/blocks/services-section";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";

export const metadata = {
  title: "Services – Pathlight Clinic",
  description:
    "Explore Pathlight Clinic ABA service offerings, including clinic-based, home and community-based, school-based, and virtual services.",
};

const highlights = [
  {
    id: "h-1",
    title: "Clinic-based services (coming soon)",
    description:
      "Structured, individualized schedules implemented by clinical practitioners with opportunities for peer interaction and coordinated care.",
  },
  {
    id: "h-2",
    title: "Home & community-based services",
    description:
      "Natural environment teaching that builds functional communication, daily living skills, and school readiness in real-world settings.",
  },
  {
    id: "h-3",
    title: "School-based & virtual services",
    description:
      "Collaborative support for classroom success and flexible telehealth to keep progress moving between in-person sessions.",
  },
  {
    id: "h-4",
    title: "Virtual Services",
    description:
      "Flexible access to care via secure video platforms, focused on family guidance, caregiver training, behavior consultation, and maintaining learned skills between in-person sessions.",
  },
];

const services: ServiceItem[] = [
  {
    id: "clinic-based",
    title: "Clinic-Based Services (Soon in Orlando Area)",
    description:
      "Structured sessions in a carefully planned environment, focusing on skill acquisition (communication, social skills, play), behavior reduction, and caregiver training. Offers consistency, early intervention opportunities, and peer interaction.",
  },
  {
    id: "home-community",
    title: "Home & Community-Based Services",
    description:
      "Natural environment teaching that enhances quality of life by building functional communication, daily living and self-help skills, school readiness, and behavior management. Emphasizes generalization across real-life contexts with caregiver collaboration.",
  },
  {
    id: "school-based",
    title: "School-Based Services",
    description:
      "ABA therapists collaborate with educators to integrate strategies into the classroom, supporting verbal behavior, functional communication training, social skills, and inclusion. Promotes consistency with the child’s daily environment and IEP goals.",
  },
  {
    id: "virtual",
    title: "Virtual Services",
    description:
      "Flexible access to care via secure video platforms, focused on family guidance, caregiver training, behavior consultation, and maintaining learned skills between in-person sessions.",
  },
];

const techniques = [
  {
    technique: "DTT (Discrete Trial Training)",
    purpose: "Structured, intensive, and focused trials to build skill acquisition.",
    helps:
      "Builds foundational skills like visual performance, listener-responding skills, verbal behavior, and joint attention through repetition and reinforcement.",
  },
  {
    technique: "NET (Natural Environment Teaching)",
    purpose: "Uses real-life settings to teach skills.",
    helps:
      "Helps children generalize skills such as social interaction, safety skills, and daily living routines during everyday activities.",
  },
  {
    technique: "PRT (Pivotal Response Training)",
    purpose: "Targets key areas like motivation and self-initiation.",
    helps:
      "Supports understanding of social cues, interaction, and flexibility by focusing on pivotal learning areas and behavioral cusps.",
  },
  {
    technique: "FCT (Functional Communication Training)",
    purpose: "Replaces challenging behaviors with communication.",
    helps:
      "Teaches children to express needs (asking for help or a break) instead of using maladaptive behaviors like tantrums or aggression.",
  },
  {
    technique: "Task Analysis",
    purpose: "Breaks complex tasks into manageable steps.",
    helps:
      "Supports learning multi-step routines like brushing teeth or packing a backpack independently.",
  },
  {
    technique: "Modeling",
    purpose: "Demonstrates desired behaviors for imitation.",
    helps:
      "Encourages learning through observation, enhancing peer interaction and social skills such as orienting to speakers and turn-taking.",
  },
  {
    technique: "Positive Reinforcement",
    purpose: "Rewards desired behaviors to increase them.",
    helps:
      "Builds confidence and motivation by celebrating progress (e.g., “Great job putting on shoes!”).",
  },
  {
    technique: "Visual Supports",
    purpose: "Uses pictures, schedules, or icons to guide behavior.",
    helps: "Reduces anxiety and improves transitions by making expectations clear and predictable.",
  },
  {
    technique: "Self-Management Training",
    purpose: "Teaches children to monitor and regulate their own behavior.",
    helps:
      "Builds independence and emotional regulation, especially for older children or those with ADHD.",
  },
  {
    technique: "Parent Coaching & Collaboration",
    purpose: "Empowers caregivers to apply ABA strategies at home.",
    helps:
      "Ensures consistency across settings and strengthens the parent-child relationship through shared goals.",
  },
];

const careSteps = [
  {
    id: "step-1",
    title: "Quick Start",
    subtitle: "Enrollment & Insurance Guidance",
    description:
      "From your initial call, our team verifies information and insurance coverage, learns about your family’s needs, and matches your child with the best-fit therapist.",
  },
  {
    id: "step-2",
    title: "Comprehensive Assessment",
    subtitle: "Understanding Your Child’s Unique Profile",
    description:
      "A Pathlight BCBA completes an individualized assessment with direct observations across settings and a detailed parent interview to capture strengths, challenges, and priorities.",
  },
  {
    id: "step-3",
    title: "Child-Centered Development Plan",
    subtitle: "A Targeted Path for Growth",
    description:
      "Using assessment results, your BCBA designs a personalized treatment plan focused on communication, social skills, behavior support, and independence.",
  },
  {
    id: "step-4",
    title: "Insurance Approval",
    subtitle: "Securing Coverage for Services",
    description:
      "We handle paperwork and submit your child’s care plan for authorization, keeping you informed while minimizing delays.",
  },
  {
    id: "step-5",
    title: "Ongoing Care",
    subtitle: "Collaborative, Compassionate Therapy",
    description:
      "Your child begins therapy with a behavior technician under BCBA supervision. Goals are reviewed and updated regularly as progress continues.",
  },
  {
    id: "step-6",
    title: "Streamlined Care Management",
    subtitle: "Scheduling That Fits Your Life",
    description:
      "A dedicated care coordinator helps schedule sessions at times that work best for your family so therapy stays consistent and stress-free.",
  },
];

export default function ServicesPage() {
  return (
    <main>
      <Section variant="muted">
        <div className="space-y-8 md:space-y-10">
          <SectionHeader
            eyebrow="Services"
            title="ABA service offerings designed around your child."
            subtitle="A structured, family-centered approach delivered in clinic, at home, in school settings, and through telehealth when appropriate."
            align="left"
          />
        </div>
      </Section>

      <ServicesSection
        id="services"
        eyebrow="What we offer"
        title="Comprehensive care across every setting."
        subtitle="Each program is tailored to your child’s needs and focused on meaningful outcomes in everyday life."
        highlights={highlights}
        services={services}
      />

      <Section id="techniques" variant="muted">
        <div className="space-y-8 md:space-y-10">
          <SectionHeader
            eyebrow="Popular ABA techniques"
            title="Evidence-based methods used to support growth."
            subtitle="These strategies help families understand how ABA supports communication, independence, and daily routines."
            align="left"
          />

          <div className="overflow-x-auto rounded-md border bg-background">
            <table className="w-full border-collapse text-left text-sm md:text-base">
              <thead className="bg-muted/60 text-muted-foreground">
                <tr>
                  <th className="px-4 py-3 font-medium">Technique</th>
                  <th className="px-4 py-3 font-medium">Purpose</th>
                  <th className="px-4 py-3 font-medium">How it helps your child</th>
                </tr>
              </thead>
              <tbody>
                {techniques.map((item) => (
                  <tr key={item.technique} className="border-t">
                    <td className="px-4 py-3 font-medium text-foreground">{item.technique}</td>
                    <td className="px-4 py-3 text-muted-foreground">{item.purpose}</td>
                    <td className="px-4 py-3 text-muted-foreground">{item.helps}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      <Section id="with-you-all-the-way" variant="default">
        <div className="space-y-8 md:space-y-10">
          <SectionHeader
            eyebrow="With you all the way"
            title="A clear path from first call to ongoing care."
            subtitle="We guide families step-by-step with transparent communication and support at every stage."
            align="left"
          />

          <div className="grid gap-6 md:grid-cols-2">
            {careSteps.map((step) => (
              <div key={step.id} className="space-y-2 rounded-md border bg-card/60 p-5 shadow-sm">
                <p className="text-label text-muted-foreground">{step.title}</p>
                <h3 className="text-heading-4">{step.subtitle}</h3>
                <p className="text-body-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </main>
  );
}
