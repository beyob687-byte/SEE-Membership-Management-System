export type HonoraryMemberFormData = {
  nomineeName: string;
  organization: string;
  recognitionReason: string;
  contributionToSEE: string;
};

export type HonoraryMemberFormProps = {
  value: HonoraryMemberFormData;
  onChange: (data: HonoraryMemberFormData) => void;
};