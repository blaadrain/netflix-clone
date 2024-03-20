import { signOut } from "next-auth/react";
import useCurrentUser from "@/hooks/useCurrentUser";

type AccountMenuProps = {
  hidden?: boolean;
};

const AccountMenu: React.FC<AccountMenuProps> = ({ hidden }) => {
  const { data: user } = useCurrentUser();

  if (hidden) return null;

  return (
    <div className="absolute right-0 top-12 flex w-56 flex-col rounded-lg border-2 border-zinc-700 bg-zinc-800 py-5">
      <div className="flex flex-col gap-3">
        <div className="group/item flex w-full flex-row items-center gap-3 px-4">
          <img
            className="w-8 rounded-md"
            src="/images/profile-icons/default-slate.png"
            alt="Profile Icon"
          />
          <span className="group-hover/item::underline text-sm text-white">
            {user?.name}
          </span>
        </div>
        <hr className="my-4 h-px border-0 bg-zinc-700" />
        <div
          onClick={() => signOut()}
          className="px-3 text-center text-sm text-white hover:underline"
        >
          Sign out of{" "}
          <span className="bg-gradient-to-br from-teal-400 to-cyan-600 bg-clip-text text-transparent">
            waves
          </span>
        </div>
      </div>
    </div>
  );
};

export default AccountMenu;
