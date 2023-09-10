import NavbarItem from './NavbarItem';
import MobileMenu from './MobileMenu';
import { BsChevronDown, BsSearch, BsBell } from 'react-icons/bs';
import { useCallback, useEffect, useState } from 'react';
import AccountMenu from './AccountMenu';

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

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu((current) => !current);
  }, []);

  const toggleAccountMenu = useCallback(() => {
    setShowAccountMenu((current) => !current);
  }, []);

  return (
    <nav className="w-full fixed z-40">
      <div
        className={`px-4 md:px-12 py-6 flex flex-row items-center transition duration-500 ${
          showBackground ? 'bg-zinc-900 bg-opacity-90' : ''
        }`}
      >
        <span className="inline-block h-[60px] text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-teal-400 to-cyan-600">
          waves
        </span>
        <div className="flex-row ml-8 gap-7 hidden lg:flex">
          <NavbarItem label="Home" />
          <NavbarItem label="Series" />
          <NavbarItem label="Films" />
          <NavbarItem label="New & Popular" />
          <NavbarItem label="My List" />
        </div>
        <div
          onClick={toggleMobileMenu}
          className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative"
        >
          <p className="text-white text-sm md:text-xl">Browse</p>
          <BsChevronDown
            size={26}
            className={`text-white transition ${
              showMobileMenu ? 'rotate-180' : 'rotate-0'
            }`}
          />
          <MobileMenu hidden={!showMobileMenu} />
        </div>
        <div className="flex flex-row ml-auto gap-7 items-center">
          <div className="text-white hover:text-gray-300 cursor-pointer transition">
            <BsSearch size={26} />
          </div>
          <div className="text-white hover:text-gray-300 cursor-pointer transition">
            <BsBell size={26} />
          </div>
          <div
            onClick={toggleAccountMenu}
            className="flex flex-row items-center gap-2 cursor-pointer relative"
          >
            <div className="w-8 h-8 rounded-md overflow-hidden">
              <img
                src="/images/default-slate.png"
                alt="Profile Icon"
              />
            </div>
            <BsChevronDown
              size={26}
              className={`text-white transition ${
                showAccountMenu ? 'rotate-180' : 'rotate-0'
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
