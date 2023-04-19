import Input from '@/components/Input';
import Link from 'next/link';
import { useState } from 'react';

const AuthPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="relative w-full h-screen bg-[url('/images/hero.svg')] bg-black bg-center bg-fixed bg-cover bg-no-repeat">
      <div className="flex flex-col w-full h-full bg-black bg-opacity-50">
        <nav className="px-12 py-5 bg-black">
          <h1 className="inline-block text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-teal-400 to-cyan-600">
            waves
          </h1>
        </nav>
        <div className="flex justify-center grow w-full">
          <div className="bg-black bg-opacity-70 p-16 lg:my-16 self-center lg:w-2/5 lg:max-w-md rounded-md w-full h-full lg:h-auto">
            <h2 className="text-white text-3xl mb-8 font-semibold text-center">
              Create an account
            </h2>
            <div className="flex flex-col gap-4">
              <Input
                label="Username"
                value={username}
                onChange={(e: any) => {
                  setUsername(e.target.value);
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
                // type="password"
                value={password}
                onChange={(e: any) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <button className="bg-[#14aab4] py-3 text-white rounded-md w-full mt-10 hover:bg-[#0a565c] transition">
              Submit
            </button>
            <p className="text-neutral-500 mt-12 text-center">
              Already have an account?
              <Link
                href="/login"
                className="text-white ml-1 hover:underline cursor-pointer"
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

export default AuthPage;
