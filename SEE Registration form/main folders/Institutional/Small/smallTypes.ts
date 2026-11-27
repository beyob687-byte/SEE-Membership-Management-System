export type SmallInstitutionFormData = {
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

export type SmallInstitutionFormProps = {
  value: SmallInstitutionFormData;
  onChange: (data: SmallInstitutionFormData) => void;
};