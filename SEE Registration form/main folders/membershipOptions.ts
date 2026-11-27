
import type { MembershipCategory } from "./membershipTypes";

export const membershipOptions: MembershipCategory[] = [
  {
    id: "enterprise",
    title: "Enterprise Members",
    description: "Membership for enterprises at different stages of development.",
    subcategories: [
      {
        id: "early-stage",
        title: "Early-Stage Enterprises",
        description: "Enterprises operating for 0–3 years.",
        fee: "Proposed annual fee: ETB 3,000",
      },
      {
        id: "established",
        title: "Established Enterprises",
        description: "Enterprises operating for more than 3 years.",
        fee: "Proposed annual fee: ETB 6,000",
      },
    ],
  },

  {
    id: "individual",
    title: "Individual Members",
    description: "Membership for students and individuals interested in social enterprise.",
    subcategories: [
      {
        id: "student",
        title: "Student Members",
        description: "Students from universities, colleges, and TVET institutions.",
        fee: "Proposed: ETB 800/year OR 15–20 volunteer hours/year (approval pending)",
      },
      {
        id: "individual-member",
        title: "Individual Members",
        description: "Professionals, researchers, mentors, and interested individuals.",
        fee: "Proposed annual fee: ETB 2,600",
      },
    ],
  },

  {
    id: "institutional",
    title: "Institutional Members",
    description: "Membership for institutions and ecosystem support organizations.",
    subcategories: [
      {
        id: "small-institution",
        title: "Small Institutions",
        description: "Institutional membership – small size.",
        fee: "Proposed annual fee: ETB 5,000",
      },
      {
        id: "medium-institution",
        title: "Medium Institutions",
        description: "Institutional membership – medium size.",
        fee: "Proposed annual fee: ETB 12,000",
      },
      {
        id: "large-institution",
        title: "Large Institutions",
        description: "Institutional membership – large size.",
        fee: "Proposed annual fee: ETB 20,000 (confirmation required)",
      },
    ],
  },

  {
    id: "founding-honorary",
    title: "Founding and Honorary Members",
    description: "Recognition for contributions to SEE establishment and development.",
    subcategories: [
      {
        id: "founding",
        title: "Founding Members",
        description: "Recognition for contributions to the establishment of SEE.",
        fee: "Annual fee and membership conditions to be clarified.",
      },
      {
        id: "honorary",
        title: "Honorary Members",
        description: "Recognition for contributions to SEE development.",
        fee: "Annual fee and membership conditions to be clarified.",
      },
    ],
  },
];
