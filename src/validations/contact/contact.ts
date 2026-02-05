import { z } from "zod";

// US phone:
// - Optional +1
// - Allows (), spaces, dashes, dots
// - Exactly 10 digits (after country code normalization)
const US_PHONE_REGEX = /^(\+1[\s.-]?)?(\(?[2-9][0-9]{2}\)?[\s.-]?[2-9][0-9]{2}[\s.-]?[0-9]{4})$/;

// US ZIP:
// - 5 digits (12345)
// - or ZIP+4 (12345-6789)
const US_ZIP_REGEX = /^\d{5}(-\d{4})?$/;

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name."),

  email: z.string().trim().email("Please enter a valid email."),

  phone: z
    .string()
    .trim()
    .optional()
    .refine((v) => !v || US_PHONE_REGEX.test(v), "Please enter a valid US phone number."),

  zipcode: z
    .string()
    .trim()
    .optional()
    .refine((v) => !v || US_ZIP_REGEX.test(v), "Please enter a valid US ZIP code."),

  message: z.string().trim().min(10, "Please share a little more detail."),

  // honeypot
  website: z.string().optional(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
