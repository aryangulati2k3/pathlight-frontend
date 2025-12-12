"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { contactFormSchema, type ContactFormValues } from "@/validations/contact/contact";

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
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      topic: "",
      message: "",
      website: "",
    },
    mode: "onTouched",
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = form;

  const onSubmit: SubmitHandler<ContactFormValues> = async (values) => {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(values),
    });

    const data: { ok: boolean; error?: string } = await res
      .json()
      .catch(() => ({ ok: false, error: "Bad server response" }));

    if (!res.ok || !data.ok) {
      toast.error(data.error ?? "Could not send message. Please try again.");
      return;
    }

    toast.success("Message sent!");
    reset();
  };

  return (
    <section id={id} className="rounded-md border bg-background p-6 shadow-sm md:p-8">
      <header className="mb-6 space-y-2">
        <h1 className="text-heading-2">{title}</h1>
        {subtitle ? <p className="text-muted">{subtitle}</p> : null}
      </header>

      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)} noValidate>
        {/* honeypot */}
        <input tabIndex={-1} autoComplete="off" className="hidden" {...register("website")} />

        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-1.5">
            <label htmlFor="name" className="text-label">
              Full name
            </label>
            <Input
              id="name"
              autoComplete="name"
              placeholder="Your name"
              aria-invalid={!!errors.name}
              {...register("name")}
            />
            {errors.name ? (
              <p className="text-caption text-destructive">{errors.name.message}</p>
            ) : null}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="email" className="text-label">
              Email
            </label>
            <Input
              id="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              aria-invalid={!!errors.email}
              {...register("email")}
            />
            {errors.email ? (
              <p className="text-caption text-destructive">{errors.email.message}</p>
            ) : null}
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-1.5">
            <label htmlFor="phone" className="text-label">
              Phone (optional)
            </label>
            <Input
              id="phone"
              type="tel"
              autoComplete="tel"
              placeholder="+91 98765 43210"
              aria-invalid={!!errors.phone}
              {...register("phone")}
            />
            {errors.phone ? (
              <p className="text-caption text-destructive">{errors.phone.message}</p>
            ) : null}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="topic" className="text-label">
              Topic
            </label>
            <Input
              id="topic"
              placeholder="Project enquiry, collaboration, etc."
              aria-invalid={!!errors.topic}
              {...register("topic")}
            />
            {errors.topic ? (
              <p className="text-caption text-destructive">{errors.topic.message}</p>
            ) : null}
          </div>
        </div>

        <div className="space-y-1.5">
          <label htmlFor="message" className="text-label">
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            className="text-body mt-1 w-full rounded-md border bg-background px-3 py-2 shadow-sm outline-none ring-offset-background placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            placeholder="Share any context, requirements, or questions you have."
            aria-invalid={!!errors.message}
            {...register("message")}
          />
          {errors.message ? (
            <p className="text-caption text-destructive">{errors.message.message}</p>
          ) : null}
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
