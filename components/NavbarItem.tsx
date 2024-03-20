type NavbarItemProps = {
  label: string;
};

const NavbarItem: React.FC<NavbarItemProps> = ({ label }) => {
  return (
    <div className="cursor-pointer text-xl text-white transition hover:text-gray-300">
      {label}
    </div>
  );
};

export default NavbarItem;
