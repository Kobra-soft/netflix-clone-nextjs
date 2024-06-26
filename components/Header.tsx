/* import useAuth from '../hooks/useAuth' */
import { useCallback, useEffect, useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import NetflixSearchLogo from "./NetflixSearchLogo";
import NetflixBellLogo from "./NetflixBellLogo";
import NavbarItem from "./NavbarItem";
import MobileMenu from "./mobileMenu";
import NavbarItemHome from "./NavBarItemHome";
import AccountMenu from "./AccountMenu";

function Header() {
  const [isHovered, setIsHovered] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [ShowBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const img1 = new window.Image();
    const img2 = new window.Image();
    img1.src = "/images/Jackflix3.png";
    img2.src = "/images/Netflix3.png";
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
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
    <header className={`${isScrolled && "bg-[#0e0e0e]"}`}>
      <div
        className={`
      flex items-center transition
      px-[0.04rem] sm:pl-[0.05rem] md:pl-7 lg:pl-[2.35rem] xl:pl-[3.15rem] 
      py-[0.40rem]                 md:py-[0.54rem] lg:py-[0.84rem] xl:py-[0.84rem]`}
      >
        <img
          className={`h-[1.25rem] sm:h-[1.55rem] md:h-[1.85rem] lg:h-[2.10rem] cursor-pointer ${
            isClicked
              ? "mr-[-7px] sm:mr-[-8.75px] md:mr-[-10.50px] lg:mr-[-11.90px] xl:mr-[-11.90px]"
              : "mr-[0px]"
          }`}
          src={isClicked ? "/images/Jackflix3.png" : "/images/Netflix3.png"}
          alt=""
          onClick={() => setIsClicked(!isClicked)}
        />

        <div
          className="p-1 hidden md:hidden lg:flex
        ml-[2.88rem] sm:ml-[1.40rem] md:ml-[1.6rem] xl:ml-[2.38rem]
        gap-5 md:gap-4.5 xl:gap-5"
        >
          <div>
            <NavbarItemHome label="Home" />
          </div>
          <div >
            <NavbarItem label="Series" />
          </div>
          <div >
            <NavbarItem label="Films" />
          </div>
          <div >
            <NavbarItem label="New & Popular" />
          </div>
          <div >
            <NavbarItem label="My List" />
          </div>
          <div >
            <NavbarItem label="Browse by Languages" />
          </div>
        </div>
        <div
          onClick={toggleMobileMenu}
          className="lg:hidden md:flex flex flex-row justify-between pl-5 items-center gap-1 ml-0 cursor-pointer relative"
        >
          <p
            className="
                  text-white tracking-[.044em] items-center
                    text-[8.0px] md:text-[9.0px] lg:text-[13.333px]"
          >
            Browse
          </p>
          <AiFillCaretDown
            className={`text-white ml-0 w-[0.82rem] h-4 transition ${
              showMobileMenu ? "rotate-180" : "rotate-0"
            }`}
          />
          <MobileMenu visible={showMobileMenu} />
        </div>
      </div>
      <div
        className="
                flex justify-end space-x-0 items-center
                 gap-4 sm:gap-4 md:gap-4 lg:gap-5 xl:gap-5
                 md:pr-2 lg:pr-[2.8rem] xl:pr-[3.26rem]"
      >
        <div className="cursor-pointer transition">
          <NetflixSearchLogo />
        </div>

        <div className="cursor-pointer transition">
          <NetflixBellLogo />
        </div>

        <div
          onClick={toggleAccountMenu}
          className="flex flex-row items-center gap-2 cursor-pointer relative"
        >
          <div
            className="w-7 h-7 md:w-[1.96rem] md:h-[1.96rem] lg:w-[1.85rem] lg:h-[1.85rem] 
          rounded-[0.22rem] overflow-hidden"
          >
            <img src="/images/default-green.png"></img>
          </div>

          <AiFillCaretDown
            className={`text-white w-[0.82rem] transition ${
              showAccountMenu ? "rotate-180" : "rotate-0"
            } md:block hidden`}
          />
          <AccountMenu visible={showAccountMenu} />
        </div>
      </div>
    </header>
  );
}

export default Header;
