import { signOut } from 'next-auth/react';
import useCurrentUser from '@/hooks/useCurrentUser';

type AccountMenuProps = {
  hidden?: boolean;
};

const AccountMenu: React.FC<AccountMenuProps> = ({ hidden }) => {
  const { data: user } = useCurrentUser();

  if (hidden) return null;

  return (
    <div className="flex flex-col border-2 border-zinc-700 rounded-lg bg-zinc-800 w-56 absolute top-12 right-0 py-5">
      <div className="flex flex-col gap-3">
        <div className="flex flex-row px-4 group/item gap-3 items-center w-full">
          <img
            className="w-8 rounded-md"
            src="/images/profile-icons/default-slate.png"
            alt="Profile Icon"
          />
          <span className="text-white text-sm group-hover/item::underline">
            {user?.name}
          </span>
        </div>
        <hr className="bg-zinc-700 border-0 h-px my-4" />
        <div
          onClick={() => signOut()}
          className="px-3 text-center text-white text-sm hover:underline"
        >
          Sign out of{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-teal-400 to-cyan-600">
            waves
          </span>
        </div>
      </div>
    </div>
  );
};

export default AccountMenu;
