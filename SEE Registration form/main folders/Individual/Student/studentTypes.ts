
export type StudentFormData = {
  institutionName: string;
  departmentOrField: string;
  graduationYear: number | "";
  studentId: string;

  projectName: string;
  projectDescription: string;

  volunteerTrack: boolean;
  preferredVolunteerServices: string[];
  volunteerHours: number | "";

  studentIdDocument: File | null;
  enrollmentProof: File | null;
};

export type StudentFormProps = {
  value: StudentFormData;
  onChange: (data: StudentFormData) => void;
};
