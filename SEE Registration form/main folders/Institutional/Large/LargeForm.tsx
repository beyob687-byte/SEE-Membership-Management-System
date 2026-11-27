
"use client";

import type { LargeInstitutionFormProps } from "./largeTypes";
import {
  getRegistrationFieldAttributes,
  RegistrationFieldError,
  useRegistrationFieldErrors,
} from "../../../Common form/registrationValidation";

export default function LargeForm({ value, onChange }: LargeInstitutionFormProps) {
  const fieldErrors = useRegistrationFieldErrors();

  const updateField = (field: keyof typeof value, fieldValue: any) => {
    onChange({
      ...value,
      [field]: fieldValue,
    });
  };

  return (
    <div className="see-membership-form see-institutional-form">
      <h2 >
        Large Institutional Membership Form
      </h2>

      {/* Institution Information */}
      <div className="see-form-section">
        <h3 >Institution Information</h3>

        <div className="see-form-field">
          <label>
            Institution Name *
          </label>
          <input
            {...getRegistrationFieldAttributes("institutionName", fieldErrors.institutionName)}
            value={value.institutionName}
            onChange={(e) => updateField("institutionName", e.target.value)}
            placeholder="Enter institution name"
          />
          <RegistrationFieldError
            fieldName="institutionName"
            error={fieldErrors.institutionName}
          />
        </div>

        <div className="see-form-grid see-form-grid--2">
          <div className="see-form-field">
            <label >
              Institution Type *
            </label>
            <select
              {...getRegistrationFieldAttributes("institutionType", fieldErrors.institutionType)}
              value={value.institutionType}
              onChange={(e) => updateField("institutionType", e.target.value)}
            >
              <option value="">Select institution type</option>
              <option value="NGO">NGO</option>
              <option value="CSO">CSO</option>
              <option value="University">University</option>
              <option value="Government Institution">Government Institution</option>
              <option value="Private Institution">Private Institution</option>
              <option value="Other">Other</option>
            </select>
            <RegistrationFieldError
              fieldName="institutionType"
              error={fieldErrors.institutionType}
            />
          </div>

          <div className="see-form-field">
            <label >
              Registration Type *
            </label>
            <select
              {...getRegistrationFieldAttributes("registrationType", fieldErrors.registrationType)}
              value={value.registrationType}
              onChange={(e) => updateField("registrationType", e.target.value)}
            >
              <option value="">Select registration type</option>
              <option value="Registered">Registered</option>
              <option value="Unregistered">Unregistered</option>
              <option value="Government">Government</option>
              <option value="Academic">Academic</option>
            </select>
            <RegistrationFieldError
              fieldName="registrationType"
              error={fieldErrors.registrationType}
            />
          </div>
        </div>

        <div className="see-form-grid see-form-grid--2">
          <div className="see-form-field">
            <label >
              Sector *
            </label>
            <input
              {...getRegistrationFieldAttributes("sector", fieldErrors.sector)}
              value={value.sector}
              onChange={(e) => updateField("sector", e.target.value)}
              placeholder="e.g. Education, Agriculture, Technology"
            />
            <RegistrationFieldError
              fieldName="sector"
              error={fieldErrors.sector}
            />
          </div>

          <div className="see-form-field">
            <label >
              Year Established
            </label>
            <input
              type="number"
              value={value.yearEstablished}
              onChange={(e) =>
                updateField(
                  "yearEstablished",
                  e.target.value === "" ? "" : Number(e.target.value)
                )
              }
              placeholder="Year established"
            />
          </div>
        </div>

        <div className="see-form-field">
          <label >
            Address *
          </label>
          <input
            {...getRegistrationFieldAttributes("address", fieldErrors.address)}
            value={value.address}
            onChange={(e) => updateField("address", e.target.value)}
            placeholder="Institution address"
          />
          <RegistrationFieldError
            fieldName="address"
            error={fieldErrors.address}
          />
        </div>

        <div className="see-form-field">
          <label >
            Website
          </label>
          <input
            value={value.website}
            onChange={(e) => updateField("website", e.target.value)}
            placeholder="https://example.com"
          />
        </div>
      </div>

      {/* Contact Person */}
      <div className="see-form-section">
        <h3>Contact Person</h3>

        <div className="see-form-grid see-form-grid--2">
          <div className="see-form-field">
            <label >
              Contact Person Name *
            </label>
            <input
              {...getRegistrationFieldAttributes("contactPersonName", fieldErrors.contactPersonName)}
              value={value.contactPersonName}
              onChange={(e) => updateField("contactPersonName", e.target.value)}
              placeholder="Full name"
            />
            <RegistrationFieldError
              fieldName="contactPersonName"
              error={fieldErrors.contactPersonName}
            />
          </div>

          <div className="see-form-field">
            <label >
              Position *
            </label>
            <input
              {...getRegistrationFieldAttributes("contactPersonPosition", fieldErrors.contactPersonPosition)}
              value={value.contactPersonPosition}
              onChange={(e) =>
                updateField("contactPersonPosition", e.target.value)
              }
              placeholder="e.g. Director, Manager"
            />
            <RegistrationFieldError
              fieldName="contactPersonPosition"
              error={fieldErrors.contactPersonPosition}
            />
          </div>
        </div>
      </div>

      {/* Focus and Collaboration */}
      <div className="see-form-section">
        <h3 >Focus & Collaboration</h3>

        <div className="see-form-field">
          <label >
            Thematic Focus Areas
          </label>
          <input
            value={value.thematicFocusAreas}
            onChange={(e) => updateField("thematicFocusAreas", e.target.value)}
            placeholder="Enter thematic focus areas"
          />
        </div>

        <div className="see-form-field">
          <label >
            Beneficiary Groups
          </label>
          <textarea
            value={value.beneficiaryGroups}
            onChange={(e) => updateField("beneficiaryGroups", e.target.value)}
            rows={3}
            placeholder="Describe beneficiary groups"
          />
        </div>
      </div>
    </div>
  );
}
