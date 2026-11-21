import { z } from "zod";
import { commonFormSchema } from "./commonSchema";

export type CommonFormData = z.infer<typeof commonFormSchema>;