import React from "react";

interface NavbarItemProps {
    label: string;
}

const NavbarItem:  React.FC<NavbarItemProps> = ({
    label
}) => {
    return (
        <div className="text-[#cecdcd] tracking-[.031em] lg:text-[13.3px] cursor-pointer hover:text-[#a1a0a0] transition-colors ">
            {label}
        </div>
    )
}

export default NavbarItem;