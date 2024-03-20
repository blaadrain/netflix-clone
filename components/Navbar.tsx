import NavbarItem from "./NavbarItem";
import MobileMenu from "./MobileMenu";
import { BsChevronDown, BsSearch, BsBell } from "react-icons/bs";
import { useCallback, useEffect, useState } from "react";
import AccountMenu from "./AccountMenu";

const TOP_OFFSET = 66;

const Navbar: React.FC = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu((current) => !current);
  }, []);

  const toggleAccountMenu = useCallback(() => {
    setShowAccountMenu((current) => !current);
  }, []);

  return (
    <nav className="fixed z-40 w-full">
      <div
        className={`flex flex-row items-center px-4 py-6 transition duration-500 md:px-12 ${
          showBackground ? "bg-zinc-900 bg-opacity-90" : ""
        }`}
      >
        <span className="inline-block h-[60px] bg-gradient-to-br from-teal-400 to-cyan-600 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
          waves
        </span>
        <div className="ml-8 hidden flex-row gap-7 lg:flex">
          <NavbarItem label="Home" />
          <NavbarItem label="Series" />
          <NavbarItem label="Films" />
          <NavbarItem label="New & Popular" />
          <NavbarItem label="My List" />
        </div>
        <div
          onClick={toggleMobileMenu}
          className="relative ml-8 flex cursor-pointer flex-row items-center gap-2 lg:hidden"
        >
          <p className="text-sm text-white md:text-xl">Browse</p>
          <BsChevronDown
            size={26}
            className={`text-white transition ${
              showMobileMenu ? "rotate-180" : "rotate-0"
            }`}
          />
          <MobileMenu hidden={!showMobileMenu} />
        </div>
        <div className="ml-auto flex flex-row items-center gap-7">
          <div className="cursor-pointer text-white transition hover:text-gray-300">
            <BsSearch size={26} />
          </div>
          <div className="cursor-pointer text-white transition hover:text-gray-300">
            <BsBell size={26} />
          </div>
          <div
            onClick={toggleAccountMenu}
            className="relative flex cursor-pointer flex-row items-center gap-2"
          >
            <div className="h-8 w-8 overflow-hidden rounded-md">
              <img
                src="/images/profile-icons/default-slate.png"
                alt="Profile Icon"
              />
            </div>
            <BsChevronDown
              size={26}
              className={`text-white transition ${
                showAccountMenu ? "rotate-180" : "rotate-0"
              }`}
            />
            <AccountMenu hidden={!showAccountMenu} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
