type MobileMenuProps = {
  hidden?: boolean;
};

const MobileMenu: React.FC<MobileMenuProps> = ({ hidden }) => {
  if (hidden) return null;

  return (
    <div className="absolute left-0 top-11 flex w-56 flex-col rounded-lg border-2 border-zinc-700 bg-zinc-800 py-5">
      <div className="flex flex-col gap-4">
        <div className="px-3 text-center text-white hover:underline">Home</div>
        <div className="px-3 text-center text-white hover:underline">
          Series
        </div>
        <div className="px-3 text-center text-white hover:underline">Films</div>
        <div className="px-3 text-center text-white hover:underline">
          New & Popular
        </div>
        <div className="px-3 text-center text-white hover:underline">
          My List
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
