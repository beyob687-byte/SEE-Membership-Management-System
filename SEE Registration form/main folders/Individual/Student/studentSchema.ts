
import { z } from "zod";

export const studentSchema = z.object({
  institutionName: z
    .string()
    .trim()
    .min(2, "Institution name is required"),

  departmentOrField: z
    .string()
    .trim()
    .min(2, "Department or field of study is required"),

  graduationYear: z
    .union([z.literal(""), z.number()])
    .refine(
      (value) => value !== "",
      "Please enter your expected graduation year"
    )
    .refine(
      (value) =>
        typeof value === "number" &&
        Number.isInteger(value),
      "Enter a valid graduation year"
    )
    .refine(
      (value) =>
        typeof value === "number" &&
        value >= 2000,
      "Enter a valid graduation year"
    )
    .refine(
      (value) =>
        typeof value === "number" &&
        value <= new Date().getFullYear() + 10,
      "Graduation year is too far in the future"
    ),

  studentId: z
    .string()
    .trim()
    .min(1, "Student ID is required"),

  projectName: z.string(),

  projectDescription: z.string(),

  volunteerTrack: z.boolean(),

  preferredVolunteerServices: z.array(z.string()),

  volunteerHours: z.union([
    z.literal(""),
    z.number(),
  ]),

  studentIdDocument: z.custom<File | null>(
    (value) =>
      value === null ||
      (typeof File !== "undefined" && value instanceof File),
    "Invalid student ID document"
  ),

  enrollmentProof: z.custom<File | null>(
    (value) =>
      value === null ||
      (typeof File !== "undefined" && value instanceof File),
    "Invalid enrollment proof"
  ),
});

export type StudentSchemaData = z.infer<typeof studentSchema>;
