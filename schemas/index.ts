import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, { message: "Password required" }),
});

export const SignUpSchema = z.object({
  name: z.string().min(1, { message: "Name required" }),
  email: z.string().email(),
  password: z.string().min(1, { message: "Password required" }),
});

export type LoginSchemaType = z.infer<typeof LoginSchema>;
export type SignUpSchemaType = z.infer<typeof SignUpSchema>;
