
import { z } from "zod";

export const smallInstitutionSchema = z.object({
  institutionName: z.string().min(1, "Institution name is required"),
  institutionType: z.string().min(1, "Institution type is required"),
  registrationType: z.string().min(1, "Registration type is required"),
  sector: z.string().min(1, "Sector is required"),
  yearEstablished: z.union([z.number(), z.literal("")]),
  address: z.string().min(1, "Address is required"),
  website: z.string(),
  contactPersonName: z.string().min(1, "Contact person is required"),
  contactPersonPosition: z.string().min(1, "Position is required"),
  thematicFocusAreas: z.string(),
  collaborationAreas: z.array(z.string()),
  beneficiaryGroups: z.string(),
  supportPrograms: z.array(z.string()),
  registrationDocument: z.any().nullable(),
  tinDocument: z.any().nullable(),
});

export type SmallInstitutionFormValues = z.infer<
  typeof smallInstitutionSchema
>;
