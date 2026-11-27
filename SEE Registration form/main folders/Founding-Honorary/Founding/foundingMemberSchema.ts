import { z } from "zod";

export const foundingMemberSchema = z.object({
  organizationName: z.string(),
  foundingStatus: z.string(),
  yearJoinedInceptionTeam: z.string(),
  executivePositionOrBoardRole: z.string(),
  historicalGovernanceRole: z.string(),
  strategicTrackRecord: z.string(),
});

export type FoundingMemberFormValues = z.infer<
  typeof foundingMemberSchema
>;