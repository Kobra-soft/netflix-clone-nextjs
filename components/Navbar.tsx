import { useCallback, useState } from "react";
import React from 'react';

import { BsChevronDown, BsSearch, BsFillCaretDownFill } from "react-icons/bs"
import { AiOutlineSearch, AiFillCaretDown } from "react-icons/ai"

import NetflixSearchLogo from "./NetflixSearchLogo"

import {FaRegBell} from "react-icons/fa"

import NavbarItem from "./NavbarItem";
import MobileMenu from "./mobileMenu";
import NetflixBellLogo from "./NetflixBellLogo";


const Navbar = () => {

    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const toggleMobileMenu = useCallback(() => {
        setShowMobileMenu((current) => !current);
    }, []);

    return (
        <nav className="w-full fixed z-40">
            {/* change all px values to pl padding left, as could not move the flex right (navbar items!!) */}
            <div className="
            px-[1.04rem]
            md:pl-[2.26rem]
            lg:pl-[3.74rem]

            py-3.5
            lg:py-[1.00rem]
            
            flex
            flex-row
            items-center
            transition
            duration-500
            bg-[#0d0d0d]
            bg-opacity-90
            "
            >

                <img className="h-[0.92rem] md:h-[0.96rem] lg:h-[1.55rem]" src="/images/logo.png" alt="" />

                <div className="
                flex-row
                ml-[3.0rem]
                gap-5
                hidden
                lg:flex
                "
                >
                    <NavbarItem label="Home" />
                    <NavbarItem label="Series" />
                    <NavbarItem label="Films" />
                    <NavbarItem label="New & Popular" />
                    <NavbarItem label="My List" />
                    <NavbarItem label="Browse by Languages" />
                </div>
                <div onClick={toggleMobileMenu}
                className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative">
                <p className="text-white text-sm items-center">Browse</p>
                    <AiFillCaretDown className={`text-white ml-1 w-[0.80rem] h-4 transition ${showMobileMenu ? 'rotate-180' : 'rotate-0'}`} />
                    <MobileMenu visible={showMobileMenu}/>
                </div>
                <div className="flex flex-1 justify-end gap-5 space-x-0 items-center">
                    <div className="hover:text-gray-300 cursor-pointer transition">
                    {/* <AiOutlineSearch className="text-white hover:text-gray-300" size={28}/> */}
                    <NetflixSearchLogo/>
                    </div>
                    <div className="hover:text-gray-300 cursor-pointer transition">
                    {/* <AiOutlineSearch className="text-white hover:text-gray-300" size={28}/> */}
                    <NetflixBellLogo/>
                    </div>
                    <div className="flex flex-row items-center gap-2 cursor-pointer relative">
                    <div className="w-7 h-7 lg:w-[1.95rem] lg:h-[1.95rem] rounded-[0.30rem] overflow-hidden">
                        <img src="/images/default-squidgame2.png"></img>
                    </div>
                    {/* <CgChevronDown className="text-white ml-1 mt-0 transition" /> */}
                    <AiFillCaretDown className={`text-white w-[0.80rem] h-4 mr-[3.8rem] transition ${showMobileMenu ? 'rotate-180' : 'rotate-0'}`}/>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;

