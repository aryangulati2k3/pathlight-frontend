// src/components/layout/site-footer.tsx
import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  heading: string;
  links: FooterLink[];
}

export interface SiteFooterProps {
  brandName: string;
  copyrightText?: string;
  columns?: FooterColumn[];
  email?: string;
  socials?: {
    github?: string;
    instagram?: string;
    linkedin?: string;
  };
}

/**
 * Site footer with link columns and basic contact/social info.
 */
export function SiteFooter({
  brandName,
  copyrightText,
  columns = [],
  email,
  socials,
}: SiteFooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="mx-auto w-full max-w-7xl px-4 py-10 md:px-6 md:py-12">
        <div className="grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,2fr)]">
          {/* Brand + contact */}
          <div className="space-y-4">
            <div>
              <div className="text-logo">{brandName}</div>
              <p className="text-muted mt-2 max-w-sm text-sm">
                A modern web presence built for clarity, performance and long-term maintainability.
              </p>
            </div>

            <div className="space-y-2 text-sm">
              {email ? (
                <p className="text-muted">
                  <span className="font-medium">Email:</span>{" "}
                  <a
                    href={`mailto:${email}`}
                    className="text-body underline-offset-2 hover:underline"
                  >
                    {email}
                  </a>
                </p>
              ) : null}
            </div>

            {/* Socials */}
            {socials ? (
              <div className="flex items-center gap-3">
                {socials.github ? (
                  <a
                    href={socials.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    className="rounded-md border bg-background p-2 hover:bg-muted"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                ) : null}
                {socials.linkedin ? (
                  <a
                    href={socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="rounded-md border bg-background p-2 hover:bg-muted"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                ) : null}
                {socials.instagram ? (
                  <a
                    href={socials.instagram}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    className="rounded-md border bg-background p-2 hover:bg-muted"
                  >
                    <Instagram className="h-4 w-4" />
                  </a>
                ) : null}
                {email ? (
                  <a
                    href={`mailto:${email}`}
                    aria-label="Email"
                    className="rounded-md border bg-background p-2 hover:bg-muted"
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                ) : null}
              </div>
            ) : null}
          </div>

          {/* Link columns */}
          {columns.length ? (
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
              {columns.map((col) => (
                <div key={col.heading} className="space-y-3">
                  <h3 className="text-heading-4">{col.heading}</h3>
                  <ul className="space-y-2 text-sm">
                    {col.links.map((link) => (
                      <li key={link.href}>
                        <Link href={link.href} className="text-muted hover:text-foreground">
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : null}
        </div>

        <div className="mt-8 border-t pt-4 text-xs text-muted-foreground md:mt-10 md:flex md items-center md:justify-between">
          <p>{copyrightText ?? `© ${year} ${brandName}. All rights reserved.`}</p>
        </div>
      </div>
    </footer>
  );
}
