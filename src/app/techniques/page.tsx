// src/app/techniques/page.tsx
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";

export const metadata = {
  title: "ABA Techniques – Pathlight Clinic",
  description:
    "Explore evidence-based ABA techniques used at Pathlight Clinic to support communication, independence, and daily living skills.",
};

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
      "Helps children generalize skills including social interaction, safety skills, and daily living routines during everyday activities.",
  },
  {
    technique: "PRT (Pivotal Response Training)",
    purpose: "Targets key areas like motivation and self-initiation.",
    helps:
      "Supports understanding of social cues and flexibility by focusing on pivotal learning areas and behavioral cusps.",
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
      "Helps children learn multi-step routines like brushing teeth or packing a backpack independently.",
  },
  {
    technique: "Modeling",
    purpose: "Demonstrates desired behaviors for imitation.",
    helps:
      "Encourages learning through observation, especially for peer interaction and social skills like turn-taking.",
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

export default function TechniquesPage() {
  return (
    <main>
      <Section variant="muted">
        <div className="space-y-8 md:space-y-10">
          <SectionHeader
            eyebrow="Popular ABA techniques"
            title="Evidence-based methods that support meaningful growth."
            subtitle="Families often ask how ABA works. These techniques are a few of the tools we use to build communication, independence, and daily living skills."
            align="left"
          />
        </div>
      </Section>

      <Section>
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
      </Section>
    </main>
  );
}
