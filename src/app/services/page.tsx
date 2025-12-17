// src/app/services/page.tsx
import { ServicesSection, type ServiceItem } from "@/components/blocks/services-section";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";

export const metadata = {
  title: "Services – Pathlight Clinic",
  description:
    "Explore Pathlight Clinic ABA service offerings for children ages 2–9, including assessment, individualized plans, therapy, parent training, school collaboration, and telehealth.",
};

const highlights = [
  {
    id: "h-1",
    title: "Assessment → clear direction",
    description:
      "We start with comprehensive assessment to understand your child’s needs and define measurable, meaningful goals.",
  },
  {
    id: "h-2",
    title: "Individualized plans + therapy",
    description:
      "Programs are tailored based on evidence-based results and delivered through structured sessions that build everyday skills.",
  },
  {
    id: "h-3",
    title: "Family + school partnership",
    description:
      "Caregiver coaching and school collaboration help strategies generalize across home routines and classroom expectations.",
  },
];

const services: ServiceItem[] = [
  {
    id: "fba",
    title: "Functional Behavioral Assessment (FBA)",
    description:
      "Comprehensive assessments to identify the reasons behind challenging behaviors and develop individualized treatment plans.",
  },
  {
    id: "itp",
    title: "Individualized Treatment Plans",
    description:
      "Tailored programs based on evidence-based assessment results that address the specific needs of each child, focusing on skill development and behavior modification.",
  },
  {
    id: "one-on-one",
    title: "Direct One-on-One Therapy",
    description:
      "Individual sessions focused on socially significant goals that enhance quality of life—communication, social skills, school readiness, and daily living skills.",
  },
  {
    id: "group",
    title: "Group Therapy Sessions",
    description:
      "Group-based social learning sessions designed to strengthen communication, cooperation, and emotional awareness—building confidence and connection with peers.",
  },
  {
    id: "parent-training",
    title: "Parent Training and Support",
    description:
      "Workshops and sessions that teach ABA principles, practical behavior strategies, and ways to support skill development at home.",
  },
  {
    id: "school-prep",
    title: "School Preparedness Programs",
    description:
      "Collaboration with schools to guide implementation of ABA strategies in classrooms, supporting teachers and staff in addressing behavioral needs.",
  },
  {
    id: "bip",
    title: "Behavior Intervention Plans (BIP)",
    description:
      "Development of detailed intervention plans outlining strategies to reduce challenging behaviors and increase positive, functional alternatives.",
  },
  {
    id: "social-skills",
    title: "Social Skills Development",
    description:
      "Programs that enhance social interaction, communication, and relationship-building through structured activities and play.",
  },
  {
    id: "skill-acquisition",
    title: "Skill Acquisition Programs",
    description:
      "Focused teaching of essential skills including verbal/non-verbal communication, self-care routines, daily living skills, and functional independence.",
  },
  {
    id: "transition",
    title: "Transition Planning",
    description:
      "Personalized support for navigating new environments—starting preschool, entering elementary school, or adjusting to routine changes—helping children feel secure and ready to thrive.",
  },
  {
    id: "telehealth",
    title: "Telehealth Services",
    description:
      "Remote therapy options for families who prefer virtual sessions or need flexibility due to scheduling constraints.",
  },
];

export default function ServicesPage() {
  return (
    <main>
      <Section variant="muted">
        <div className="space-y-8 md:space-y-10">
          <SectionHeader
            eyebrow="Services"
            title="ABA service offerings for ages 2–9."
            subtitle="A structured, family-centered approach—delivered in-home, in school settings, and through telehealth when appropriate."
            align="left"
          />
        </div>
      </Section>

      <ServicesSection
        id="services"
        eyebrow="What we offer"
        title="A full range of assessment, therapy, and family support."
        subtitle="Each program is tailored to your child’s needs and focused on meaningful outcomes in everyday life."
        highlights={highlights}
        services={services}
      />
    </main>
  );
}
