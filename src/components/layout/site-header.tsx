// src/components/layout/site-header.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export interface HeaderNavLink {
  label: string;
  href: string;
}

export interface SiteHeaderProps {
  logoText: string;
  navLinks?: HeaderNavLink[];
  ctaLabel?: string;
  ctaHref?: string;
}

/**
 * Top-level site header with logo, navigation and optional CTA.
 */
export function SiteHeader({ logoText, navLinks = [], ctaLabel, ctaHref }: SiteHeaderProps) {
  const [open, setOpen] = useState(false);

  const hasCta = Boolean(ctaLabel && ctaHref);
  const hasNav = navLinks.length > 0;

  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 md:h-20 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-logo">{logoText}</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {hasNav ? (
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-body text-sm font-medium hover:text-foreground/80"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </nav>

        {/* Desktop CTA */}
        {hasCta ? (
          <div className="hidden md:block">
            <Button asChild size="sm">
              <Link href={ctaHref!}>{ctaLabel}</Link>
            </Button>
          </div>
        ) : null}

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label="Toggle navigation"
          className="inline-flex items-center justify-center rounded-md border bg-background px-2 py-2 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open ? (
        <div className="border-b bg-background md:hidden">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-3">
            {hasNav ? (
              <nav>
                <ul className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="block rounded-md px-2 py-2 text-body hover:bg-muted"
                        onClick={() => setOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ) : null}

            {hasCta ? (
              <Button asChild size="sm" className="mt-2 w-full" onClick={() => setOpen(false)}>
                <Link href={ctaHref!}>{ctaLabel}</Link>
              </Button>
            ) : null}
          </div>
        </div>
      ) : null}
    </header>
  );
}
