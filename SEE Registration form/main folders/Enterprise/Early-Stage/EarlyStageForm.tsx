
"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import type { EarlyStageFormData } from "./earlyStageTypes";
import { earlyStageSchema } from "./earlyStageSchema";

type EarlyStageFormProps = {
  value: EarlyStageFormData;
  onChange: (data: EarlyStageFormData) => void;
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

export default function EarlyStageForm({
  value,
  onChange,
}: EarlyStageFormProps) {
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useForm<EarlyStageFormData>({
    resolver: zodResolver(earlyStageSchema),
    defaultValues: value,
    mode: "onBlur",
  });

  useEffect(() => {
    const subscription = watch((data) => {
      onChange(data as EarlyStageFormData);
    });

    return () => subscription.unsubscribe();
  }, [watch, onChange]);

  const inputClass =
    "w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100";

  const labelClass = "mb-1 block text-sm font-medium text-gray-700";

  const errorClass = "mt-1 text-xs text-red-600";

  return (
    <div >
      <section >
        <div>
          <h2>
            Enterprise Profile
          </h2>
          <p >
            Tell us about your enterprise.
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

        <div >
          <div>
            <label className={labelClass}>Year Established *</label>
            <input
              type="number"
              {...register("yearEstablished", {
                setValueAs: (input) =>
                  input === "" ? "" : Number(input),
              })}
              className={inputClass}
              placeholder="e.g. 2025"
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
      <section>
        <div>
          <h2>
            Contact Information
          </h2>
        </div>

        <div >
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

      {/* Social Enterprise Information */}
      <section >
        <div>
          <h2 >
            Social Enterprise Information
          </h2>
          <p >
            Explain the social or environmental impact of your enterprise.
          </p><br />
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
            placeholder="Describe the problem your enterprise is working to solve..."
          /> <br /><br />
          {errors.socialEnvironmentalProblem && (
            <p className={errorClass}>
              {errors.socialEnvironmentalProblem.message}
            </p> 
          )}
        </div>

        <div>
          <label className={labelClass}>Who are your target beneficiaries? *</label>
          <textarea
            {...register("targetBeneficiaries")}
            rows={3}
            className={inputClass}
            placeholder="Describe the people or communities benefiting from your work..."
          />
          {errors.targetBeneficiaries && (
            <p className={errorClass}>
              {errors.targetBeneficiaries.message}
            </p>
          )}
        </div>

        <div >
          <p >
            Does your enterprise reinvest at least 50% of its profit into
            its social or environmental mission?
          </p>

          <label >
            <input
              type="checkbox"
              {...register("profitReinvestment")}
             
            />
            Yes, our enterprise reinvests at least 50% of its profit.
          </label>
          <label >
            <br />
            <input
              type="checkbox"
              {...register("profitReinvestment")}
             
            /> 
            No, our enterprise reinvests below  50% of its profit.
          </label>
        </div>
      </section>

      {/* Self Assessment */}
      <section>
        <div>
          <h2 >
            Social Enterprise Self-Assessment
          </h2>
          <p >
            Review the characteristics below and select those that apply
            to your enterprise.
          </p>
        </div>

        <div>
          {socialEnterpriseCharacteristics.map((item) => (
            <label
              key={item.id}
            >
              <input
                type="checkbox"
                value={item.id}
                {...register("socialEnterpriseCharacteristics")}
              />

              <span>
                <span>
                  {item.title}
                </span>
                <span>
                  {item.description}
                </span>
              </span>
            </label>
          ))}
        </div>
      </section>

      {/* Supporting Documents */}
      <section >
        <div>
          <h2 >
            Supporting Documents
          </h2>
          <p >
            Upload the documents that support your enterprise registration.
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
