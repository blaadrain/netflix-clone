import { useCallback, useState } from "react";
import { NextPage } from "next";
import Link from "next/link";
import { signIn } from "next-auth/react";

import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import Input from "@/components/Input";

const LoginPage: NextPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = useCallback(async () => {
    try {
      await signIn("credentials", {
        email,
        password,
        callbackUrl: "/profiles",
      });
    } catch (error) {
      console.log(error);
    }
  }, [email, password]);

  return (
    <div className="relative flex h-screen w-full bg-black bg-[url('/images/hero.svg')] bg-cover bg-fixed bg-center bg-no-repeat">
      <div className="flex h-full w-full flex-col bg-black bg-opacity-50">
        <nav className="bg-black px-12 py-5">
          <span className="inline-block bg-gradient-to-br from-teal-400 to-cyan-600 bg-clip-text text-4xl font-bold text-transparent">
            waves
          </span>
        </nav>
        <div className="flex grow justify-center">
          <div className="h-full w-full self-center rounded-md bg-black bg-opacity-70 px-8 py-16 lg:my-16 lg:h-auto lg:w-3/5 lg:max-w-lg lg:p-14">
            <h2 className="mb-8 text-center text-3xl font-semibold text-white">
              Sign in
            </h2>
            <div className="flex flex-col gap-4">
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
              onClick={login}
              className="mt-10 w-full rounded-md bg-[#14aab4] py-3 text-white transition hover:bg-[#0a565c]"
            >
              Login
            </button>
            <div className="mt-8 flex flex-row items-center justify-center gap-4 ">
              <div
                onClick={() => signIn("google", { callbackUrl: "/profiles" })}
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white transition hover:opacity-80"
              >
                <FcGoogle size={30} />
              </div>
              <div
                onClick={() => signIn("github", { callbackUrl: "/profiles" })}
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white transition hover:opacity-80"
              >
                <FaGithub size={30} />
              </div>
            </div>
            <p className="mt-12 text-center text-neutral-500">
              First time on{" "}
              <span className="bg-gradient-to-br from-teal-400 to-cyan-600 bg-clip-text text-transparent">
                waves
              </span>
              ?
              <Link
                href="signup"
                className="ml-1 cursor-pointer text-white hover:underline"
              >
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
