
"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { CommonFormData, CommonFormProps } from "./commonTypes";
import { commonSchema } from "./commonSchema";
import {
  referralOptions,
  membershipReasonOptions,
} from "./commonOptions";
import {
  getRegistrationFieldAttributes,
  RegistrationFieldError,
  useRegistrationFieldErrors,
} from "./registrationValidation";

export default function CommonForm({
  value,
  onChange,
}: CommonFormProps) {
  const {
    register,
    watch,
  } = useForm<CommonFormData>({
    resolver: zodResolver(commonSchema),
    defaultValues: value,
  });
  const fieldErrors = useRegistrationFieldErrors();

  useEffect(() => {
    const subscription = watch((data) => {
      onChange(data as CommonFormData);
    });

    return () => subscription.unsubscribe();
  }, [watch, onChange]);

  return (
    <section className="see-membership-form see-common-form">
      <div className="see-form-intro">
        <h2>
          Common Information
        </h2>
        <p>
          Please provide your basic contact information.
        </p>
      </div>

      <div className="see-form-grid see-form-grid--2">
        <div className="see-form-field">
          <label>
            Full Name *
          </label>
          <input
            {...register("fullName")}
            {...getRegistrationFieldAttributes("fullName", fieldErrors.fullName)}
            placeholder="Enter your full name"
          />
          <RegistrationFieldError
            fieldName="fullName"
            error={fieldErrors.fullName}
          />
        </div>

        <div className="see-form-field">
          <label>
            Email Address *
          </label>
          <input
            type="email"
            {...register("email")}
            {...getRegistrationFieldAttributes("email", fieldErrors.email)}
            placeholder="example@email.com"
          />
          <RegistrationFieldError
            fieldName="email"
            error={fieldErrors.email}
          />
        </div>

        <div className="see-form-field">
          <label>
            Phone Number *
          </label>
          <input
            {...register("phone")}
            {...getRegistrationFieldAttributes("phone", fieldErrors.phone)}
            placeholder="+251 9XX XXX XXX"
          />
          <RegistrationFieldError
            fieldName="phone"
            error={fieldErrors.phone}
          />
        </div>

        <div className="see-form-field">
          <label>
            National ID / Fayda (Optional)
          </label>
          <input
            {...register("nationalId")}
            placeholder="Enter your ID number"
          />
        </div>

        <div className="see-form-field see-form-field--full">
          <label>
            How did you hear about SEE?
          </label>
          <select
            {...register("referralSource")}
          >
            <option value="">Select an option</option>
            {referralOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="see-form-section">
        <h3>
          Why do you want to join SEE?
        </h3>
        <p>
          Select all reasons that apply to you.
        </p>

        <div className="see-form-grid see-form-grid--choices">
          {membershipReasonOptions.map((reason) => (
            <label
              key={reason}
              className="see-form-choice"
            >
              <input
                type="checkbox"
                value={reason}
                {...register("membershipReasons")}
              />
              {reason}
            </label>
          ))}
        </div>
      </div>
    </section>
  );
}
