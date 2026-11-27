
import { z } from "zod";

export const individualMemberSchema = z.object({
  profession: z
    .string()
    .trim()
    .min(2, "Profession is required"),

  organization: z
    .string()
    .trim(),

  jobTitle: z
    .string()
    .trim(),

  areaOfExpertise: z
    .string()
    .trim()
    .min(2, "Area of expertise is required"),

  experienceYears: z.union([
    z.literal(""),
    z.number().min(0, "Experience cannot be negative"),
  ]),

  skills: z.array(z.string()),

  supportInterests: z.array(z.string()),
});

export type IndividualMemberSchemaData = z.infer<
  typeof individualMemberSchema
>;
