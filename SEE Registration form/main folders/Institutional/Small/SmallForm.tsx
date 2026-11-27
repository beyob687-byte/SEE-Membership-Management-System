
"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { smallInstitutionSchema } from "./smallSchema";
import type {
  SmallInstitutionFormData,
  SmallInstitutionFormProps,
} from "./smallTypes";
import {
  getRegistrationFieldAttributes,
  RegistrationFieldError,
  useRegistrationFieldErrors,
} from "../../../Common form/registrationValidation";

const institutionTypes = [
  "CSO",
  "NGO",
  "University",
  "Research Institute",
  "Development Agency",
  "Other",
];

const collaborationOptions = [
  "Social Enterprise Partnerships",
  "Community Programs",
  "Policy Advocacy",
  "Grant-Funded Initiatives",
  "B2B Procurement",
  "Supplier Partnerships",
  "Research",
  "Training",
  "Mentorship",
  "Funding Support",
];

const supportProgramOptions = [
  "Incubation",
  "Mentorship",
  "Research",
  "Training",
  "Funding",
  "Business Development",
  "Technical Support",
];

export default function SmallForm({
  value,
  onChange,
}: SmallInstitutionFormProps) {
  const {
    register,
    watch,
  } = useForm<SmallInstitutionFormData>({
    resolver: zodResolver(smallInstitutionSchema),
    defaultValues: value,
  });
  const fieldErrors = useRegistrationFieldErrors();

  useEffect(() => {
    const subscription = watch((data) => {
      onChange(data as SmallInstitutionFormData);
    });

    return () => subscription.unsubscribe();
  }, [watch, onChange]);

  return (
    <div className="see-membership-form see-institutional-form">

      {/* Institution Information */}
      <section className="see-form-section">
        <h3 >
          Institution Information
        </h3>

        <div>
          <label >
            Institution / Organization Name *
          </label>
          <input
            {...register("institutionName")}
            {...getRegistrationFieldAttributes("institutionName", fieldErrors.institutionName)}
            placeholder="Enter institution name"
          />
          <RegistrationFieldError
            fieldName="institutionName"
            error={fieldErrors.institutionName}
          />
        </div>

        <div>
          <label >
            Institution Type *
          </label>
          <select
            {...register("institutionType")}
            {...getRegistrationFieldAttributes("institutionType", fieldErrors.institutionType)}
          >
            <option value="">Select institution type</option>
            {institutionTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          <RegistrationFieldError
            fieldName="institutionType"
            error={fieldErrors.institutionType}
          />
        </div>

        <div>
          <label >
            Registration Type *
          </label>
          <input
            {...register("registrationType")}
            {...getRegistrationFieldAttributes("registrationType", fieldErrors.registrationType)}
            placeholder="e.g. Local CSO, PLC, NGO"
          />
          <RegistrationFieldError
            fieldName="registrationType"
            error={fieldErrors.registrationType}
          />
        </div>

        <div>
          <label>
            Sector *
          </label>
          <input
            {...register("sector")}
            {...getRegistrationFieldAttributes("sector", fieldErrors.sector)}
            placeholder="Enter sector or industry"
          />
          <RegistrationFieldError
            fieldName="sector"
            error={fieldErrors.sector}
          />
        </div>

        <div>
          <label>
            Year Established
          </label>
          <input
            type="number"
            {...register("yearEstablished", {
              setValueAs: (v) => v === "" ? "" : Number(v),
            })}
          />
        </div>

        <div>
          <label >
            Official Address *
          </label>
          <textarea
            {...register("address")}
            {...getRegistrationFieldAttributes("address", fieldErrors.address)}
            rows={3}
            placeholder="Enter institution address"
          />
          <RegistrationFieldError
            fieldName="address"
            error={fieldErrors.address}
          />
        </div>

        <div>
          <label >
            Website
          </label>
          <input
            {...register("website")}
            placeholder="https://example.com"
          />
        </div>
      </section>

      {/* Contact Person */}
      <section className="see-form-section">
        <h3 >
          Contact Person
        </h3>

        <div>
          <label>
            Contact Person Name *
          </label>
          <input
            {...register("contactPersonName")}
            {...getRegistrationFieldAttributes("contactPersonName", fieldErrors.contactPersonName)}
            placeholder="Full name"
          />
          <RegistrationFieldError
            fieldName="contactPersonName"
            error={fieldErrors.contactPersonName}
          />
        </div>

        <div>
          <label>
            Position / Designation *
          </label>
          <input
            {...register("contactPersonPosition")}
            {...getRegistrationFieldAttributes("contactPersonPosition", fieldErrors.contactPersonPosition)}
            placeholder="Position in the institution"
          />
          <RegistrationFieldError
            fieldName="contactPersonPosition"
            error={fieldErrors.contactPersonPosition}
          />
        </div>
      </section>

      {/* Institutional Focus */}
      <section className="see-form-section">
        <h3>
          Institutional Focus & Collaboration
        </h3>

        <div>
          <label>
            Thematic Focus Areas
          </label>
          <textarea
            {...register("thematicFocusAreas")}
            rows={3}
            placeholder="Describe the institution's thematic focus"
          />
        </div>

        <div>
          <label>
            Collaboration Areas
          </label>

          <div className="see-form-grid see-form-grid--choices">
            {collaborationOptions.map((option) => (
              <label key={option} className="see-form-choice">
                <input
                  type="checkbox"
                  value={option}
                  {...register("collaborationAreas")}
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label>
            Beneficiary Groups Served
          </label>
          <textarea
            {...register("beneficiaryGroups")}
            rows={3}
            placeholder="Describe the groups your institution serves"
          />
        </div>
      </section>

      {/* Programs */}
      <section className="see-form-section">
        <h3>
          Support Programs
        </h3>

        <p >
          Select the support programs your institution offers.
        </p>

        <div >
          {supportProgramOptions.map((option) => (
            <label
              key={option}
             
            >
              <input
                type="checkbox"
                value={option}
                {...register("supportPrograms")}
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
      </section>

      {/* Documents */}
      <section className="see-form-section">
        <h3 >
          Supporting Documents
        </h3>

        <div>
          <label>
            Registration / License Document
          </label>
          <input
            type="file"
            accept=".pdf,.jpg,.jpeg,.png"
            {...register("registrationDocument")}
          />
        </div>

        <div>
          <label >
            TIN Document
          </label>
          <input
            type="file"
            accept=".pdf,.jpg,.jpeg,.png"
            {...register("tinDocument")}
          />
        </div>
      </section>

    </div>
  );
}
