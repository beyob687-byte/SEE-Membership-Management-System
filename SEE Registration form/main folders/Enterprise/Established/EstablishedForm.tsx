
"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import type { EstablishedFormData } from "./establishedTypes";
import { establishedSchema } from "./establishedSchema";
import {
  getRegistrationFieldAttributes,
  RegistrationFieldError,
  useRegistrationFieldErrors,
} from "../../../Common form/registrationValidation";

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
  } = useForm<EstablishedFormData>({
    resolver: zodResolver(establishedSchema),
    defaultValues: value,
    mode: "onBlur",
  });
  const fieldErrors = useRegistrationFieldErrors();

  useEffect(() => {
    const subscription = watch((data) => {
      onChange(data as EstablishedFormData);
    });

    return () => subscription.unsubscribe();
  }, [watch, onChange]);

  return (
    <div className="see-membership-form see-enterprise-form">
      {/* Enterprise Profile */}
      <section className="see-form-section">
        <div className="see-form-intro">
          <h2>
            Enterprise Profile
          </h2>
          <p>
            Tell us about your established enterprise.
          </p>
        </div>

        <div className="see-form-field">
          <label>Company / Enterprise Name *</label>
          <input
            {...register("companyName")}
            {...getRegistrationFieldAttributes("companyName", fieldErrors.companyName)}
            placeholder="Enter enterprise name"
          />
          <RegistrationFieldError
            fieldName="companyName"
            error={fieldErrors.companyName}
          />
        </div>

        <div className="see-form-grid see-form-grid--2">
          <div>
            <label>Year Established *</label>
            <input
              type="number"
              {...register("yearEstablished", {
                setValueAs: (input) =>
                  input === "" ? "" : Number(input),
              })}
              {...getRegistrationFieldAttributes("yearEstablished", fieldErrors.yearEstablished)}
              placeholder="e.g. 2020"
            />
            <RegistrationFieldError
              fieldName="yearEstablished"
              error={fieldErrors.yearEstablished}
            />
          </div>

          <div className="see-form-field">
            <label>Legal Status *</label>
            <select
              {...register("legalStatus")}
              {...getRegistrationFieldAttributes("legalStatus", fieldErrors.legalStatus)}
            >
              <option value="">Select legal status</option>
              {legalStatusOptions.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
            <RegistrationFieldError
              fieldName="legalStatus"
              error={fieldErrors.legalStatus}
            />
          </div>
        </div>

        <div className="see-form-field">
          <label>Sector *</label>
          <input
            {...register("sector")}
            {...getRegistrationFieldAttributes("sector", fieldErrors.sector)}
            placeholder="Enter your business sector"
          />
          <RegistrationFieldError
            fieldName="sector"
            error={fieldErrors.sector}
          />
        </div>

        <div className="see-form-field">
          <label>Enterprise Address *</label>
          <input
            {...register("address")}
            {...getRegistrationFieldAttributes("address", fieldErrors.address)}
            placeholder="Enter your enterprise address"
          />
          <RegistrationFieldError
            fieldName="address"
            error={fieldErrors.address}
          />
        </div>
      </section>

      {/* Contact Information */}
      <section className="see-form-section">
        <h2>
          Contact Information
        </h2>

        <div className="see-form-grid see-form-grid--2">
          <div className="see-form-field">
            <label>Contact Person Name *</label>
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

          <div className="see-form-field">
            <label>Position *</label>
            <input
              {...register("contactPersonPosition")}
              {...getRegistrationFieldAttributes("contactPersonPosition", fieldErrors.contactPersonPosition)}
              placeholder="e.g. Founder, Manager"
            />
            <RegistrationFieldError
              fieldName="contactPersonPosition"
              error={fieldErrors.contactPersonPosition}
            />
          </div>
        </div>

        <div className="see-form-field">
          <label>Website / Social Media Links</label>
          <input
            {...register("websiteOrSocialLinks")}
            placeholder="Enter website or social media links"
          />
        </div>
      </section>

      {/* Social Impact */}
      <section className="see-form-section">
        <div className="see-form-intro">
          <h2>
            Social Enterprise Information
          </h2>
          <p>
            Explain the social or environmental impact of your enterprise.
          </p>
        </div>

        <div className="see-form-field">
          <label>
            What social or environmental problem does your enterprise
            address? *
          </label>
          <textarea
            {...register("socialEnvironmentalProblem")}
            {...getRegistrationFieldAttributes("socialEnvironmentalProblem", fieldErrors.socialEnvironmentalProblem)}
            rows={4}
            placeholder="Describe the problem your enterprise addresses..."
          />
          <RegistrationFieldError
            fieldName="socialEnvironmentalProblem"
            error={fieldErrors.socialEnvironmentalProblem}
          />
        </div>

        <div className="see-form-field">
          <label>
            Who are your target beneficiaries? *
          </label>
          <textarea
            {...register("targetBeneficiaries")}
            {...getRegistrationFieldAttributes("targetBeneficiaries", fieldErrors.targetBeneficiaries)}
            rows={3}
            placeholder="Describe the people or communities benefiting..."
          />
          <RegistrationFieldError
            fieldName="targetBeneficiaries"
            error={fieldErrors.targetBeneficiaries}
          />
        </div>

        <div className="see-form-callout">
          <p>
            Does your enterprise reinvest at least 50% of its profit into
            its social or environmental mission?
          </p>

          <label>
            <input
              type="checkbox"
              {...register("profitReinvestment")}
            />
            Yes, our enterprise reinvests at least 50% of its profit.
          </label>
        </div>
      </section>

      {/* Self Assessment */}
      <section className="see-form-section">
        <div className="see-form-intro">
          <h2>
            Social Enterprise Self-Assessment
          </h2>
          <p>
            Review the characteristics and select those that apply to
            your enterprise.
          </p>
        </div>

        <div className="see-form-choice-list">
          {socialEnterpriseCharacteristics.map((item) => (
            <label
              key={item.id}
              className="see-form-choice"
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
      <section className="see-form-section">
        <div className="see-form-intro">
          <h2>
            Supporting Documents
          </h2>
          <p>
            Upload documents supporting your enterprise registration.
          </p>
        </div>

        <div className="see-form-field">
          <label>
            Commercial Registration Document
          </label>
          <input
            type="file"
            accept=".pdf,.jpg,.jpeg,.png"
            {...getRegistrationFieldAttributes("commercialRegistration", fieldErrors.commercialRegistration)}
            onChange={(event) =>
              setValue(
                "commercialRegistration",
                event.target.files?.[0] ?? null,
                { shouldValidate: true }
              )
            }
          />
        </div>

        <div className="see-form-field">
          <label>TIN Document</label>
          <input
            type="file"
            accept=".pdf,.jpg,.jpeg,.png"
            {...getRegistrationFieldAttributes("tinDocument", fieldErrors.tinDocument)}
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
