"use client";

import type { FoundingMemberFormProps } from "./foundingMemberTypes";

export default function FoundingMemberForm({
  value,
  onChange,
}: FoundingMemberFormProps) {
  const updateField = (
    field: keyof typeof value,
    fieldValue: string
  ) => {
    onChange({
      ...value,
      [field]: fieldValue,
    });
  };

  return (
    <div className="see-membership-form see-founding-form">
      <div className="see-form-header">
        <h2>
          Founding Member Information
        </h2>
        <p>
          Please provide information about your founding contribution and involvement in SEE.
        </p>
      </div>

      {/* Organization Name */}
      <div>
        <label>
          Organization Name
        </label>
        <input
          type="text"
          value={value.organizationName}
          onChange={(e) =>
            updateField("organizationName", e.target.value)
          }
          placeholder="Enter organization name"
        />
      </div>

      {/* Founding Status */}
      <div>
        <label>
          Founding Status
        </label>
        <input
          type="text"
          value={value.foundingStatus}
          onChange={(e) =>
            updateField("foundingStatus", e.target.value)
          }
          placeholder="Enter founding status"
        />
      </div>

      {/* Year Joined Inception Team */}
      <div>
        <label>
          Year Joined Inception Team
        </label>
        <input
          type="text"
          value={value.yearJoinedInceptionTeam}
          onChange={(e) =>
            updateField("yearJoinedInceptionTeam", e.target.value)
          }
          placeholder="Enter year"
        />
      </div>

      {/* Executive Position / Board Role */}
      <div>
        <label>
          Executive Position / Board Role
        </label>
        <input
          type="text"
          value={value.executivePositionOrBoardRole}
          onChange={(e) =>
            updateField("executivePositionOrBoardRole", e.target.value)
          }
          placeholder="Enter executive position or board role"
        />
      </div>

      {/* Historical Governance Role */}
      <div>
        <label>
          Historical Governance Role
        </label>
        <textarea
          value={value.historicalGovernanceRole}
          onChange={(e) =>
            updateField("historicalGovernanceRole", e.target.value)
          }
          placeholder="Describe your historical governance role in SEE"
          rows={4}
        />
      </div>

      {/* Strategic Track Record */}
      <div>
        <label>
          Strategic Track Record in SEE
        </label>
        <textarea
          value={value.strategicTrackRecord}
          onChange={(e) =>
            updateField("strategicTrackRecord", e.target.value)
          }
          placeholder="Describe your strategic contribution and track record in SEE"
          rows={4}
        />
      </div>

      {/* Founding Member Fee */}
      <div className="see-form-callout">
        <h3>
          Annual Sustaining Contribution
        </h3>
        <p>
          ETB 10,000 per year
        </p>
      </div>
    </div>
  );
}