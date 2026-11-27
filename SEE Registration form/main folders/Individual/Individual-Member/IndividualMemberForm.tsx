
"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { individualMemberSchema } from "./individualMemberSchema";
import type {
  IndividualMemberFormData,
  IndividualMemberFormProps,
} from "./individualMemberTypes";
import {
  getRegistrationFieldAttributes,
  RegistrationFieldError,
  useRegistrationFieldErrors,
} from "../../../Common form/registrationValidation";

const supportOptions = [
  "Networking & Collaboration",
  "Capacity Building & Training",
  "Policy Advocacy",
  "Knowledge Sharing",
  "Mentorship",
  "Technical & Advisory Support",
  "Partnership Development",
  "Funding & Donor Connections",
];

const skillOptions = [
  "Business Development",
  "Social Entrepreneurship",
  "Marketing & Communication",
  "Finance & Accounting",
  "Project Management",
  "Research",
  "Monitoring & Evaluation",
  "Technology & IT",
  "Legal & Policy",
  "Mentorship & Coaching",
];

export default function IndividualMemberForm({
  value,
  onChange,
}: IndividualMemberFormProps) {
  const {
    register,
    watch,
  } = useForm<IndividualMemberFormData>({
    resolver: zodResolver(individualMemberSchema),
    defaultValues: value,
  });
  const fieldErrors = useRegistrationFieldErrors();

  useEffect(() => {
    const subscription = watch((data) => {
      onChange(data as IndividualMemberFormData);
    });

    return () => subscription.unsubscribe();
  }, [watch, onChange]);

  return (
    <div className="see-membership-form see-individual-form">

      {/* Professional Information */}
      <section className="see-form-section">
        <h3>
          Professional Information
        </h3>

        <div>
          <label>
            Profession *
          </label>
          <input
            {...register("profession")}
            {...getRegistrationFieldAttributes("profession", fieldErrors.profession)}
            placeholder="e.g. Business Consultant, Researcher"
          />
          <RegistrationFieldError
            fieldName="profession"
            error={fieldErrors.profession}
          />
        </div>

        <div>
          <label>
            Organization / Workplace
          </label>
          <input
            {...register("organization")}
            placeholder="Organization or workplace"
          />
        </div>

        <div>
          <label>
            Job Title
          </label>
          <input
            {...register("jobTitle")}
            placeholder="Your current position"
          />
        </div>

        <div>
          <label>
            Area of Expertise *
          </label>
          <textarea
            {...register("areaOfExpertise")}
            {...getRegistrationFieldAttributes("areaOfExpertise", fieldErrors.areaOfExpertise)}
            rows={3}
            placeholder="Describe your expertise"
          />
          <RegistrationFieldError
            fieldName="areaOfExpertise"
            error={fieldErrors.areaOfExpertise}
          />
        </div>

        <div>
          <label>
            Years of Experience
          </label>
          <input
            type="number"
            {...register("experienceYears", {
              setValueAs: (v) => v === "" ? "" : Number(v),
            })}
            {...getRegistrationFieldAttributes("experienceYears", fieldErrors.experienceYears)}
            min="0"
            placeholder="Years of experience"
          />
          <RegistrationFieldError
            fieldName="experienceYears"
            error={fieldErrors.experienceYears}
          />
        </div>
      </section>

      {/* Skills */}
      <section className="see-form-section">
        <h3>
          Skills & Expertise
        </h3>

        <p>
          Select the skills you can contribute to the SEE ecosystem.
        </p>

        <div className="see-form-grid see-form-grid--choices">
          {skillOptions.map((skill) => (
            <label
              key={skill}
              className="see-form-choice"
            >
              <input
                type="checkbox"
                value={skill}
                {...register("skills")}
              />
              <span>{skill}</span>
            </label>
          ))}
        </div>
      </section>

      {/* Membership Interests */}
      <section className="see-form-section">
        <h3>
          Areas of Interest
        </h3>

        <p>
          Select the areas where you would like to participate
          or receive support through SEE.
        </p>

        <div className="see-form-grid see-form-grid--choices">
          {supportOptions.map((option) => (
            <label
              key={option}
              className="see-form-choice"
            >
              <input
                type="checkbox"
                value={option}
                {...register("supportInterests")}
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
      </section>

    </div>
  );
}
