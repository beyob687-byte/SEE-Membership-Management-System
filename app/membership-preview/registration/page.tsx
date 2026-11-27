"use client";

import { Suspense, useMemo, useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";

import CommonForm from "../../../SEE Registration form/Common form/CommonForm";
import type { CommonFormData } from "../../../SEE Registration form/Common form/commonTypes";
import { commonSchema } from "../../../SEE Registration form/Common form/commonSchema";
import {
  RegistrationFieldErrorsProvider,
  type RegistrationFieldErrors,
} from "../../../SEE Registration form/Common form/registrationValidation";

import EarlyStageForm from "../../../SEE Registration form/main folders/Enterprise/Early-Stage/EarlyStageForm";
import type { EarlyStageFormData } from "../../../SEE Registration form/main folders/Enterprise/Early-Stage/earlyStageTypes";
import { earlyStageSchema } from "../../../SEE Registration form/main folders/Enterprise/Early-Stage/earlyStageSchema";

import EstablishedForm from "../../../SEE Registration form/main folders/Enterprise/Established/EstablishedForm";
import type { EstablishedFormData } from "../../../SEE Registration form/main folders/Enterprise/Established/establishedTypes";
import { establishedSchema } from "../../../SEE Registration form/main folders/Enterprise/Established/establishedSchema";

import StudentForm from "../../../SEE Registration form/main folders/Individual/Student/StudentForm";
import type { StudentFormData } from "../../../SEE Registration form/main folders/Individual/Student/studentTypes";
import { studentSchema } from "../../../SEE Registration form/main folders/Individual/Student/studentSchema";

import IndividualMemberForm from "../../../SEE Registration form/main folders/Individual/Individual-Member/IndividualMemberForm";
import type { IndividualMemberFormData } from "../../../SEE Registration form/main folders/Individual/Individual-Member/individualMemberTypes";
import { individualMemberSchema } from "../../../SEE Registration form/main folders/Individual/Individual-Member/individualMemberSchema";

import SmallForm from "../../../SEE Registration form/main folders/Institutional/Small/SmallForm";
import type { SmallInstitutionFormData } from "../../../SEE Registration form/main folders/Institutional/Small/smallTypes";
import { smallInstitutionSchema } from "../../../SEE Registration form/main folders/Institutional/Small/smallSchema";

import MediumForm from "../../../SEE Registration form/main folders/Institutional/Medium/MediumForm";
import type { MediumInstitutionFormData } from "../../../SEE Registration form/main folders/Institutional/Medium/mediumTypes";
import { mediumInstitutionSchema } from "../../../SEE Registration form/main folders/Institutional/Medium/mediumSchema";

import LargeForm from "../../../SEE Registration form/main folders/Institutional/Large/LargeForm";
import type { LargeInstitutionFormData } from "../../../SEE Registration form/main folders/Institutional/Large/largeTypes";
import { largeInstitutionSchema } from "../../../SEE Registration form/main folders/Institutional/Large/largeSchema";

// Founding Member
import FoundingMemberForm from "../../../SEE Registration form/main folders/Founding-Honorary/Founding/FoundingMemberForm";
import type { FoundingMemberFormData } from "../../../SEE Registration form/main folders/Founding-Honorary/Founding/foundingMemberTypes";
import { foundingMemberSchema } from "../../../SEE Registration form/main folders/Founding-Honorary/Founding/foundingMemberSchema";

// Honorary Member
import HonoraryMemberForm from "../../../SEE Registration form/main folders/Founding-Honorary/Honorary/HonoraryMemberForm";
import type { HonoraryMemberFormData } from "../../../SEE Registration form/main folders/Founding-Honorary/Honorary/honoraryMemberTypes";
import { honoraryMemberSchema } from "../../../SEE Registration form/main folders/Founding-Honorary/Honorary/honoraryMemberSchema";

type ValidationIssue = {
  path: PropertyKey[];
  message: string;
};

function getFieldErrors(issues: readonly ValidationIssue[]) {
  const fieldErrors: RegistrationFieldErrors = {};

  for (const issue of issues) {
    const fieldName = issue.path.map(String).join(".");
    if (fieldName && !fieldErrors[fieldName]) {
      fieldErrors[fieldName] = issue.message;
    }
  }

  return fieldErrors;
}

function RegistrationContent() {
  const searchParams = useSearchParams();
  const [validationAttempted, setValidationAttempted] = useState(false);

  const category = searchParams.get("category") || "";
  const subcategory = searchParams.get("subcategory") || "";

  // Common form data
  const [commonData, setCommonData] = useState<CommonFormData>({
    fullName: "",
    email: "",
    phone: "",
    nationalId: "",
    referralSource: "",
    membershipReasons: [],
  });

  // Early-Stage Enterprise data
  const [earlyStageData, setEarlyStageData] =
    useState<EarlyStageFormData>({
      companyName: "",
      yearEstablished: "",
      legalStatus: "",
      sector: "",
      address: "",
      contactPersonName: "",
      contactPersonPosition: "",
      websiteOrSocialLinks: "",
      socialEnvironmentalProblem: "",
      targetBeneficiaries: "",
      profitReinvestment: false,
      socialEnterpriseCharacteristics: [],
      commercialRegistration: null,
      tinDocument: null,
    });

  // Established Enterprise data
  const [establishedData, setEstablishedData] =
    useState<EstablishedFormData>({
      companyName: "",
      yearEstablished: "",
      legalStatus: "",
      sector: "",
      address: "",
      contactPersonName: "",
      contactPersonPosition: "",
      websiteOrSocialLinks: "",
      socialEnvironmentalProblem: "",
      targetBeneficiaries: "",
      profitReinvestment: false,
      socialEnterpriseCharacteristics: [],
      commercialRegistration: null,
      tinDocument: null,
    });

  // Student data
  const [studentData, setStudentData] =
    useState<StudentFormData>({
      institutionName: "",
      departmentOrField: "",
      graduationYear: "",
      studentId: "",
      projectName: "",
      projectDescription: "",
      volunteerTrack: false,
      preferredVolunteerServices: [],
      volunteerHours: "",
      studentIdDocument: null,
      enrollmentProof: null,
    });

  // Individual Member data
  const [individualMemberData, setIndividualMemberData] =
    useState<IndividualMemberFormData>({
      profession: "",
      organization: "",
      jobTitle: "",
      areaOfExpertise: "",
      experienceYears: "",
      skills: [],
      supportInterests: [],
    });

  // Small Institutional data
  const [smallInstitutionData, setSmallInstitutionData] =
    useState<SmallInstitutionFormData>({
      institutionName: "",
      institutionType: "",
      registrationType: "",
      sector: "",
      yearEstablished: "",
      address: "",
      website: "",
      contactPersonName: "",
      contactPersonPosition: "",
      thematicFocusAreas: "",
      collaborationAreas: [],
      beneficiaryGroups: "",
      supportPrograms: [],
      registrationDocument: null,
      tinDocument: null,
    });

  // Medium Institutional data
  const [mediumInstitutionData, setMediumInstitutionData] =
    useState<MediumInstitutionFormData>({
      institutionName: "",
      institutionType: "",
      registrationType: "",
      sector: "",
      yearEstablished: "",
      address: "",
      website: "",
      contactPersonName: "",
      contactPersonPosition: "",
      thematicFocusAreas: "",
      collaborationAreas: [],
      beneficiaryGroups: "",
      supportPrograms: [],
      registrationDocument: null,
      tinDocument: null,
    });

  // Large Institutional data
  const [largeInstitutionData, setLargeInstitutionData] =
    useState<LargeInstitutionFormData>({
      institutionName: "",
      institutionType: "",
      registrationType: "",
      sector: "",
      yearEstablished: "",
      address: "",
      website: "",
      contactPersonName: "",
      contactPersonPosition: "",
      thematicFocusAreas: "",
      collaborationAreas: [],
      beneficiaryGroups: "",
      supportPrograms: [],
      registrationDocument: null,
      tinDocument: null,
    });

  // Founding Member data
  const [foundingMemberData, setFoundingMemberData] =
    useState<FoundingMemberFormData>({
      organizationName: "",
      foundingStatus: "",
      yearJoinedInceptionTeam: "",
      executivePositionOrBoardRole: "",
      historicalGovernanceRole: "",
      strategicTrackRecord: "",
    });

  // Honorary Member data
  const [honoraryMemberData, setHonoraryMemberData] =
    useState<HonoraryMemberFormData>({
      nomineeName: "",
      organization: "",
      recognitionReason: "",
      contributionToSEE: "",
    });

  // Membership conditions
  const isEarlyStage =
    category === "enterprise" &&
    subcategory === "early-stage";

  const isEstablished =
    category === "enterprise" &&
    subcategory === "established";

  const isStudent =
    category === "individual" &&
    subcategory === "student";

  const isIndividualMember =
    category === "individual" &&
    subcategory === "individual-member";

  const isSmallInstitution =
    category === "institutional" &&
    subcategory === "small-institution";

  const isMediumInstitution =
    category === "institutional" &&
    subcategory === "medium-institution";

  const isLargeInstitution =
    category === "institutional" &&
    subcategory === "large-institution";

  // Founding and Honorary category
  const isFoundingMember =
    category === "founding-honorary" &&
    subcategory === "founding";

  const isHonoraryMember =
    category === "founding-honorary" &&
    subcategory === "honorary";

  // Membership title
  const membershipTitle = isEarlyStage
    ? "Early-Stage Enterprises"
    : isEstablished
      ? "Established Enterprises"
      : isStudent
        ? "Student Membership"
        : isIndividualMember
          ? "Individual Member"
          : isSmallInstitution
            ? "Small Institutional Membership"
            : isMediumInstitution
              ? "Medium Institutional Membership"
              : isLargeInstitution
                ? "Large Institutional Membership"
                : isFoundingMember
                  ? "Founding Member"
                  : isHonoraryMember
                    ? "Honorary Member"
                    : `${category} - ${subcategory}`;

  const isConnectedMembershipType =
    isEarlyStage ||
    isEstablished ||
    isStudent ||
    isIndividualMember ||
    isSmallInstitution ||
    isMediumInstitution ||
    isLargeInstitution ||
    isFoundingMember ||
    isHonoraryMember;

  const validatedFieldErrors = useMemo(() => {
    const commonResult = commonSchema.safeParse(commonData);
    const errors: RegistrationFieldErrors = commonResult.success
      ? {}
      : getFieldErrors(commonResult.error.issues);

    if (isEarlyStage) {
      const result = earlyStageSchema.safeParse(earlyStageData);
      if (!result.success) Object.assign(errors, getFieldErrors(result.error.issues));
    } else if (isEstablished) {
      const result = establishedSchema.safeParse(establishedData);
      if (!result.success) Object.assign(errors, getFieldErrors(result.error.issues));
    } else if (isStudent) {
      const result = studentSchema.safeParse(studentData);
      if (!result.success) Object.assign(errors, getFieldErrors(result.error.issues));
    } else if (isIndividualMember) {
      const result = individualMemberSchema.safeParse(individualMemberData);
      if (!result.success) Object.assign(errors, getFieldErrors(result.error.issues));
    } else if (isSmallInstitution) {
      const result = smallInstitutionSchema.safeParse(smallInstitutionData);
      if (!result.success) Object.assign(errors, getFieldErrors(result.error.issues));
    } else if (isMediumInstitution) {
      const result = mediumInstitutionSchema.safeParse(mediumInstitutionData);
      if (!result.success) Object.assign(errors, getFieldErrors(result.error.issues));
    } else if (isLargeInstitution) {
      const result = largeInstitutionSchema.safeParse(largeInstitutionData);
      if (!result.success) Object.assign(errors, getFieldErrors(result.error.issues));
    } else if (isFoundingMember) {
      const result = foundingMemberSchema.safeParse(foundingMemberData);
      if (!result.success) Object.assign(errors, getFieldErrors(result.error.issues));
    } else if (isHonoraryMember) {
      const result = honoraryMemberSchema.safeParse(honoraryMemberData);
      if (!result.success) Object.assign(errors, getFieldErrors(result.error.issues));
    }

    return errors;
  }, [
    commonData,
    earlyStageData,
    establishedData,
    foundingMemberData,
    honoraryMemberData,
    individualMemberData,
    isEarlyStage,
    isEstablished,
    isFoundingMember,
    isHonoraryMember,
    isIndividualMember,
    isLargeInstitution,
    isMediumInstitution,
    isSmallInstitution,
    isStudent,
    largeInstitutionData,
    mediumInstitutionData,
    smallInstitutionData,
    studentData,
  ]);

  const handleRegistrationSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setValidationAttempted(true);

    const form = event.currentTarget;
    const firstInvalidField = Array.from(
      form.querySelectorAll<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>(
        "input, select, textarea"
      )
    ).find((field) => {
      const fieldName =
        field.dataset.validationField || field.getAttribute("name");
      return fieldName ? Boolean(validatedFieldErrors[fieldName]) : false;
    });

    if (Object.keys(validatedFieldErrors).length > 0) {
      if (firstInvalidField) {
        window.requestAnimationFrame(() => {
          firstInvalidField.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
          firstInvalidField.focus({ preventScroll: true });
        });
      }
      return;
    }

    window.alert("You are successfully registered!");
  };

  // Membership selection validation
  if (!category || !subcategory) {
    return (
      <main className="min-h-screen bg-gray-50 p-8">
        <div className="mx-auto max-w-3xl rounded-xl bg-white p-6 shadow-sm">
          <h1 className="text-xl font-bold text-gray-800">
            No Membership Selected
          </h1>

          <p className="mt-2 text-gray-600">
            Please return to the membership selection page and select a category and subcategory first.
          </p>

          <a
            href="/membership-preview"
            className="mt-5 inline-block rounded-lg bg-blue-700 px-5 py-3 text-white hover:bg-blue-800"
          >
            Back to Membership Selection
          </a>
        </div>
      </main>
    );
  }

  return (
    <main className="membership-registration" data-membership-category={category}>
      <form
        className="membership-registration__content"
        onSubmit={handleRegistrationSubmit}
        noValidate
      >
        <RegistrationFieldErrorsProvider
          errors={validationAttempted ? validatedFieldErrors : {}}
        >

        {/* Page Header */}
        <header className="membership-registration__header">
          <p className="membership-registration__eyebrow">
            SEE MEMBERSHIP REGISTRATION
          </p>

          <h1>
            Registration Form
          </h1>

          <p>
            Complete the information below to apply for SEE membership.
          </p>
        </header>

        {/* Selected Membership */}
        <section className="membership-selected-card">
          <p className="membership-selected-card__label">
            Selected Membership
          </p>

          <h2 className="membership-selected-card__title">
            {membershipTitle}
          </h2>
        </section>

        {/* Common Form */}
        <section className="membership-form-card">
          <div className="membership-form-card__header">
            <h2>
              Common Information
            </h2>

            <p>
              This information is required for all membership categories.
            </p>
          </div>

          <CommonForm
            value={commonData}
            onChange={setCommonData}
          />
        </section>

        {/* Membership-Specific Form */}
        <section className="membership-form-card">
          <div className="membership-form-card__header">
            <h2>
              Membership-Specific Information
            </h2>

            <p>
              Complete the form for your selected membership type.
            </p>
          </div>

          {/* Early-Stage Enterprise */}
          {isEarlyStage && (
            <EarlyStageForm
              value={earlyStageData}
              onChange={setEarlyStageData}
            />
          )}

          {/* Established Enterprise */}
          {isEstablished && (
            <EstablishedForm
              value={establishedData}
              onChange={setEstablishedData}
            />
          )}

          {/* Student */}
          {isStudent && (
            <StudentForm
              value={studentData}
              onChange={setStudentData}
            />
          )}

          {/* Individual Member */}
          {isIndividualMember && (
            <IndividualMemberForm
              value={individualMemberData}
              onChange={setIndividualMemberData}
            />
          )}

          {/* Small Institutional */}
          {isSmallInstitution && (
            <SmallForm
              value={smallInstitutionData}
              onChange={setSmallInstitutionData}
            />
          )}

          {/* Medium Institutional */}
          {isMediumInstitution && (
            <MediumForm
              value={mediumInstitutionData}
              onChange={setMediumInstitutionData}
            />
          )}

          {/* Large Institutional */}
          {isLargeInstitution && (
            <LargeForm
              value={largeInstitutionData}
              onChange={setLargeInstitutionData}
            />
          )}

          {/* Founding Member */}
          {isFoundingMember && (
            <FoundingMemberForm
              value={foundingMemberData}
              onChange={setFoundingMemberData}
            />
          )}

          {/* Honorary Member */}
          {isHonoraryMember && (
            <HonoraryMemberForm
              value={honoraryMemberData}
              onChange={setHonoraryMemberData}
            />
          )}

          {/* Unconnected membership types */}
          {!isEarlyStage &&
            !isEstablished &&
            !isStudent &&
            !isIndividualMember &&
            !isSmallInstitution &&
            !isMediumInstitution &&
            !isLargeInstitution &&
            !isFoundingMember &&
            !isHonoraryMember && (
              <p className="membership-form-notice">
                The registration form for this membership type has not been connected yet.
              </p>
            )}

          {isConnectedMembershipType && (
            <div className="membership-submit-actions">
              <button
                className="membership-submit-button"
                type="submit"
              >
                Submit Registration
              </button>
            </div>
          )}
        </section>
        </RegistrationFieldErrorsProvider>
      </form>
    </main>
  );
}

export default function RegistrationPage() {
  return (
    <Suspense
      fallback={
        <p className="membership-registration__loading">
          Loading registration...
        </p>
      }
    >
      <RegistrationContent />
    </Suspense>
  );
}