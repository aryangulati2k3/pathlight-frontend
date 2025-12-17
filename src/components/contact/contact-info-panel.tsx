// src/components/contact/contact-info-panel.tsx
import Link from "next/link";

export interface ContactInfoPanelProps {
  title?: string;
  description?: string;

  addressLines?: string[];

  phone?: string;
  phoneLabel?: string;

  fax?: string;
  faxLabel?: string;

  /**
   * If provided, renders a labeled list of emails (recommended for Pathlight).
   * Example:
   *  [{ label: "Billing & insurance", value: "billing@..." }, ...]
   */
  emails?: { label: string; value: string }[];
  emailsLabel?: string;

  /**
   * Backwards-compat: if you still pass a single email, it will render under emails.
   */
  email?: string;
  emailLabel?: string;

  officeHours?: string[];
}

export function ContactInfoPanel({
  title = "Contact information",
  description = "Reach out to us for enquiries or support.",

  addressLines,

  phone,
  phoneLabel = "Phone",

  fax,
  faxLabel = "Fax",

  emails,
  emailsLabel = "Email",

  email,
  emailLabel = "Email",

  officeHours,
}: ContactInfoPanelProps) {
  const normalizedEmails =
    emails && emails.length > 0 ? emails : email ? [{ label: emailLabel, value: email }] : [];

  return (
    <aside className="space-y-6 rounded-md border bg-muted/40 p-6">
      <header className="space-y-1">
        <h2 className="text-heading-3">{title}</h2>
        <p className="text-muted text-sm">{description}</p>
      </header>

      {addressLines && addressLines.length > 0 ? (
        <div className="space-y-1 text-sm">
          <p className="text-label">Mailing address</p>
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
            <a href={`tel:${phone}`} className="underline-offset-2 hover:underline">
              {phone}
            </a>
          </p>
        </div>
      ) : null}

      {fax ? (
        <div className="space-y-1 text-sm">
          <p className="text-label">{faxLabel}</p>
          <p className="text-muted">{fax}</p>
        </div>
      ) : null}

      {normalizedEmails.length > 0 ? (
        <div className="space-y-1 text-sm">
          <p className="text-label">{emailsLabel}</p>

          <ul className="space-y-1">
            {normalizedEmails.map((e) => (
              <li key={e.value} className="text-muted">
                <span className="text-body font-medium">{e.label}:</span>{" "}
                <a href={`mailto:${e.value}`} className="underline-offset-2 hover:underline">
                  {e.value}
                </a>
              </li>
            ))}
          </ul>
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
