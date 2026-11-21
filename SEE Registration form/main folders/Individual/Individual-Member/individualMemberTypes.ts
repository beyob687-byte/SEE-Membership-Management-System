export type IndividualMemberFormData = {
  profession: string;
  organization: string;
  jobTitle: string;
  areaOfExpertise: string;
  experienceYears: number | "";
  skills: string[];
  supportInterests: string[];
};

export type IndividualMemberFormProps = {
  value: IndividualMemberFormData;
  onChange: (data: IndividualMemberFormData) => void;
};