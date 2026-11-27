export type LargeInstitutionFormData = {
  institutionName: string;
  institutionType: string;
  registrationType: string;
  sector: string;
  yearEstablished: number | "";
  address: string;
  website: string;
  contactPersonName: string;
  contactPersonPosition: string;
  thematicFocusAreas: string;
  collaborationAreas: string[];
  beneficiaryGroups: string;
  supportPrograms: string[];
  registrationDocument: File | null;
  tinDocument: File | null;
};

export type LargeInstitutionFormProps = {
  value: LargeInstitutionFormData;
  onChange: (data: LargeInstitutionFormData) => void;
};