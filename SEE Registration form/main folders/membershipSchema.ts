
import { z } from "zod";

export const membershipSchema = z
  .object({
    category: z.enum([
      "enterprise",
      "individual",
      "institutional",
      "founding-honorary",
    ]),

    subcategory: z.enum([
      "early-stage",
      "established",
      "student",
      "individual-member",
      "small-institution",
      "medium-institution",
      "large-institution",
      "founding",
      "honorary",
    ]),
  })
  .superRefine((data, ctx) => {
    const validSubcategories: Record<string, string[]> = {
      enterprise: ["early-stage", "established"],

      individual: ["student", "individual-member"],

      institutional: [
        "small-institution",
        "medium-institution",
        "large-institution",
      ],

      "founding-honorary": ["founding", "honorary"],
    };

    if (
      !validSubcategories[data.category]?.includes(data.subcategory)
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["subcategory"],
        message: "This subcategory does not belong to the selected category.",
      });
    }
  });

export type MembershipSchemaData = z.infer<
  typeof membershipSchema
>;
