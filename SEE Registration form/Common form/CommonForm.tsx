"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { commonFormSchema } from "./commonSchema";
import type { CommonFormData } from "./commonTypes";
import {referralOptions,membershipReasonOptions,} from "./commonOptions";

interface CommonFormProps {
  onSubmit: (data: CommonFormData) => void;
}

export default function CommonForm({ onSubmit }: CommonFormProps) {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<CommonFormData>({
    resolver: zodResolver(commonFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      nationalId: "",
      referralSource: "",
      membershipReasons: [],
      city: "",
      address: "",
    },
  });

  const selectedReasons = watch("membershipReasons");

  const handleReasonChange = (reason: string) => {
    const updatedReasons = selectedReasons.includes(reason)
      ? selectedReasons.filter((item: string) => item !== reason)
      : [...selectedReasons, reason];

    setValue("membershipReasons", updatedReasons, {
      shouldValidate: true,
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="addinformation"
    >
      <section className="persenalinfo">
        <h2 className="personal">
          Personal Information
        </h2>

        <div>
          <label className="fullname">
            Full Name *
          </label>

          <input
            {...register("fullName")}
            placeholder="Enter your full name"
            className="full"/>

          {errors.fullName && (
            <p className="name">
              {errors.fullName.message}
            </p>
          )}
        </div>

        <div>
          <label className="Email">
            Email Address *
          </label>

          <input
            {...register("email")}
            type="email"
            placeholder="example@email.com"
            className="emailadderase"/>

          {errors.email && (
            <p className="email">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label className="ponenumber">
            Phone Number *
          </label>

          <input
            {...register("phone")}
            type="tel"
            placeholder="+251 9XX XXX XXX"
            className="number"/>

          {errors.phone && (
            <p className="phone">
              {errors.phone.message}
            </p>
          )}
        </div>

        <div>
          <label className="idnational">
            National ID *
          </label>

          <input
            {...register("nationalId")}
            placeholder="Enter your National ID"
            className="national" />

          {errors.nationalId && (
            <p className="nationalid">
              {errors.nationalId.message}
            </p>
          )}
        </div>
      </section>

      <section className="About">
        <h2 className="about">
          How Did You Hear About SEE?
        </h2>

        <select
          {...register("referralSource")}
          className="referr"
        >
          <option value="">Select an option</option>

          {referralOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        {errors.referralSource && (
          <p className="source">
            {errors.referralSource.message}
          </p>
        )}
      </section>


      <section className="applys">
        <h2 className="apply1">
          Why Do You Want to Join SEE?
        </h2>

        <p className="apply">
          Select all the reasons that apply to you.
        </p>

        <div className="option1">
          {membershipReasonOptions.map((reason) => (
            <label
              key={reason}
              className="option"
            >
              <input
                type="checkbox"
                checked={selectedReasons.includes(reason)}
                onChange={() => handleReasonChange(reason)}
                className="checkbox1"
              />

              <span className="checkbox">{reason}</span>
            </label>
          ))}
        </div>

        {errors.membershipReasons && (
          <p className="message1">
            {errors.membershipReasons.message}
          </p>
        )}
      </section>

     
      <section className="Information">
        <h2 className="information">
          Address Information
        </h2>

        <div>
          <label className="City">
            City *
          </label>

          <input
            {...register("city")}
            placeholder="Enter your city"
            className="city1"
          />

          {errors.city && (
            <p className="city">
              {errors.city.message}
            </p>
          )}
        </div>

        <div>
          <label className="address1">
            Address *
          </label>

          <input
            {...register("address")}
            
            placeholder="Enter your address"
            className="Address"
          />

          {errors.address && (
            <p className="message">
              {errors.address.message}
            </p>
          )}
        </div>
      </section>
      <button
        type="submit"
        className="submit"
      >
        Continue
      </button>
    </form>
  );
}