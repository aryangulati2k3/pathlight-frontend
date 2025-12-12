import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name."),
  email: z.string().trim().email("Please enter a valid email."),
  phone: z
    .string()
    .trim()
    .optional()
    .refine((v) => !v || /^[+0-9()\-\s]{7,20}$/.test(v), "Please enter a valid phone number."),
  topic: z.string().trim().optional(),
  message: z.string().trim().min(10, "Please share a little more detail."),
  // honeypot (bots fill it)
  website: z.string().optional(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
