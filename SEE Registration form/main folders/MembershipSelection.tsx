
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { membershipOptions } from "./membershipOptions";
import { membershipSchema } from "./membershipSchema";
import type { MembershipCategory } from "./membershipTypes";

const categoryStyles: Record<
  MembershipCategory["id"],
  { icon: string; selected: string; button: string; fee: string }
> = {
  enterprise: {
    icon: "bg-emerald-50 text-emerald-800 ring-emerald-100",
    selected: "border-emerald-500 ring-2 ring-emerald-100",
    button: "bg-emerald-800 hover:bg-emerald-900 focus-visible:ring-emerald-300",
    fee: "bg-emerald-50 text-emerald-900",
  },
  individual: {
    icon: "bg-blue-50 text-blue-800 ring-blue-100",
    selected: "border-blue-500 ring-2 ring-blue-100",
    button: "bg-blue-800 hover:bg-blue-900 focus-visible:ring-blue-300",
    fee: "bg-blue-50 text-blue-900",
  },
  institutional: {
    icon: "bg-amber-50 text-amber-800 ring-amber-100",
    selected: "border-amber-500 ring-2 ring-amber-100",
    button: "bg-amber-700 hover:bg-amber-800 focus-visible:ring-amber-300",
    fee: "bg-amber-50 text-amber-950",
  },
  "founding-honorary": {
    icon: "bg-violet-50 text-violet-800 ring-violet-100",
    selected: "border-violet-500 ring-2 ring-violet-100",
    button: "bg-violet-800 hover:bg-violet-900 focus-visible:ring-violet-300",
    fee: "bg-violet-50 text-violet-900",
  },
};

export default function MembershipSelection() {
  const router = useRouter();

  const [selectedCategory, setSelectedCategory] =
    useState<string | null>(null);
  const activeCategory = membershipOptions.find(
    (category) => category.id === selectedCategory
  );

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
    <main className="min-h-screen bg-[#f7f6f2] text-[#263b4e]">
      <header className="border-b border-[#e6e8e4] bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <div className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="grid size-11 place-items-center rounded-full border border-emerald-200 text-xs font-extrabold tracking-tight text-emerald-800"
            >
              SEE
            </span>
            <span className="text-sm font-semibold tracking-tight text-[#20394c] sm:text-base">
              Social Enterprise Ethiopia
            </span>
          </div>
          <span className="hidden text-sm font-medium text-slate-500 sm:block">
            Membership
          </span>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-5 pb-16 pt-10 sm:px-8 sm:pt-14">
        <section className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-emerald-800">
            Join the SEE network
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-[#20394c] sm:text-4xl lg:text-5xl">
            SEE Membership Registration
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Choose the membership category that fits you and explore the ways
            you can contribute to Ethiopia&apos;s social enterprise community.
          </p>
        </section>

        <section aria-labelledby="membership-category-heading">
          <div className="mb-5 flex flex-col gap-2 sm:mb-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2
                id="membership-category-heading"
                className="text-xl font-bold tracking-tight text-[#20394c] sm:text-2xl"
              >
                Select Membership Category
              </h2>
              <p className="mt-1 text-sm leading-6 text-slate-600 sm:text-base">
                Select a category to view its available membership types.
              </p>
            </div>
            <span className="text-sm font-medium text-slate-500">
              4 membership categories
            </span>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {membershipOptions.map((category) => {
              const isOpen = selectedCategory === category.id;
              const styles = categoryStyles[category.id];
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
                    isOpen ? "membership-subcategory-panel" : undefined
                  }
                  onClick={() =>
                    setSelectedCategory(isOpen ? null : category.id)
                  }
                  className={`group flex min-h-48 w-full flex-col items-start rounded-xl border bg-white p-5 text-left shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-100 ${
                    isOpen
                      ? styles.selected
                      : "border-[#e3e7e3] hover:border-[#cbd6cf]"
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className={`mb-5 grid size-12 place-items-center rounded-xl text-sm font-extrabold ring-1 ${styles.icon}`}
                  >
                    {categoryMark}
                  </span>
                  <span className="flex w-full items-start justify-between gap-3">
                    <span className="text-lg font-bold leading-snug text-[#20394c]">
                      {category.title}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`mt-0.5 text-xl leading-none transition-transform ${
                        isOpen
                          ? "rotate-45 text-[#20394c]"
                          : "text-slate-400 group-hover:text-[#20394c]"
                      }`}
                    >
                      +
                    </span>
                  </span>
                  <span className="mt-2 text-sm leading-6 text-slate-600">
                    {category.description}
                  </span>
                  <span
                    className={`mt-auto pt-5 text-xs font-semibold uppercase tracking-wider ${
                      isOpen ? "text-[#20394c]" : "text-slate-500"
                    }`}
                  >
                    {isOpen ? "Selected category" : "View membership types"}
                  </span>
                </button>
              );
            })}
          </div>

          {activeCategory && (
            <section
              id="membership-subcategory-panel"
              aria-labelledby="membership-subcategory-heading"
              className="mt-6 rounded-2xl border border-[#e3e7e3] bg-white p-5 shadow-sm sm:p-7"
            >
              <div className="mb-6 flex flex-col gap-3 border-b border-[#edf0ed] pb-5 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-800">
                    Membership options
                  </p>
                  <h3
                    id="membership-subcategory-heading"
                    className="mt-1 text-xl font-bold tracking-tight text-[#20394c] sm:text-2xl"
                  >
                    {activeCategory.title}
                  </h3>
                </div>
                <p className="max-w-xl text-sm leading-6 text-slate-600">
                  Choose the membership type that best describes you.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {activeCategory.subcategories.map((subcategory) => {
                  const styles = categoryStyles[activeCategory.id];

                  return (
                    <article
                      key={subcategory.id}
                      className="flex h-full flex-col rounded-xl border border-[#e5e9e5] bg-[#fdfdfc] p-5 transition hover:border-[#cbd6cf] hover:shadow-sm"
                    >
                      <h4 className="text-base font-bold text-[#20394c] sm:text-lg">
                        {subcategory.title}
                      </h4>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {subcategory.description}
                      </p>
                      <p
                        className={`mt-5 rounded-lg px-3 py-2.5 text-sm font-semibold leading-5 ${styles.fee}`}
                      >
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
                        className={`mt-5 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition focus-visible:outline-none focus-visible:ring-4 ${styles.button}`}
                      >
                        Register
                        <span aria-hidden="true">→</span>
                      </button>
                    </article>
                  );
                })}
              </div>
            </section>
          )}
        </section>
      </div>
    </main>
  );
}
