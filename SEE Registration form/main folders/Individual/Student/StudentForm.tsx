
"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { studentSchema } from "./studentSchema";
import type { StudentFormProps, StudentFormData } from "./studentTypes";

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
    formState: { errors },
  } = useForm<StudentFormData>({
    resolver: zodResolver(studentSchema),
    defaultValues: value,
  });

  useEffect(() => {
    const subscription = watch((data) => {
      onChange(data as StudentFormData);
    });

    return () => subscription.unsubscribe();
  }, [watch, onChange]);

  return (
    <div className="space-y-8 rounded-2xl border bg-white p-6 shadow-sm">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">
          Student Membership Information
        </h2>
        <p className="mt-2 text-sm text-gray-600">
          Complete your education, project, and membership information.
        </p>
      </div>

      {/* Education Information */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold border-b pb-2">
          Educational Information
        </h3>

        <div>
          <label className="block font-medium mb-1">
            University / College *
          </label>
          <input
            {...register("institutionName")}
            placeholder="Enter your university or college"
            className="w-full rounded-lg border p-3"
          />
          {errors.institutionName && (
            <p className="text-red-500 text-sm">
              {errors.institutionName.message}
            </p>
          )}
        </div>

        <div>
          <label className="block font-medium mb-1">
            Department / Field of Study *
          </label>
          <input
            {...register("departmentOrField")}
            placeholder="Enter your department or field"
            className="w-full rounded-lg border p-3"
          />
          {errors.departmentOrField && (
            <p className="text-red-500 text-sm">
              {errors.departmentOrField.message}
            </p>
          )}
        </div>

        <div>
          <label className="block font-medium mb-1">
            Graduation Year *
          </label>
          <input
            type="number"
            {...register("graduationYear", {
              setValueAs: (v) => v === "" ? "" : Number(v),
            })}
            placeholder="Expected graduation year"
            className="w-full rounded-lg border p-3"
          />
          {errors.graduationYear && (
            <p className="text-red-500 text-sm">
              {errors.graduationYear.message}
            </p>
          )}
        </div>

        <div>
          <label className="block font-medium mb-1">
            Student ID *
          </label>
          <input
            {...register("studentId")}
            placeholder="Enter your student ID"
            className="w-full rounded-lg border p-3"
          />
          {errors.studentId && (
            <p className="text-red-500 text-sm">
              {errors.studentId.message}
            </p>
          )}
        </div>
      </section>

      {/* Project Information */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold border-b pb-2">
          Project Information
        </h3>

        <div>
          <label className="block font-medium mb-1">
            Project Name
          </label>
          <input
            {...register("projectName")}
            placeholder="Enter your project name"
            className="w-full rounded-lg border p-3"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">
            Project Summary
          </label>
          <textarea
            {...register("projectDescription")}
            rows={4}
            placeholder="Describe your project or idea"
            className="w-full rounded-lg border p-3"
          />
        </div>
      </section>

      {/* Supporting Documents */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold border-b pb-2">
          Supporting Documents
        </h3>

        <div>
          <label className="block font-medium mb-1">
            Student ID / Enrollment Proof
          </label>
          <input
            type="file"
            accept=".pdf,.jpg,.jpeg,.png"
            {...register("studentIdDocument")}
            className="w-full rounded-lg border p-3"
          />
        </div>
      </section>

      {/* Payment / Volunteer */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold border-b pb-2">
          Membership Contribution
        </h3>

        <div className="rounded-lg bg-gray-50 p-4">
          <p className="font-medium">Annual Student Membership</p>
          <p className="text-gray-600 mt-1">
            Proposed contribution: ETB 800 per year
          </p>
          <p className="text-sm text-gray-500 mt-1">
            The volunteer alternative is subject to SEE confirmation.
          </p>
        </div>

        <div>
          <label className="block font-medium mb-2">
            Choose your membership contribution *
          </label>

          <div className="space-y-3">
            <label className="flex items-center gap-3 border rounded-lg p-4 cursor-pointer">
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
                <p className="font-medium">Annual Payment</p>
                <p className="text-sm text-gray-500">
                  ETB 800 (proposed)
                </p>
              </div>
            </label>

            <label className="flex items-center gap-3 border rounded-lg p-4 cursor-pointer">
              <input
                type="radio"
                value="volunteer"
                checked={value.volunteerTrack === true}
                onChange={() => onChange({
                  ...value,
                  volunteerTrack: true,
                })}
              />
              <div>
                <p className="font-medium">Volunteer Service</p>
                <p className="text-sm text-gray-500">
                  Free option — subject to SEE approval
                </p>
              </div>
            </label>
          </div>
        </div>

        {value.volunteerTrack && (
          <div className="space-y-4 rounded-lg border border-blue-200 bg-blue-50 p-4">
            <h4 className="font-semibold">Volunteer Commitment</h4>

            <p className="text-sm text-gray-700">
              Students choosing the volunteer option are expected
              to contribute 15–20 hours annually.
            </p>

            <div>
              <label className="block font-medium mb-2">
                Preferred Volunteer Service *
              </label>

              <div className="space-y-2">
                {volunteerServices.map((service) => (
                  <label
                    key={service}
                    className="flex items-center gap-2"
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
              <label className="block font-medium mb-1">
                Volunteer Hours Commitment
              </label>
              <input
                type="number"
                {...register("volunteerHours", {
                  setValueAs: (v) => v === "" ? "" : Number(v),
                })}
                placeholder="15–20 hours per year"
                className="w-full rounded-lg border p-3"
              />
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
