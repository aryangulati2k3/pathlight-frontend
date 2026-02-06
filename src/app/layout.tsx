// src/app/layout.tsx
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Fraunces, Lexend } from "next/font/google";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

const fontSans = Lexend({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fontDisplay = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    groups: [
      {
        heading: "About Us",
        links: [{ label: "Mission", href: "/mission" }],
      },
    ],
  },
  { label: "Services", href: "/services" },
  {
    label: "Parents' Resources",
    groups: [
      {
        heading: "Parents' Resources",
        links: [
          { label: "ABA Techniques", href: "/techniques" },
          { label: "With You All the Way", href: "/with-you-all-the-way" },
        ],
      },
    ],
  },
];

const footerColumns = [
  {
    heading: "Explore",
    links: [
      { label: "Home", href: "/" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    heading: "Services & Care",
    links: [
      { label: "Services", href: "/services" },
      { label: "With You All the Way", href: "/with-you-all-the-way" },
    ],
  },
  {
    heading: "Our Approach",
    links: [
      { label: "Mission", href: "/mission" },
      { label: "ABA Techniques", href: "/techniques" },
    ],
  },
];

export const metadata: Metadata = {
  title: "Pathlight Clinic",
  description: "Structured support for neurodivergent children and their families.",
  appleWebApp: {
    title: "Pathlight Clinic",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontSans.variable} ${fontDisplay.variable} antialiased`}>
        <div className="flex min-h-screen flex-col">
          <SiteHeader
            logoText="Pathlight Clinic"
            navLinks={navLinks}
            ctaLabel="Contact us"
            ctaHref="/contact"
          />

          <div className="flex-1">{children}</div>

          <SiteFooter
            brandName="Pathlight Clinic"
            email="support@pathlighttherapy.com"
            columns={footerColumns}
            socials={{
              instagram: "https://www.instagram.com/your-org",
              linkedin: "https://www.linkedin.com/company/your-org",
            }}
          />
        </div>
      </body>
    </html>
  );
}
