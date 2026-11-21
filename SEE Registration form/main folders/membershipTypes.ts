
export type MembershipCategoryId =
  | "enterprise"
  | "individual"
  | "institutional"
  | "founding-honorary";

export type MembershipSubcategoryId =
  | "early-stage"
  | "established"
  | "student"
  | "individual-member"
  | "small-institution"
  | "medium-institution"
  | "large-institution"
  | "founding"
  | "honorary";

export type MembershipSubcategory = {
  id: MembershipSubcategoryId;
  title: string;
  description: string;
  fee: string;
};

export type MembershipCategory = {
  id: MembershipCategoryId;
  title: string;
  description: string;
  subcategories: MembershipSubcategory[];
};

export type MembershipSelection = {
  category: MembershipCategoryId;
  subcategory: MembershipSubcategoryId;
};
