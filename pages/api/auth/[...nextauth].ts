import NextAuth, { AuthOptions } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import Credentials from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

import { compare } from "bcrypt";
import prismadb from "@/lib/prismadb";
import { LoginSchema } from "@/schemas";

export const authOptions: AuthOptions = {
  pages: {
    signIn: "/login",
  },
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_SECRET || "",
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    Credentials({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
        },
        password: {
          label: "Password",
          type: "passord",
        },
      },
      async authorize(values) {
        const validatedFields = LoginSchema.safeParse(values);

        if (validatedFields.success) {
          const { email, password } = validatedFields.data;

          const user = await prismadb.user.findUnique({
            where: { email },
          });

          if (!user || !user.hashedPassword) return null;

          const isPasswordCorrect = await compare(
            password,
            user.hashedPassword,
          );

          if (isPasswordCorrect) return user;
        }

        return null;
      },
    }),
  ],
  debug: process.env.NODE_ENV === "development",
  adapter: PrismaAdapter(prismadb),
  session: { strategy: "jwt" },
  jwt: {
    secret: process.env.NEXTAUTH_JWT_SECRET,
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
