
"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { individualMemberSchema } from "./individualMemberSchema";
import type {
  IndividualMemberFormData,
  IndividualMemberFormProps,
} from "./individualMemberTypes";

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
    formState: { errors },
  } = useForm<IndividualMemberFormData>({
    resolver: zodResolver(individualMemberSchema),
    defaultValues: value,
  });

  useEffect(() => {
    const subscription = watch((data) => {
      onChange(data as IndividualMemberFormData);
    });

    return () => subscription.unsubscribe();
  }, [watch, onChange]);

  return (
    <div className="space-y-8 rounded-2xl border bg-white p-6 shadow-sm">

      {/* Professional Information */}
      <section className="space-y-4">
        <h3 className="border-b pb-2 text-lg font-semibold">
          Professional Information
        </h3>

        <div>
          <label className="mb-1 block font-medium">
            Profession *
          </label>
          <input
            {...register("profession")}
            placeholder="e.g. Business Consultant, Researcher"
            className="w-full rounded-lg border p-3"
          />
          {errors.profession && (
            <p className="text-sm text-red-500">
              {errors.profession.message}
            </p>
          )}
        </div>

        <div>
          <label className="mb-1 block font-medium">
            Organization / Workplace
          </label>
          <input
            {...register("organization")}
            placeholder="Organization or workplace"
            className="w-full rounded-lg border p-3"
          />
        </div>

        <div>
          <label className="mb-1 block font-medium">
            Job Title
          </label>
          <input
            {...register("jobTitle")}
            placeholder="Your current position"
            className="w-full rounded-lg border p-3"
          />
        </div>

        <div>
          <label className="mb-1 block font-medium">
            Area of Expertise *
          </label>
          <textarea
            {...register("areaOfExpertise")}
            rows={3}
            placeholder="Describe your expertise"
            className="w-full rounded-lg border p-3"
          />
          {errors.areaOfExpertise && (
            <p className="text-sm text-red-500">
              {errors.areaOfExpertise.message}
            </p>
          )}
        </div>

        <div>
          <label className="mb-1 block font-medium">
            Years of Experience
          </label>
          <input
            type="number"
            {...register("experienceYears", {
              setValueAs: (v) => v === "" ? "" : Number(v),
            })}
            min="0"
            placeholder="Years of experience"
            className="w-full rounded-lg border p-3"
          />
          {errors.experienceYears && (
            <p className="text-sm text-red-500">
              {errors.experienceYears.message}
            </p>
          )}
        </div>
      </section>

      {/* Skills */}
      <section className="space-y-4">
        <h3 className="border-b pb-2 text-lg font-semibold">
          Skills & Expertise
        </h3>

        <p className="text-sm text-gray-600">
          Select the skills you can contribute to the SEE ecosystem.
        </p>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {skillOptions.map((skill) => (
            <label
              key={skill}
              className="flex items-center gap-3 rounded-lg border p-3"
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
      <section className="space-y-4">
        <h3 className="border-b pb-2 text-lg font-semibold">
          Areas of Interest
        </h3>

        <p className="text-sm text-gray-600">
          Select the areas where you would like to participate
          or receive support through SEE.
        </p>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {supportOptions.map((option) => (
            <label
              key={option}
              className="flex items-center gap-3 rounded-lg border p-3"
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
