
export type EarlyStageFormData = {
  companyName: string;
  yearEstablished: number | "";
  legalStatus: string;
  sector: string;
  address: string;

  contactPersonName: string;
  contactPersonPosition: string;
  websiteOrSocialLinks: string;

  socialEnvironmentalProblem: string;
  targetBeneficiaries: string;
  profitReinvestment: boolean;

  socialEnterpriseCharacteristics: string[];

  commercialRegistration: File | null;
  tinDocument: File | null;
};
