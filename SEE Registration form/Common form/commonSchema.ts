
import { z } from "zod";

export const commonSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Full name must contain at least 2 characters"),

  email: z
    .string()
    .trim()
    .email("Please enter a valid email address"),

  phone: z
    .string()
    .trim()
    .transform((value) => value.replace(/[\s-]/g, ""))
    .pipe(
      z
        .string()
        .regex(
          /^(?:\+251[97]\d{8}|0[97]\d{8})$/,
          "Enter a valid Ethiopian phone number"
        )
    ),

  nationalId: z.string().optional(),

  referralSource: z.string().optional(),

  membershipReasons: z.array(z.string()).optional(),
});

export type CommonSchemaData = z.infer<typeof commonSchema>;
