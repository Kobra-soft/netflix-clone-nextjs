import React from 'react';

interface MobileMenuProps {
    visible?: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ visible }) => {
    if (!visible) {
        return null;
    }

    return (
        <div className='
        bg-black/90
        w-[260px]
        absolute
        top-[42px]
        left-0 
        flex-col
        border-t-[2px]
        border-t-[#e5e5e5]
        border-b-[1px]
        border-b-[#282828]
        border-l-[1px]
        border-l-[#282828]
        border-r-[1px]
        border-r-[#282828]
        flex
        '
        >
            <div className='flex flex-col py-0'>
                <div
                className='text-[12.666px] text-center text-white hover:bg-[#242424]/40 py-4'>
                Home
                </div>
                <div className='text-[12.666px] text-center text-[#b3b3b3] hover:bg-[#242424]/40 py-4'>
                Series
                </div>
                <div className='text-[12.666px] text-center text-[#b3b3b3] hover:bg-[#242424]/40 py-4'>
                Films
                </div>
                <div className='text-[12.666px] text-center text-[#b3b3b3] hover:bg-[#242424]/40 py-4'>
                New & Popular
                </div>
                <div className='text-[12.666px] text-center text-[#b3b3b3] hover:bg-[#242424]/40 py-4'>
                My List
                </div>
                <div className='text-[12.666px] text-center text-[#b3b3b3] hover:bg-[#242424]/40 py-4'>
                Browse by Languages
                </div>
            </div>
        </div>
    )
}

export default MobileMenu;