import { z } from "zod";

export const honoraryMemberSchema = z.object({
  nomineeName: z.string(),
  organization: z.string(),
  recognitionReason: z.string(),
  contributionToSEE: z.string(),
});

export type HonoraryMemberFormValues = z.infer<
  typeof honoraryMemberSchema
>;