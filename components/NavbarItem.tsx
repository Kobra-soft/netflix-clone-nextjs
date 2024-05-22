import React from "react";

interface NavbarItemProps {
  label: string;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ label }) => {
  return (
    <div
      className="text-[#cecdcd] 
        md:tracking-[.044em] lg:tracking-[.040em] xl:tracking-[.031em] 
        md:text-[8px] lg:text-[11.2px] xl:text-[13.3px] 
        cursor-pointer hover:text-[#a1a0a0] transition-colors"
    >
      {label}
    </div>
  );
};

export default NavbarItem;
