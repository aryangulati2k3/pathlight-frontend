// src/app/layout.tsx
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Publications", href: "/publications" },
];

const footerColumns = [
  {
    heading: "Pages",
    links: [
      { label: "About", href: "/about" },
      { label: "Programs", href: "/programs" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Publications", href: "/publications" },
      { label: "Events", href: "/events" },
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
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
            email="hello@template.example"
            columns={footerColumns}
            socials={{
              github: "https://github.com/your-org",
              linkedin: "https://www.linkedin.com/company/your-org",
            }}
          />
        </div>
      </body>
    </html>
  );
}
