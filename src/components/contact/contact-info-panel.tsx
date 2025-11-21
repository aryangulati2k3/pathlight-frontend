// src/components/contact/contact-info-panel.tsx
import Link from "next/link";

export interface ContactInfoPanelProps {
  title?: string;
  description?: string;
  addressLines?: string[];
  phone?: string;
  phoneLabel?: string;
  email?: string;
  emailLabel?: string;
  officeHours?: string[];
}

export function ContactInfoPanel({
  title = "Contact information",
  description = "Reach out to us for collaborations, enquiries or support.",
  addressLines,
  phone,
  phoneLabel = "Phone",
  email,
  emailLabel = "Email",
  officeHours,
}: ContactInfoPanelProps) {
  return (
    <aside className="space-y-6 rounded-md border bg-muted/40 p-6">
      <header className="space-y-1">
        <h2 className="text-heading-3">{title}</h2>
        <p className="text-muted text-sm">{description}</p>
      </header>

      {addressLines && addressLines.length > 0 ? (
        <div className="space-y-1 text-sm">
          <p className="text-label">Address</p>
          <address className="text-muted not-italic">
            {addressLines.map((line) => (
              <div key={line}>{line}</div>
            ))}
          </address>
        </div>
      ) : null}

      {phone ? (
        <div className="space-y-1 text-sm">
          <p className="text-label">{phoneLabel}</p>
          <p className="text-muted">
            <a href={`tel:${phone}`} className="text-body underline-offset-2 hover:underline">
              {phone}
            </a>
          </p>
        </div>
      ) : null}

      {email ? (
        <div className="space-y-1 text-sm">
          <p className="text-label">{emailLabel}</p>
          <p className="text-muted">
            <a href={`mailto:${email}`} className="text-body underline-offset-2 hover:underline">
              {email}
            </a>
          </p>
        </div>
      ) : null}

      {officeHours && officeHours.length > 0 ? (
        <div className="space-y-1 text-sm">
          <p className="text-label">Office hours</p>
          <ul className="text-muted space-y-0.5">
            {officeHours.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </div>
      ) : null}

      <p className="text-caption">
        Prefer email? You can also use the{" "}
        <Link href="#contact-form" className="underline underline-offset-2 hover:no-underline">
          contact form
        </Link>{" "}
        and we&apos;ll get back to you.
      </p>
    </aside>
  );
}
