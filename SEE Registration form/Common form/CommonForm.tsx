
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

export default function CommonForm({
  value,
  onChange,
}: CommonFormProps) {
  const {
    register,
    watch,
    formState: { errors },
  } = useForm<CommonFormData>({
    resolver: zodResolver(commonSchema),
    defaultValues: value,
    mode: "onBlur",
  });

  useEffect(() => {
    const subscription = watch((data) => {
      onChange(data as CommonFormData);
    });

    return () => subscription.unsubscribe();
  }, [watch, onChange]);

  return (
    <section className="space-y-6 rounded-xl border bg-white p-6">
      <div>
        <h2 className="text-xl font-bold text-gray-800">
          Common Information
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          Please provide your basic contact information.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium">
            Full Name *
          </label>
          <input
            {...register("fullName")}
            placeholder="Enter your full name"
            className="w-full rounded-lg border px-4 py-3"
          />
          <p className="mt-1 text-sm text-red-600">
            {errors.fullName?.message}
          </p>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Email Address *
          </label>
          <input
            type="email"
            {...register("email")}
            placeholder="example@email.com"
            className="w-full rounded-lg border px-4 py-3"
          />
          <p className="mt-1 text-sm text-red-600">
            {errors.email?.message}
          </p>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Phone Number *
          </label>
          <input
            {...register("phone")}
            placeholder="+251 9XX XXX XXX"
            className="w-full rounded-lg border px-4 py-3"
          />
          <p className="mt-1 text-sm text-red-600">
            {errors.phone?.message}
          </p>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            National ID / Fayda (Optional)
          </label>
          <input
            {...register("nationalId")}
            placeholder="Enter your ID number"
            className="w-full rounded-lg border px-4 py-3"
          />
        </div>

        <div className="md:col-span-2">
          <label className="mb-2 block text-sm font-medium">
            How did you hear about SEE?
          </label>
          <select
            {...register("referralSource")}
            className="w-full rounded-lg border bg-white px-4 py-3"
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

      <div>
        <h3 className="mb-2 font-semibold text-gray-800">
          Why do you want to join SEE?
        </h3>
        <p className="mb-4 text-sm text-gray-500">
          Select all reasons that apply to you.
        </p>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {membershipReasonOptions.map((reason) => (
            <label
              key={reason}
              className="flex cursor-pointer items-center gap-3 rounded-lg border p-3 text-sm hover:bg-gray-50"
            >
              <input
                type="checkbox"
                value={reason}
                {...register("membershipReasons")}
                className="h-4 w-4 accent-teal-700"
              />
              {reason}
            </label>
          ))}
        </div>
      </div>
    </section>
  );
}
