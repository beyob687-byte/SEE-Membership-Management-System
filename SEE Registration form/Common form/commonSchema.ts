
import { z } from "zod";

export const commonSchema = z.object({
  fullName: z.string().trim().min(2, "Full name is required"),

  email: z.string().trim().email("Enter a valid email"),

  phone: z
    .string()
    .trim()
    .transform((value) => value.replace(/[\s-]/g, ""))
    .pipe(
      z.string().regex(
        /^(?:\+251[97]\d{8}|0[97]\d{8})$/,
        "Enter a valid Ethiopian phone number"
      )
    ),

  nationalId: z.string(),

  referralSource: z.string(),

  membershipReasons: z.array(z.string()),
});
