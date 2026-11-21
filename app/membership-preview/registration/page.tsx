"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";

import CommonForm from "../../../SEE Registration form/Common form/CommonForm";
import type { CommonFormData } from "../../../SEE Registration form/Common form/commonTypes";

import EarlyStageForm from "../../../SEE Registration form/main folders/Enterprise/Early-Stage/EarlyStageForm";
import type { EarlyStageFormData } from "../../../SEE Registration form/main folders/Enterprise/Early-Stage/earlyStageTypes";

import EstablishedForm from "../../../SEE Registration form/main folders/Enterprise/Established/EstablishedForm";
import type { EstablishedFormData } from "../../../SEE Registration form/main folders/Enterprise/Established/establishedTypes";

import StudentForm from "../../../SEE Registration form/main folders/Individual/Student/StudentForm";
import type { StudentFormData } from "../../../SEE Registration form/main folders/Individual/Student/studentTypes";

import IndividualMemberForm from "../../../SEE Registration form/main folders/Individual/Individual-Member/IndividualMemberForm";
import type { IndividualMemberFormData } from "../../../SEE Registration form/main folders/Individual/Individual-Member/individualMemberTypes";

import SmallForm from "../../../SEE Registration form/main folders/Institutional/Small/SmallForm";
import type { SmallInstitutionFormData } from "../../../SEE Registration form/main folders/Institutional/Small/smallTypes";

import MediumForm from "../../../SEE Registration form/main folders/Institutional/Medium/MediumForm";
import type { MediumInstitutionFormData } from "../../../SEE Registration form/main folders/Institutional/Medium/mediumTypes";

import LargeForm from "../../../SEE Registration form/main folders/Institutional/Large/LargeForm";
import type { LargeInstitutionFormData } from "../../../SEE Registration form/main folders/Institutional/Large/largeTypes";

function RegistrationContent() {
  const searchParams = useSearchParams();

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
                : `${category} - ${subcategory}`;

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-4xl space-y-6">

        {/* Page Header */}
        <header>
          <p className="text-sm font-semibold text-blue-700">
            SEE MEMBERSHIP REGISTRATION
          </p>

          <h1 className="mt-2 text-3xl font-bold text-gray-800">
            Registration Form
          </h1>

          <p className="mt-2 text-gray-600">
            Complete the information below to apply for SEE membership.
          </p>
        </header>

        {/* Selected Membership */}
        <section className="rounded-xl border border-blue-100 bg-blue-50 p-5">
          <p className="text-sm text-gray-600">
            Selected Membership
          </p>

          <h2 className="mt-1 text-lg font-bold text-blue-900">
            {membershipTitle}
          </h2>
        </section>

        {/* Part 1: Common Form */}
        <section className="rounded-xl bg-white p-6 shadow-sm">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-800">
              Part 1: Common Information
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              This information is required for all membership categories.
            </p>
          </div>

          <CommonForm
            value={commonData}
            onChange={setCommonData}
          />
        </section>

        {/* Part 2: Membership-Specific Form */}
        <section className="rounded-xl bg-white p-6 shadow-sm">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-800">
              Part 2: Membership-Specific Information
            </h2>

            <p className="mt-1 text-sm text-gray-500">
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

          {/* Unconnected membership types */}
          {!isEarlyStage &&
            !isEstablished &&
            !isStudent &&
            !isIndividualMember &&
            !isSmallInstitution &&
            !isMediumInstitution &&
            !isLargeInstitution && (
              <p className="rounded-lg bg-yellow-50 p-4 text-sm text-yellow-800">
                The registration form for this membership type has not been connected yet.
              </p>
            )}
        </section>
      </div>
    </main>
  );
}

export default function RegistrationPage() {
  return (
    <Suspense
      fallback={<p className="p-8">Loading registration...</p>}
    >
      <RegistrationContent />
    </Suspense>
  );
}