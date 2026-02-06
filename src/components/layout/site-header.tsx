// src/components/layout/site-header.tsx
"use client";

import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export interface HeaderNavLink {
  label: string;
  href: string;
}

export interface HeaderNavGroup {
  heading: string;
  links: HeaderNavLink[];
}

export interface HeaderNavDropdown {
  label: string;
  groups: HeaderNavGroup[];
}

export type HeaderNavItem = HeaderNavLink | HeaderNavDropdown;

export interface SiteHeaderProps {
  logoText: string;
  navLinks?: HeaderNavItem[];
  ctaLabel?: string;
  ctaHref?: string;
}

function isDropdown(link: HeaderNavItem): link is HeaderNavDropdown {
  return "groups" in link;
}

/**
 * Top-level site header with logo, navigation and optional CTA.
 */
export function SiteHeader({ logoText, navLinks = [], ctaLabel, ctaHref }: SiteHeaderProps) {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const hasCta = Boolean(ctaLabel && ctaHref);
  const hasNav = navLinks.length > 0;

  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 md:h-20 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-logo">{logoText}</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {hasNav ? (
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => {
                if (!isDropdown(link)) {
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-body text-sm font-medium hover:text-foreground/80"
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                }

                const isOpen = activeDropdown === link.label;
                const columnClass =
                  link.groups.length > 1 ? "grid-cols-2 gap-6" : "grid-cols-1 gap-4";

                return (
                  <li
                    key={link.label}
                    className="relative"
                    onBlur={(event) => {
                      if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                        setActiveDropdown(null);
                      }
                    }}
                  >
                    <button
                      type="button"
                      className="text-body inline-flex items-center gap-1 text-sm font-medium hover:text-foreground/80"
                      aria-expanded={isOpen}
                      onClick={() =>
                        setActiveDropdown((current) => (current === link.label ? null : link.label))
                      }
                    >
                      {link.label}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    <div
                      className={`absolute left-0 top-full mt-3 min-w-[18rem] rounded-lg border bg-background shadow-lg transition duration-150 ${
                        isOpen
                          ? "pointer-events-auto translate-y-0 opacity-100"
                          : "pointer-events-none -translate-y-2 opacity-0"
                      }`}
                    >
                      <div className={`grid ${columnClass} p-4`}>
                        {link.groups.map((group) => (
                          <ul key={group.heading} className="space-y-1">
                            {group.links.map((groupLink) => (
                              <li key={groupLink.href}>
                                <Link
                                  href={groupLink.href}
                                  className="text-nav-sub block rounded-md px-2 py-1.5 hover:bg-muted"
                                >
                                  {groupLink.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        ))}
                      </div>
                    </div>
                  </li>
                );
              })}
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
                  {navLinks.map((link) => {
                    if (!isDropdown(link)) {
                      return (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            className="block rounded-md px-2 py-2 text-body hover:bg-muted"
                            onClick={() => setOpen(false)}
                          >
                            {link.label}
                          </Link>
                        </li>
                      );
                    }

                    return (
                      <li key={link.label}>
                        <details className="rounded-md border bg-background">
                          <summary className="flex cursor-pointer list-none items-center justify-between px-3 py-2 text-body font-medium">
                            {link.label}
                            <ChevronDown className="h-4 w-4" />
                          </summary>
                          <div className="space-y-3 px-3 pb-3">
                            {link.groups.map((group) => (
                              <ul key={group.heading} className="space-y-1">
                                {group.links.map((groupLink) => (
                                  <li key={groupLink.href}>
                                    <Link
                                      href={groupLink.href}
                                      className="block rounded-md px-2 py-2 text-body hover:bg-muted"
                                      onClick={() => setOpen(false)}
                                    >
                                      {groupLink.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            ))}
                          </div>
                        </details>
                      </li>
                    );
                  })}
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
