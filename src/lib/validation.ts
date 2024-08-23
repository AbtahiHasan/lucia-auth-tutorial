import { z } from "zod";

const requiredString = z.string().trim().min(1, "This field is required");

export const signUpSchema = z.object({
  name: requiredString,
  email: requiredString.email(),
  password: requiredString,
});
export const loginSchema = z.object({
  email: requiredString.email(),
  password: requiredString,
});

export type TSignUp = z.infer<typeof signUpSchema>;
export type TLogin = z.infer<typeof loginSchema>;
