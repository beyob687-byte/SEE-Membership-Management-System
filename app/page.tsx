"use client";

import CommonForm from "../SEE Registration form/Common form/CommonForm";
import type { CommonFormData } from "../SEE Registration form/Common form/commonTypes";

export default function CommonFormPage() {
  const handleSubmit = (data: CommonFormData) => {
    console.log("Common Form Data:", data);

    alert("Registration information submitted successfully!");
  };

  return (
    <main className="home-page">
      <div className="home-page1">

        <div className="home">
          <h1 className="page">
            SEE Membership Registration
          </h1>

          <p className="general">
            Complete your general information to begin your membership registration.
          </p>
        </div>

        <CommonForm onSubmit={handleSubmit} />

      </div>
    </main>
  );
}