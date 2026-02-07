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

          <div className="flex flex-wrap items-center gap-3">
            <span className="h-3 w-3 rounded-full bg-sky-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-rose-300" />
            <span className="h-4 w-4 rounded-full bg-amber-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
            <div className="h-1 w-16 rounded-full bg-gradient-to-r from-sky-300 via-rose-300 to-amber-300" />
          </div>
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

      <Section id="with-you-all-the-way" variant="default">
        <div className="relative space-y-8 md:space-y-10">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-10 right-0 h-28 w-28 rounded-full bg-rose-100/70 blur-2xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-12 left-8 h-36 w-36 rounded-full bg-sky-100/70 blur-3xl"
          />

          <SectionHeader
            eyebrow="With you all the way"
            title="A clear path from first call to ongoing care."
            subtitle="We guide families step-by-step with transparent communication and support at every stage."
            align="left"
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {careSteps.map((step, idx) => (
              <div
                key={step.id}
                className="group relative overflow-hidden rounded-2xl border border-white/70 bg-gradient-to-br from-white via-white to-amber-50 p-5 shadow-sm"
              >
                <div
                  aria-hidden
                  className={
                    idx % 2 === 0
                      ? "pointer-events-none absolute -right-12 -bottom-12 h-40 w-40 rounded-full bg-sky-100/60 blur-2xl"
                      : "pointer-events-none absolute -right-12 -bottom-12 h-40 w-40 rounded-full bg-rose-100/60 blur-2xl"
                  }
                />
                <div className="relative space-y-2">
                  <p className="text-label text-muted-foreground">{step.title}</p>
                  <h3 className="text-heading-4">{step.subtitle}</h3>
                  <p className="text-body-sm text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </main>
  );
}
