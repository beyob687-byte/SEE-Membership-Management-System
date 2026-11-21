
"use client";

import { MediumInstitutionFormProps } from "./mediumTypes";

export default function MediumForm({ value, onChange }: MediumInstitutionFormProps) {
  const updateField = (field: keyof typeof value, fieldValue: any) => {
    onChange({
      ...value,
      [field]: fieldValue,
    });
  };

  return (
    <div className="space-y-6 rounded-xl border p-6 bg-white">
      <h2 className="text-xl font-semibold">
        Medium Institutional Membership Form
      </h2>

      {/* Institution Information */}
      <div className="space-y-4">
        <h3 className="font-semibold text-lg">Institution Information</h3>

        <div>
          <label className="block text-sm font-medium">Institution Name *</label>
          <input
            value={value.institutionName}
            onChange={(e) => updateField("institutionName", e.target.value)}
            className="w-full rounded-md border p-2"
            placeholder="Enter institution name"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Institution Type *</label>
            <select
              value={value.institutionType}
              onChange={(e) => updateField("institutionType", e.target.value)}
              className="w-full rounded-md border p-2"
            >
              <option value="">Select institution type</option>
              <option value="NGO">NGO</option>
              <option value="CSO">CSO</option>
              <option value="University">University</option>
              <option value="Government Institution">Government Institution</option>
              <option value="Private Institution">Private Institution</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium">Registration Type *</label>
            <select
              value={value.registrationType}
              onChange={(e) => updateField("registrationType", e.target.value)}
              className="w-full rounded-md border p-2"
            >
              <option value="">Select registration type</option>
              <option value="Registered">Registered</option>
              <option value="Unregistered">Unregistered</option>
              <option value="Government">Government</option>
              <option value="Academic">Academic</option>
            </select>
          </div>
        </div>

        <div >
          <div>
            <label>Sector *</label>
            <input
              value={value.sector}
              onChange={(e) => updateField("sector", e.target.value)}
              placeholder="e.g. Education, Agriculture, Technology"
            />
          </div>

          <div>
            <label>Year Established</label>
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

        <div>
          <label >Address *</label>
          <input
            value={value.address}
            onChange={(e) => updateField("address", e.target.value)}
            placeholder="Institution address"
          />
        </div>

        <div>
          <label>Website</label>
          <input
            value={value.website}
            onChange={(e) => updateField("website", e.target.value)}
            placeholder="https://example.com"
          />
        </div>
      </div>

      {/* Contact Person */}
      <div >
        <h3 >Contact Person</h3>

        <div >
          <div>
            <label >Contact Person Name *</label>
            <input
              value={value.contactPersonName}
              onChange={(e) => updateField("contactPersonName", e.target.value)}
              placeholder="Full name"
            />
          </div>

          <div>
            <label>Position *</label>
            <input
              value={value.contactPersonPosition}
              onChange={(e) =>
                updateField("contactPersonPosition", e.target.value)
              }
              placeholder="e.g. Director, Manager"
            />
          </div>
        </div>
      </div>

      {/* Focus & Collaboration */}
      <div >
        <h3 >Focus & Collaboration</h3>

        <div>
          <label >Thematic Focus Areas</label>
          <input
            value={value.thematicFocusAreas}
            onChange={(e) => updateField("thematicFocusAreas", e.target.value)}
            placeholder="Enter thematic focus areas"
          />
        </div>

        <div>
          <label >Beneficiary Groups</label>
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
