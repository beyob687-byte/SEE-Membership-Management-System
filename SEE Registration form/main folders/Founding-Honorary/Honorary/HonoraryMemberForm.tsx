"use client";

import type { HonoraryMemberFormProps } from "./honoraryMemberTypes";

export default function HonoraryMemberForm({
  value,
  onChange,
}: HonoraryMemberFormProps) {
  const handleChange = (
    field: keyof typeof value,
    fieldValue: string
  ) => {
    onChange({
      ...value,
      [field]: fieldValue,
    });
  };

  return (
    <div className="see-membership-form see-honorary-form">
      <div className="see-form-header">
        <h3>
          Honorary Member Recognition
        </h3>

        <p>
          This section collects information about the nominee
          and their contributions to Social Enterprise Ethiopia.
        </p>
      </div>

      {/* Nominee Name */}
      <div>
        <label>
          Nominee Full Name
        </label>

        <input
          type="text"
          value={value.nomineeName}
          onChange={(e) =>
            handleChange("nomineeName", e.target.value)
          }
          placeholder="Enter nominee full name"
        />
      </div>

      {/* Organization */}
      <div>
        <label>
          Organization (if applicable)
        </label>

        <input
          type="text"
          value={value.organization}
          onChange={(e) =>
            handleChange("organization", e.target.value)
          }
          placeholder="Enter organization name"
        />
      </div>

      {/* Recognition Reason */}
      <div>
        <label>
          Reason for Honorary Recognition
        </label>

        <textarea
          value={value.recognitionReason}
          onChange={(e) =>
            handleChange("recognitionReason", e.target.value)
          }
          placeholder="Explain why this person is being considered for honorary membership"
          rows={4}
        />
      </div>

    {/* Contribution to SEE */}
      <div>
        <label>
          Contribution to Social Enterprise Ethiopia
        </label>

        <textarea
          value={value.contributionToSEE}
          onChange={(e) =>
            handleChange("contributionToSEE", e.target.value)
          }
          placeholder="Describe the nominee's contributions to SEE's establishment, growth, or development"
          rows={5}
        />
      </div>

      {/* Membership Fee Information */}
      <div className="see-form-callout">
        <h4>
          Membership Fee
        </h4>

        <p>
          Honorary membership fees and payment conditions
          are subject to confirmation by SEE.
        </p>
      </div>
    </div>
  );
}