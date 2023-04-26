import React from "react";

interface NavbarItemProps {
    label: string;
}

const NavbarItemHome:  React.FC<NavbarItemProps> = ({
    label
}) => {
    return (
        <div className="text-white tracking-[.044em] md:text-[9px] lg:text-[11px] xl:text-[13.3px] cursor-pointer hover:text-gray-300 transition">
            {label}
        </div>
    )
}

export default NavbarItemHome;