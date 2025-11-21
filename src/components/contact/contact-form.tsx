// src/components/contact/contact-form.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export interface ContactFormProps {
  id?: string;
  title?: string;
  subtitle?: string;
}

export function ContactForm({
  id = "contact-form",
  title = "Send us a message",
  subtitle = "Share a few details and we will get back to you shortly.",
}: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(event.currentTarget);
      // Placeholder: wire this to a Next.js route or external service later.
      console.log("Contact form submitted", Object.fromEntries(formData.entries()));
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id={id} className="rounded-md border bg-background p-6 shadow-sm md:p-8">
      <header className="space-y-2 mb-6">
        <h1 className="text-heading-2">{title}</h1>
        {subtitle ? <p className="text-muted">{subtitle}</p> : null}
      </header>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-1.5">
            <label htmlFor="name" className="text-label">
              Full name
            </label>
            <Input id="name" name="name" autoComplete="name" required placeholder="Your name" />
          </div>
          <div className="space-y-1.5">
            <label htmlFor="email" className="text-label">
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="you@example.com"
            />
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-1.5">
            <label htmlFor="phone" className="text-label">
              Phone (optional)
            </label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="+91 98765 43210"
            />
          </div>
          <div className="space-y-1.5">
            <label htmlFor="topic" className="text-label">
              Topic
            </label>
            <Input id="topic" name="topic" placeholder="Project enquiry, collaboration, etc." />
          </div>
        </div>

        <div className="space-y-1.5">
          <label htmlFor="message" className="text-label">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className="text-body mt-1 w-full rounded-md border bg-background px-3 py-2 shadow-sm outline-none ring-offset-background placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            placeholder="Share any context, requirements, or questions you have."
          />
        </div>

        <div className="flex items-center justify-between gap-4 pt-2">
          <p className="text-caption">
            By submitting, you agree to be contacted regarding your enquiry.
          </p>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Sending…" : "Send message"}
          </Button>
        </div>
      </form>
    </section>
  );
}
