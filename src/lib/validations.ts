import { z } from "zod";

export const inquirySchema = z.object({
  name: z.string().min(1, "Name is required").max(100, "Name is too long"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required").max(20, "Phone number is too long"),
  message: z.string().min(1, "Message is required").max(5000, "Message is too long"),
});

export type InquiryInput = z.infer<typeof inquirySchema>;

export const workWithUsSchema = z.object({
  name: z.string().min(1, "Name is required").max(100, "Name is too long"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required").max(20, "Phone number is too long"),
  operation_type: z.string().optional(),
  message: z.string().min(1, "Message is required").max(5000, "Message is too long"),
});

export type WorkWithUsInput = z.infer<typeof workWithUsSchema>;

export const newsletterSchema = z.object({
  email: z.string().email("Invalid email address"),
  name: z.string().max(100, "Name is too long").optional(),
});

export type NewsletterInput = z.infer<typeof newsletterSchema>;
