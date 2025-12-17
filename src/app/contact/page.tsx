// src/app/contact/page.tsx
import { ContactForm } from "@/components/contact/contact-form";
import { ContactInfoPanel } from "@/components/contact/contact-info-panel";
import { Section } from "@/components/layout/section";

export const metadata = {
  title: "Contact – Pathlight Clinic",
  description:
    "Contact Pathlight Clinic for ABA therapy enquiries, insurance questions, and client support.",
};

export default function ContactPage() {
  return (
    <main>
      <Section id="contact" variant="default">
        <div className="grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:items-start">
          <ContactForm />

          <ContactInfoPanel
            title="Get in touch"
            description="We’re here to answer questions and guide you through next steps."
            addressLines={["479 Montgomery Place", "Altamonte Springs, FL 32714"]}
            phone="(407) 942-8294"
            fax="(407) 942-8292"
            emails={[
              {
                label: "General Enquiries",
                value: "info@pathlighttherapy.com",
              },
              {
                label: "Billing & Insurance",
                value: "billing@pathlighttherapy.com",
              },
              {
                label: "Client & Tech Support",
                value: "support@pathlighttherapy.com",
              },
            ]}
            officeHours={["Coming soon", "In-home and school-based therapy"]}
          />
        </div>
      </Section>
    </main>
  );
}
