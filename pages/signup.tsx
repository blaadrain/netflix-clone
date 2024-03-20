import { useCallback, useState } from "react";
import { NextPage } from "next";
import Link from "next/link";
import { signIn } from "next-auth/react";
import axios from "axios";

import Input from "@/components/Input";

const SignUpPage: NextPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = useCallback(async () => {
    try {
      await signIn("credentials", {
        email,
        password,
        callbackUrl: "/",
      });
    } catch (error) {
      console.log(error);
    }
  }, [email, password]);

  const signup = useCallback(async () => {
    try {
      await axios.post("/api/signup", { name, email, password });
      login();
    } catch (error) {
      console.log(error);
    }
  }, [name, email, password, login]);

  return (
    <div className="relative flex h-screen w-full bg-black bg-[url('/images/hero.svg')] bg-cover bg-fixed bg-center bg-no-repeat">
      <div className="flex h-full w-full flex-col bg-black bg-opacity-50">
        <nav className="bg-black px-12 py-5">
          <span className="inline-block bg-gradient-to-br from-teal-400 to-cyan-600 bg-clip-text text-4xl font-bold text-transparent">
            waves
          </span>
        </nav>
        <div className="flex grow justify-center">
          <div className="h-full w-full self-center rounded-md bg-black bg-opacity-70 px-8 py-16 lg:my-16 lg:h-auto lg:w-2/5 lg:max-w-md">
            <h2 className="mb-8 text-center text-3xl font-semibold text-white">
              Create an account
            </h2>
            <div className="flex flex-col gap-4">
              <Input
                label="Username"
                value={name}
                onChange={(e: any) => {
                  setName(e.target.value);
                }}
              />
              <Input
                label="Email"
                value={email}
                onChange={(e: any) => {
                  setEmail(e.target.value);
                }}
              />
              <Input
                label="Password"
                type="password"
                value={password}
                onChange={(e: any) => {
                  setPassword(e.target.value);
                }}
                autoComplete="on"
              />
            </div>
            <button
              onClick={signup}
              className="mt-10 w-full rounded-md bg-[#14aab4] py-3 text-white transition hover:bg-[#0a565c]"
            >
              Submit
            </button>
            <p className="mt-12 text-center text-neutral-500">
              Already have an account?
              <Link
                href="login"
                className="ml-1 cursor-pointer text-white hover:underline"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
