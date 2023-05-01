import React from "react";

interface NavbarItemProps {
    label: string;
}

const NavbarItemHome:  React.FC<NavbarItemProps> = ({
    label
}) => {
    return (
        <div className="text-white 
        md:tracking-[.044em] lg:tracking-[.040em] xl:tracking-[.031em]
        md:text-[8px] lg:text-[11.2px] xl:text-[13.3px] 
        cursor-pointer hover:text-gray-300 transition-colors">
            {label}
        </div>
    )
}

export default NavbarItemHome;