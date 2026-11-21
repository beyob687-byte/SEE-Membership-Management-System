
export type EstablishedFormData = {
  // Enterprise profile
  companyName: string;
  yearEstablished: number | "";
  legalStatus: string;
  sector: string;
  address: string;

  // Contact information
  contactPersonName: string;
  contactPersonPosition: string;
  websiteOrSocialLinks: string;

  // Social impact
  socialEnvironmentalProblem: string;
  targetBeneficiaries: string;
  profitReinvestment: boolean;

  // Social enterprise self-assessment
  socialEnterpriseCharacteristics: string[];

  // Supporting documents
  commercialRegistration: File | null;
  tinDocument: File | null;
};
