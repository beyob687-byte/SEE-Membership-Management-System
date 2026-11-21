
"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { smallInstitutionSchema } from "./smallSchema";
import type {
  SmallInstitutionFormData,
  SmallInstitutionFormProps,
} from "./smallTypes";

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
    formState: { errors },
  } = useForm<SmallInstitutionFormData>({
    resolver: zodResolver(smallInstitutionSchema),
    defaultValues: value,
  });

  useEffect(() => {
    const subscription = watch((data) => {
      onChange(data as SmallInstitutionFormData);
    });

    return () => subscription.unsubscribe();
  }, [watch, onChange]);

  return (
    <div>

      {/* Institution Information */}
      <section >
        <h3 >
          Institution Information
        </h3>

        <div>
          <label >
            Institution / Organization Name *
          </label>
          <input
            {...register("institutionName")}
            placeholder="Enter institution name"
          />
          {errors.institutionName && (
            <p >
              {errors.institutionName.message}
            </p>
          )}
        </div>

        <div>
          <label >
            Institution Type *
          </label>
          <select
            {...register("institutionType")}
          >
            <option value="">Select institution type</option>
            {institutionTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {errors.institutionType && (
            <p>
              {errors.institutionType.message}
            </p>
          )}
        </div>

        <div>
          <label >
            Registration Type *
          </label>
          <input
            {...register("registrationType")}
            placeholder="e.g. Local CSO, PLC, NGO"
          />
          {errors.registrationType && (
            <p>
              {errors.registrationType.message}
            </p>
          )}
        </div>

        <div>
          <label>
            Sector *
          </label>
          <input
            {...register("sector")}
            placeholder="Enter sector or industry"
          />
          {errors.sector && (
            <p className="text-sm text-red-500">
              {errors.sector.message}
            </p>
          )}
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
            rows={3}
            placeholder="Enter institution address"
          />
          {errors.address && (
            <p >
              {errors.address.message}
            </p>
          )}
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
      <section className="space-y-4">
        <h3 >
          Contact Person
        </h3>

        <div>
          <label>
            Contact Person Name *
          </label>
          <input
            {...register("contactPersonName")}
            placeholder="Full name"
          />
          {errors.contactPersonName && (
            <p >
              {errors.contactPersonName.message}
            </p>
          )}
        </div>

        <div>
          <label>
            Position / Designation *
          </label>
          <input
            {...register("contactPersonPosition")}
            placeholder="Position in the institution"
          />
          {errors.contactPersonPosition && (
            <p >
              {errors.contactPersonPosition.message}
            </p>
          )}
        </div>
      </section>

      {/* Institutional Focus */}
      <section>
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

          <div >
            {collaborationOptions.map((option) => (
              <label
                key={option}
              >
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
      <section >
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
      <section >
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
