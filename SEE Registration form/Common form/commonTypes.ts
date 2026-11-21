
export type CommonFormData = {
  fullName: string;
  email: string;
  phone: string;
  nationalId: string;
  referralSource: string;
  membershipReasons: string[];
};

export type CommonFormProps = {
  value: CommonFormData;
  onChange: (data: CommonFormData) => void;
};
