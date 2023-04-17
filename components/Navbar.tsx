import NavbarItem from "./NavbarItem";

const Navbar = () => {
    return (
        <nav className="w-full fixed z-40">
            <div className="
            px-[1.04rem]
            md:px-[2.26rem]
            lg:px-[3.74rem]
            py-3.5
            md:py-[0.8rem]
            lg:py-[1.4rem]
            flex
            flex-row
            items-center
            transition
            duration-500
            bg-[#111111]
            bg-opacity-90
            "
            >

                <img className="h-[0.92rem] md:h-[0.96rem] lg:h-[1.55rem]" src="/images/logo.png" alt="" />

                <div className="
                flex-row
                ml-8
                gap-7
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
                <div className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative">
                <p className="text-white text-sm">Browse</p>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;

