import useCurrentUser from '@/hooks/useCurrentUser';
import { NextPageContext } from 'next';
import { getSession, signOut } from 'next-auth/react';

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return { props: {} };
}

const HomePage: React.FC = () => {
  const { data: user } = useCurrentUser();

  return (
    <div className="">
      <button
        onClick={() => signOut()}
        className="h-10 w-full bg-white"
      >
        Sign out
      </button>
      <p className="text-white">Logged in as {user?.name}</p>
    </div>
  );
};

export default HomePage;
