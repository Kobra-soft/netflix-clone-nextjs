import { useCallback, useEffect, useState } from "react";
import React from 'react';

import { AiFillCaretDown } from "react-icons/ai"

import NetflixSearchLogo from "./NetflixSearchLogo"
import NetflixBellLogo from "./NetflixBellLogo";

import NavbarItem from "./NavbarItem";
import MobileMenu from "./mobileMenu";
import NavbarItemHome from "./NavBarItemHome";
import AccountMenu from "./AccountMenu";

const TOP_OFFSET = 66;

const Navbar = () => {

    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [showAccountMenu, setShowAccountMenu] = useState(false);
    const [ShowBackground, setShowBackground] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > TOP_OFFSET) {
                setShowBackground(true);
            } else {
                setShowBackground(false);
            }
        }
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    const toggleMobileMenu = useCallback(() => {
        setShowMobileMenu((current) => !current);
    }, []);

    const toggleAccountMenu = useCallback(() => {
        setShowAccountMenu((current) => !current);
    }, []);

    return (
        <nav className="w-full fixed z-40">
            {/* change all px values to pl padding left, as could not move the flex right (navbar items!!) */}
            <div className={`
            px-[1.04rem]
            md:pl-[2.26rem]
            lg:pl-[3.70rem]

            py-2.5
            md:py-[18.5px]
            lg:py-[18px]

            flex
            flex-row
            items-center
            transition
            duration-500
            ${ShowBackground ? 'bg-[#0b0b0b] bg-opacity-90' : ''}
            `}
            >
                <img className="h-[0.92rem] md:h-[1.55rem] lg:h-[1.55rem]" src="/images/logo.png" alt="" />

                <div className="
                flex-row
                ml-[2.88rem]
                gap-5
                hidden
                lg:flex
                "
                >
                    <NavbarItemHome label="Home"/>
                    <NavbarItem label="Series" />
                    <NavbarItem label="Films" />
                    <NavbarItem label="New & Popular" />
                    <NavbarItem label="My List" />
                    <NavbarItem label="Browse by Languages" />
                </div>
                <div onClick={toggleMobileMenu}
                className="lg:hidden flex flex-row items-center gap-1 ml-6 cursor-pointer relative">
                <p className="text-white text-[11.3px] md:text-[13.3px] lg:text-[13.3px] tracking-[.044em] items-center">Browse</p>
                    <AiFillCaretDown className={`text-white ml-0 w-[0.82rem] h-4 transition ${showMobileMenu ? 'rotate-180' : 'rotate-0'}`} />
                    <MobileMenu visible={showMobileMenu}/>
                </div>
                <div className="flex flex-1 justify-end gap-5 space-x-0 items-center">
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
                    <AiFillCaretDown className={`text-white w-[0.82rem] lg:mr-[3.50rem] transition ${showAccountMenu ? 'rotate-180' : 'rotate-0'}`}/>
                    <AccountMenu visible={showAccountMenu}/>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;

