
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { membershipOptions } from "./membershipOptions";
import { membershipSchema } from "./membershipSchema";

export default function MembershipSelection() {
  const router = useRouter();

  const [selectedCategory, setSelectedCategory] =
    useState<string | null>(null);

  // Handle registration for each membership type
  const handleSubcategoryClick = (
    categoryId: string,
    subcategoryId: string
  ) => {
    const result = membershipSchema.safeParse({
      category: categoryId,
      subcategory: subcategoryId,
    });

    if (!result.success) {
      console.error("Invalid membership selection:", result.error);
      return;
    }

    const params = new URLSearchParams({
      category: result.data.category,
      subcategory: result.data.subcategory,
    });

    router.push(
      `/membership-preview/registration?${params.toString()}`
    );
  };

  return (
    <main >
      <div >

        {/* Page Header */}
        <header >
          <h1 >
            SEE Membership Registration
          </h1>

          <p >
            Choose your membership category and type.
          </p>
        </header>

        {/* Membership Categories */}
        <section >

          <h2>
            Select Membership Category
          </h2>

          <p >
            Select one main category to view its membership types.
          </p>

          <div >

            {membershipOptions.map((category) => {
              const isOpen = selectedCategory === category.id;

              return (
                <div
                  key={category.id}
                  className={`overflow-hidden rounded-lg border ${
                    isOpen
                      ? "border-teal-600"
                      : "border-gray-200"
                  }`}
                >

                  {/* Main Category */}
                  <button
                    type="button"
                    onClick={() =>
                      setSelectedCategory(
                        isOpen ? null : category.id
                      )
                    }
                  >
                    <div>
                      <h3 >
                        {category.title}
                      </h3>

                      <p >
                        {category.description}
                      </p>
                    </div>

                    <span >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {/* Subcategories */}
                  {isOpen && (
                    <div >

                      <h4 >
                        Choose Membership Type
                      </h4>

                      <div >

                        {category.subcategories.map((subcategory) => (
                          <div
                            key={subcategory.id}
                          >

                            {/* Membership Type */}
                            <h5 >
                              {subcategory.title}
                            </h5>

                            {/* Description */}
                            <p >
                              {subcategory.description}
                            </p>

                            {/* Annual Fee */}
                            <p >
                              {subcategory.fee}
                            </p>

                            {/* Register Button */}
                            <button
                              type="button"
                              onClick={() =>
                                handleSubcategoryClick(
                                  category.id,
                                  subcategory.id
                                )
                              }
                            >
                              Register
                            </button>

                          </div>
                        ))}

                      </div>
                    </div>
                  )}

                </div>
              );
            })}

          </div>
        </section>

      </div>
    </main>
  );
}
