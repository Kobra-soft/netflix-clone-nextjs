import Image from 'next/image'
/* import useAuth from '../hooks/useAuth' */
import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
/* import BasicMenu from './BasicMenu' */
import { AiFillCaretDown } from "react-icons/ai"
import NetflixSearchLogo from "./NetflixSearchLogo"
import NetflixBellLogo from "./NetflixBellLogo";
import NavbarItem from "./NavbarItem";
import MobileMenu from "./mobileMenu";
import NavbarItemHome from "./NavBarItemHome";
import AccountMenu from "./AccountMenu";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [ShowBackground, setShowBackground] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu((current) => !current);
}, []);

const toggleAccountMenu = useCallback(() => {
    setShowAccountMenu((current) => !current);
}, []);

  return (
    <header className={`${isScrolled && 'bg-[#0e0e0e]'}`}>

      <div className={`
      flex items-center transition duration-500 
      px-[0.04rem] sm:pl-[0.05rem] md:pl-7 lg:pl-[2.35rem] xl:pl-[3.35rem] 
      py-[15px] sm:py-[1.00rem] md:py-[0.58rem] lg:py-[1.11rem] xl:py-[1.11rem]`}>
        
        <img className="h-[0.95rem] sm:h-[0.95rem] md:h-[0.95rem] lg:h-[1.57rem]"  src="/images/logo.png" alt="" />

        <div className="
        ml-[2.88rem] sm:ml-[1.40rem] md:ml-[1.6rem] xl:ml-[2.80rem]
        gap-5 md:gap-4.5 xl:gap-5 hidden md:flex lg:flex">
            <NavbarItemHome label="Home"/>
            <NavbarItem label="Series" />
            <NavbarItem label="Films" />
            <NavbarItem label="New & Popular" />
            <NavbarItem label="My List" />
            <NavbarItem label="Browse by Languages" />
        </div>
            <div 
                onClick={toggleMobileMenu}
                className="lg:hidden md:hidden flex flex-row justify-between pl-5 items-center gap-1 ml-0 cursor-pointer relative">
                
                <p className="
                  text-white tracking-[.044em] items-center
                    text-[8.0px] md:text-[12.6px] lg:text-[13.3px]">
                Browse</p>
                    <AiFillCaretDown className={`text-white ml-0 w-[0.82rem] h-4 transition ${showMobileMenu ? 'rotate-180' : 'rotate-0'}`} />
                    <MobileMenu visible={showMobileMenu}/>
            </div>
      </div>
                <div className="
                flex justify-end space-x-0 items-center
                 gap-4 sm:gap-4 md:gap-4 lg:gap-5 xl:gap-5
                 md:pr-2 lg:pr-[2.8rem] xl:pr-[3.7rem]">

                    <div className="hover:text-gray-300 cursor-pointer transition">
                    <NetflixSearchLogo/>
                    </div>

                    <div className="hover:text-gray-300 cursor-pointer transition">
                    <NetflixBellLogo/>
                    </div>

                    <div onClick={toggleAccountMenu} className="flex flex-row items-center gap-2 cursor-pointer relative">
                    
                    <div className="w-7 h-7 md:w-[1.96rem] md:h-[1.96rem] lg:w-[1.96rem] lg:h-[2rem] rounded-[0.24rem] overflow-hidden">
                        <img src="/images/default-squidgame2.png"></img>
                    </div>

                    <AiFillCaretDown className={`text-white w-[0.82rem] transition ${showAccountMenu ? 'rotate-180' : 'rotate-0'}`}/>
                    <AccountMenu visible={showAccountMenu}/>
                    </div>
                </div>
    </header>
  )
}

export default Header
