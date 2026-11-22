export type FoundingMemberFormData = {
  organizationName: string;
  foundingStatus: string;
  yearJoinedInceptionTeam: string;
  executivePositionOrBoardRole: string;
  historicalGovernanceRole: string;
  strategicTrackRecord: string;
};

export type FoundingMemberFormProps = {
  value: FoundingMemberFormData;
  onChange: (data: FoundingMemberFormData) => void;
};