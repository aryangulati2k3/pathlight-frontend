// src/app/contact/page.tsx
import { ContactForm } from "@/components/contact/contact-form";
import { ContactInfoPanel } from "@/components/contact/contact-info-panel";
import { Section } from "@/components/layout/section";

export const metadata = {
  title: "Contact – Vendora Template",
  description:
    "Get in touch about projects, collaborations, or enquiries related to the Vendora Next.js template.",
};

export default function ContactPage() {
  return (
    <main>
      <Section id="contact" variant="default">
        <div className="grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:items-start">
          <ContactForm />

          <ContactInfoPanel
            addressLines={["123 Template Street", "Sector 42, New Delhi", "India"]}
            phone="+91 98765 43210"
            email="hello@vendora.example"
            officeHours={["Monday – Friday: 10:00 AM – 6:00 PM IST", "Closed on public holidays"]}
          />
        </div>
      </Section>
    </main>
  );
}
