
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { membershipOptions } from "./membershipOptions";
import { membershipSchema } from "./membershipSchema";
import type { MembershipCategory } from "./membershipTypes";

import "../styles/membership-selection.css";

export default function MembershipSelection() {
  const router = useRouter();

  const [selectedCategory, setSelectedCategory] =
    useState<string | null>(null);

  const activeCategory = membershipOptions.find(
    (category) => category.id === selectedCategory
  );

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
    <main className="membership-selection">
      <div className="membership-selection__content">

        <section className="membership-selection__intro">
          <p className="membership-selection__eyebrow">
            Join the SEE Network
          </p>

          <h1>SEE Membership Registration</h1>

          <p>
            Choose the membership category that fits you and explore
            the ways you can contribute to Ethiopia&apos;s social
            enterprise community.
          </p>
        </section>

        <section aria-labelledby="membership-category-heading">

          <div className="membership-selection__heading">
            <div>
              <h2 id="membership-category-heading">
                Select Membership Category
              </h2>

              <p>
                Select a category to view its available membership types.
              </p>
            </div>

            <span className="membership-selection__count">
              {membershipOptions.length} membership categories
            </span>
          </div>

          <div className="membership-selection__grid">
            {membershipOptions.map((category) => {
              const isOpen = selectedCategory === category.id;

              const categoryMark =
                category.id === "enterprise"
                  ? "EN"
                  : category.id === "individual"
                    ? "IM"
                    : category.id === "institutional"
                      ? "IO"
                      : "FH";

              return (
                <button
                  key={category.id}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={
                    isOpen
                      ? "membership-subcategory-panel"
                      : undefined
                  }
                  onClick={() =>
                    setSelectedCategory(
                      isOpen ? null : category.id
                    )
                  }
                  className={`membership-selection__card ${
                    isOpen ? "is-selected" : ""
                  }`}
                >
                  <span className="membership-selection__icon">
                    {categoryMark}
                  </span>

                  <span className="membership-selection__card-title">
                    {category.title}

                    <span className="membership-selection__toggle">
                      {isOpen ? "−" : "+"}
                    </span>
                  </span>

                  <span className="membership-selection__description">
                    {category.description}
                  </span>

                  <span className="membership-selection__action">
                    {isOpen
                      ? "Selected category"
                      : "View membership types"}
                  </span>
                </button>
              );
            })}
          </div>

          {activeCategory && (
            <section
              id="membership-subcategory-panel"
              aria-labelledby="membership-subcategory-heading"
              className="membership-selection__panel"
            >
              <div className="membership-selection__panel-header">
                <div>
                  <p className="membership-selection__eyebrow">
                    Membership Options
                  </p>

                  <h3 id="membership-subcategory-heading">
                    {activeCategory.title}
                  </h3>
                </div>

                <p>
                  Choose the membership type that best describes you.
                </p>
              </div>

              <div className="membership-selection__options">
                {activeCategory.subcategories.map((subcategory) => (
                  <article
                    key={subcategory.id}
                    className="membership-selection__option"
                  >
                    <h4>{subcategory.title}</h4>

                    <p className="membership-selection__option-description">
                      {subcategory.description}
                    </p>

                    <p className="membership-selection__fee">
                      {subcategory.fee}
                    </p>

                    <button
                      type="button"
                      onClick={() =>
                        handleSubcategoryClick(
                          activeCategory.id,
                          subcategory.id
                        )
                      }
                      className="membership-selection__register"
                    >
                      Register <span aria-hidden="true">→</span>
                    </button>
                  </article>
                ))}
              </div>
            </section>
          )}

        </section>
      </div>
    </main>
  );
}
