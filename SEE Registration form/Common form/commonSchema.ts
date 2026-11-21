import { z } from "zod";

export const commonFormSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(1, "Full name is required"),

  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .email("Enter a valid email address"),

  phone: z
    .string()
    .trim()
    .min(1, "Phone number is required")
    .regex(/^\+?[0-9\s()-]{9,20}$/, "Enter a valid phone number"),

  nationalId: z
    .string()
    .trim()
    .min(1, "National ID is required"),

  referralSource: z
    .string()
    .min(1, "Please select how you heard about SEE"),

  membershipReasons: z
    .array(z.string())
    .min(1, "Select at least one reason for joining"),

  city: z
    .string()
    .trim()
    .min(1, "City is required"),

  address: z
    .string()
    .trim()
    .min(1, "Address is required"),
});