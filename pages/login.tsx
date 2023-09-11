import { useCallback, useState } from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
import { signIn } from 'next-auth/react';

import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

import Input from '@/components/Input';

const LoginPage: NextPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = useCallback(async () => {
    try {
      await signIn('credentials', {
        email,
        password,
        callbackUrl: '/profiles',
      });
    } catch (error) {
      console.log(error);
    }
  }, [email, password]);

  return (
    <div className="flex relative w-full h-screen bg-[url('/images/hero.svg')] bg-black bg-center bg-fixed bg-cover bg-no-repeat">
      <div className="flex flex-col w-full h-full bg-black bg-opacity-50">
        <nav className="px-12 py-5 bg-black">
          <span className="inline-block text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-teal-400 to-cyan-600">
            waves
          </span>
        </nav>
        <div className="flex justify-center grow">
          <div className="bg-black bg-opacity-70 px-8 py-16 lg:p-14 lg:my-16 self-center lg:w-3/5 lg:max-w-lg rounded-md w-full h-full lg:h-auto">
            <h2 className="text-white text-3xl mb-8 font-semibold text-center">
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
              className="bg-[#14aab4] py-3 text-white rounded-md w-full mt-10 hover:bg-[#0a565c] transition"
            >
              Login
            </button>
            <div className="flex flex-row justify-center items-center gap-4 mt-8 ">
              <div
                onClick={() => signIn('google', { callbackUrl: '/profiles' })}
                className="w-10 h-10 bg-white rounded-full flex justify-center items-center cursor-pointer hover:opacity-80 transition"
              >
                <FcGoogle size={30} />
              </div>
              <div
                onClick={() => signIn('github', { callbackUrl: '/profiles' })}
                className="w-10 h-10 bg-white rounded-full flex justify-center items-center cursor-pointer hover:opacity-80 transition"
              >
                <FaGithub size={30} />
              </div>
            </div>
            <p className="text-neutral-500 mt-12 text-center">
              First time on{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-teal-400 to-cyan-600">
                waves
              </span>
              ?
              <Link
                href="signup"
                className="text-white ml-1 hover:underline cursor-pointer"
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
