
"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { studentSchema } from "./studentSchema";
import type { StudentFormProps, StudentFormData } from "./studentTypes";
import {
  getRegistrationFieldAttributes,
  RegistrationFieldError,
  useRegistrationFieldErrors,
} from "../../../Common form/registrationValidation";

const volunteerServices = [
  "Event Ushering",
  "Content Creation",
  "Surveying",
  "Tech Support",
];

export default function StudentForm({ value, onChange }: StudentFormProps) {
  const {
    register,
    watch,
  } = useForm<StudentFormData>({
    resolver: zodResolver(studentSchema),
    defaultValues: value,
  });
  const fieldErrors = useRegistrationFieldErrors();

  useEffect(() => {
    const subscription = watch((data) => {
      onChange(data as StudentFormData);
    });

    return () => subscription.unsubscribe();
  }, [watch, onChange]);

  return (
    <div className="see-membership-form see-individual-form">
      <div className="see-form-header">
        <h2>
          Student Membership Information
        </h2>
        <p>
          Complete your education, project, and membership information.
        </p>
      </div>

      {/* Education Information */}
      <section className="see-form-section">
        <h3>
          Educational Information
        </h3>

        <div>
          <label>
            University / College *
          </label>
          <input
            {...register("institutionName")}
            {...getRegistrationFieldAttributes("institutionName", fieldErrors.institutionName)}
            placeholder="Enter your university or college"
          />
          <RegistrationFieldError
            fieldName="institutionName"
            error={fieldErrors.institutionName}
          />
        </div>

        <div>
          <label>
            Department / Field of Study *
          </label>
          <input
            {...register("departmentOrField")}
            {...getRegistrationFieldAttributes("departmentOrField", fieldErrors.departmentOrField)}
            placeholder="Enter your department or field"
          />
          <RegistrationFieldError
            fieldName="departmentOrField"
            error={fieldErrors.departmentOrField}
          />
        </div>

        <div>
          <label>
            Graduation Year *
          </label>
          <input
            type="number"
            {...register("graduationYear", {
              setValueAs: (v) => v === "" ? "" : Number(v),
            })}
            {...getRegistrationFieldAttributes("graduationYear", fieldErrors.graduationYear)}
            placeholder="Expected graduation year"
          />
          <RegistrationFieldError
            fieldName="graduationYear"
            error={fieldErrors.graduationYear}
          />
        </div>

        <div>
          <label>
            Student ID *
          </label>
          <input
            {...register("studentId")}
            {...getRegistrationFieldAttributes("studentId", fieldErrors.studentId)}
            placeholder="Enter your student ID"
          />
          <RegistrationFieldError
            fieldName="studentId"
            error={fieldErrors.studentId}
          />
        </div>
      </section>

      {/* Project Information */}
      <section className="see-form-section">
        <h3>
          Project Information
        </h3>

        <div>
          <label>
            Project Name
          </label>
          <input
            {...register("projectName")}
            placeholder="Enter your project name"
          />
        </div>

        <div>
          <label>
            Project Summary
          </label>
          <textarea
            {...register("projectDescription")}
            rows={4}
            placeholder="Describe your project or idea"
          />
        </div>
      </section>

      {/* Supporting Documents */}
      <section className="see-form-section">
        <h3>
          Supporting Documents
        </h3>

        <div>
          <label>
            Student ID / Enrollment Proof
          </label>
          <input
            type="file"
            accept=".pdf,.jpg,.jpeg,.png"
            {...register("studentIdDocument")}
          />
        </div>
      </section>

      {/* Payment / Volunteer */}
      <section className="see-form-section">
        <h3>
          Membership Contribution
        </h3>

        <div className="see-form-callout">
          <p>Annual Student Membership</p>
          <p>
            Proposed contribution: ETB 800 per year
          </p>
          <p>
            The volunteer alternative is subject to SEE confirmation.
          </p>
        </div>

        <div className="see-form-field">
          <label>
            Choose your membership contribution *
          </label>

          <div className="see-form-choice-list">
            <label className="see-form-choice">
              <input
                type="radio"
                value="payment"
                {...register("volunteerTrack", {
                  setValueAs: (v) => v === "true",
                })}
                onChange={() => onChange({
                  ...value,
                  volunteerTrack: false,
                })}
              />
              <div>
                <p>Annual Payment</p>
                <p>
                  ETB 800 (proposed)
                </p>
              </div>
            </label>

            <label className="see-form-choice">
              <input
                type="radio"
                value="volunteer"
                checked={value.volunteerTrack === true}
                onChange={() => onChange({
                  ...value,
                  volunteerTrack: true,
                })}
              />
              <div className="see-form-callout">
                <p>Volunteer Service</p>
                <p>
                  Free option — subject to SEE approval
                </p>
              </div>
            </label>
          </div>
        </div>

        {value.volunteerTrack && (
          <div className="see-form-choice-list">
            <h4>Volunteer Commitment</h4>

            <p>
              Students choosing the volunteer option are expected
              to contribute 15–20 hours annually.
            </p>

            <div>
              <label>
                Preferred Volunteer Service *
              </label>

              <div>
                {volunteerServices.map((service) => (
                  <label
                    key={service}
                  >
                    <input
                      type="checkbox"
                      value={service}
                      {...register("preferredVolunteerServices")}
                    />
                    {service}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label>
                Volunteer Hours Commitment
              </label>
              <input
                type="number"
                {...register("volunteerHours", {
                  setValueAs: (v) => v === "" ? "" : Number(v),
                })}
                placeholder="15–20 hours per year"
              />
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
