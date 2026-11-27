
import { z } from "zod";

export const earlyStageSchema = z.object({
  companyName: z
    .string()
    .trim()
    .min(2, "Company name is required"),

  yearEstablished: z
    .union([z.literal(""), z.number()])
    .refine(
      (value) => value !== "",
      "Please enter the establishment year"
    )
    .refine(
      (value) => typeof value === "number" && Number.isInteger(value),
      "Enter a valid year"
    )
    .refine(
      (value) => typeof value === "number" && value >= 1900,
      "Enter a valid establishment year"
    )
    .refine(
      (value) =>
        typeof value === "number" &&
        value <= new Date().getFullYear(),
      "Year cannot be in the future"
    ),

  legalStatus: z
    .string()
    .min(1, "Please select the legal status"),

  sector: z
    .string()
    .trim()
    .min(1, "Please enter your sector"),

  address: z
    .string()
    .trim()
    .min(2, "Enterprise address is required"),

  contactPersonName: z
    .string()
    .trim()
    .min(2, "Contact person name is required"),

  contactPersonPosition: z
    .string()
    .trim()
    .min(2, "Contact person position is required"),

  websiteOrSocialLinks: z.string(),

  socialEnvironmentalProblem: z
    .string()
    .trim()
    .min(10, "Please describe the problem your enterprise addresses"),

  targetBeneficiaries: z
    .string()
    .trim()
    .min(2, "Please identify your target beneficiaries"),

  profitReinvestment: z.boolean(),

  socialEnterpriseCharacteristics: z.array(z.string()),

  commercialRegistration: z
    .custom<File | null>(
      (value) =>
        value === null ||
        (typeof File !== "undefined" && value instanceof File),
      "Invalid commercial registration file"
    ),

  tinDocument: z
    .custom<File | null>(
      (value) =>
        value === null ||
        (typeof File !== "undefined" && value instanceof File),
      "Invalid TIN document"
    ),
});

export type EarlyStageSchemaData = z.infer<
  typeof earlyStageSchema
>;
