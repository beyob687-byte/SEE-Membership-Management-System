
"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import type { EstablishedFormData } from "./establishedTypes";
import { establishedSchema } from "./establishedSchema";

type EstablishedFormProps = {
  value: EstablishedFormData;
  onChange: (data: EstablishedFormData) => void;
};

const legalStatusOptions = [
  "PLC",
  "Sole Proprietorship",
  "Cooperative",
  "CSO",
];

const socialEnterpriseCharacteristics = [
  {
    id: "mission",
    title: "Social or Environmental Mission",
    description:
      "The enterprise primarily exists to solve a social or environmental problem.",
  },
  {
    id: "market",
    title: "Market-Based Revenue Model",
    description:
      "The enterprise earns revenue by selling products or services.",
  },
  {
    id: "reinvestment",
    title: "Profit Reinvestment",
    description:
      "The enterprise reinvests a significant portion of its profit into its mission.",
  },
  {
    id: "governance",
    title: "Transparent Governance",
    description:
      "The enterprise follows transparent and ethical management practices.",
  },
];

export default function EstablishedForm({
  value,
  onChange,
}: EstablishedFormProps) {
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useForm<EstablishedFormData>({
    resolver: zodResolver(establishedSchema),
    defaultValues: value,
    mode: "onBlur",
  });

  useEffect(() => {
    const subscription = watch((data) => {
      onChange(data as EstablishedFormData);
    });

    return () => subscription.unsubscribe();
  }, [watch, onChange]);

  const inputClass =
    "w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100";

  const labelClass = "mb-1 block text-sm font-medium text-gray-700";

  const errorClass = "mt-1 text-xs text-red-600";

  return (
    <div className="space-y-8">
      {/* Enterprise Profile */}
      <section className="space-y-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            Enterprise Profile
          </h2>
          <p className="text-sm text-gray-500">
            Tell us about your established enterprise.
          </p>
        </div>

        <div>
          <label className={labelClass}>Company / Enterprise Name *</label>
          <input
            {...register("companyName")}
            className={inputClass}
            placeholder="Enter enterprise name"
          />
          {errors.companyName && (
            <p className={errorClass}>{errors.companyName.message}</p>
          )}
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className={labelClass}>Year Established *</label>
            <input
              type="number"
              {...register("yearEstablished", {
                setValueAs: (input) =>
                  input === "" ? "" : Number(input),
              })}
              className={inputClass}
              placeholder="e.g. 2020"
            />
            {errors.yearEstablished && (
              <p className={errorClass}>
                {errors.yearEstablished.message}
              </p>
            )}
          </div>

          <div>
            <label className={labelClass}>Legal Status *</label>
            <select
              {...register("legalStatus")}
              className={inputClass}
            >
              <option value="">Select legal status</option>
              {legalStatusOptions.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
            {errors.legalStatus && (
              <p className={errorClass}>{errors.legalStatus.message}</p>
            )}
          </div>
        </div>

        <div>
          <label className={labelClass}>Sector *</label>
          <input
            {...register("sector")}
            className={inputClass}
            placeholder="Enter your business sector"
          />
          {errors.sector && (
            <p className={errorClass}>{errors.sector.message}</p>
          )}
        </div>

        <div>
          <label className={labelClass}>Enterprise Address *</label>
          <input
            {...register("address")}
            className={inputClass}
            placeholder="Enter your enterprise address"
          />
          {errors.address && (
            <p className={errorClass}>{errors.address.message}</p>
          )}
        </div>
      </section>

      {/* Contact Information */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-900">
          Contact Information
        </h2>

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className={labelClass}>Contact Person Name *</label>
            <input
              {...register("contactPersonName")}
              className={inputClass}
              placeholder="Full name"
            />
            {errors.contactPersonName && (
              <p className={errorClass}>
                {errors.contactPersonName.message}
              </p>
            )}
          </div>

          <div>
            <label className={labelClass}>Position *</label>
            <input
              {...register("contactPersonPosition")}
              className={inputClass}
              placeholder="e.g. Founder, Manager"
            />
            {errors.contactPersonPosition && (
              <p className={errorClass}>
                {errors.contactPersonPosition.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <label className={labelClass}>Website / Social Media Links</label>
          <input
            {...register("websiteOrSocialLinks")}
            className={inputClass}
            placeholder="Enter website or social media links"
          />
        </div>
      </section>

      {/* Social Impact */}
      <section className="space-y-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            Social Enterprise Information
          </h2>
          <p className="text-sm text-gray-500">
            Explain the social or environmental impact of your enterprise.
          </p>
        </div>

        <div>
          <label className={labelClass}>
            What social or environmental problem does your enterprise
            address? *
          </label>
          <textarea
            {...register("socialEnvironmentalProblem")}
            rows={4}
            className={inputClass}
            placeholder="Describe the problem your enterprise addresses..."
          />
          {errors.socialEnvironmentalProblem && (
            <p className={errorClass}>
              {errors.socialEnvironmentalProblem.message}
            </p>
          )}
        </div>

        <div>
          <label className={labelClass}>
            Who are your target beneficiaries? *
          </label>
          <textarea
            {...register("targetBeneficiaries")}
            rows={3}
            className={inputClass}
            placeholder="Describe the people or communities benefiting..."
          />
          {errors.targetBeneficiaries && (
            <p className={errorClass}>
              {errors.targetBeneficiaries.message}
            </p>
          )}
        </div>

        <div className="rounded-lg border border-gray-200 p-4">
          <p className="text-sm font-medium text-gray-800">
            Does your enterprise reinvest at least 50% of its profit into
            its social or environmental mission?
          </p>

          <label className="mt-3 flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              {...register("profitReinvestment")}
              className="h-4 w-4"
            />
            Yes, our enterprise reinvests at least 50% of its profit.
          </label>
        </div>
      </section>

      {/* Self Assessment */}
      <section className="space-y-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            Social Enterprise Self-Assessment
          </h2>
          <p className="text-sm text-gray-500">
            Review the characteristics and select those that apply to
            your enterprise.
          </p>
        </div>

        <div className="space-y-3">
          {socialEnterpriseCharacteristics.map((item) => (
            <label
              key={item.id}
              className="flex cursor-pointer gap-3 rounded-lg border border-gray-200 p-4 hover:bg-gray-50"
            >
              <input
                type="checkbox"
                value={item.id}
                {...register("socialEnterpriseCharacteristics")}
                className="mt-1 h-4 w-4"
              />

              <span>
                <span className="block text-sm font-medium text-gray-800">
                  {item.title}
                </span>
                <span className="mt-1 block text-sm text-gray-500">
                  {item.description}
                </span>
              </span>
            </label>
          ))}
        </div>
      </section>

      {/* Supporting Documents */}
      <section className="space-y-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            Supporting Documents
          </h2>
          <p className="text-sm text-gray-500">
            Upload documents supporting your enterprise registration.
          </p>
        </div>

        <div>
          <label className={labelClass}>
            Commercial Registration Document
          </label>
          <input
            type="file"
            accept=".pdf,.jpg,.jpeg,.png"
            className={inputClass}
            onChange={(event) =>
              setValue(
                "commercialRegistration",
                event.target.files?.[0] ?? null,
                { shouldValidate: true }
              )
            }
          />
        </div>

        <div>
          <label className={labelClass}>TIN Document</label>
          <input
            type="file"
            accept=".pdf,.jpg,.jpeg,.png"
            className={inputClass}
            onChange={(event) =>
              setValue(
                "tinDocument",
                event.target.files?.[0] ?? null,
                { shouldValidate: true }
              )
            }
          />
        </div>
      </section>
    </div>
  );
}
