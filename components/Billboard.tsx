import useBillboard from "@/hooks/useBillboard";
import React, { useState } from "react";

import { AiOutlineInfoCircle } from "react-icons/ai"
import { BsFillPlayFill} from "react-icons/bs"

const Billboard = () => {
    const { data } = useBillboard();

    const [showMobileMenu, setShowMobileMenu] = useState(false);

    function truncate(string: string, n: number) {
        return string?.length > n ? string.substr(0, n - 1) + "..." : string;
      }

    return (
        <div className="relative h-[56.25vw]">

            <video 
            className="w-full 
            h-[54.25vw] sm:h-[54.25vw] md:h-[54.25vw] lg:h-[56.25vw] xl:h-[56.25vw] 2xl:h-[50.25vw]
            object-cover 
            brightness-[70%]"
            controls autoPlay muted loop
            poster={data?.thumbnailUrl} src={data?.videoUrl}>
            </video>

            <div className="absolute
            top-[24%] md:top-[31%] lg:top-[45%] xl:top-[45%]
            ml-[1.04rem] sm:ml-[1.08rem] md:ml-[2.2rem] lg:ml-[2.84rem] xl:ml-[3.8rem]">

                <h1 className="
                text-white sm:text-gray-400 md:text-gray-600 lg:text-orange-400 xl:text-green-600
                text-sm sm:text-xl md:text-5xl lg:text-5xl xl:text-6xl
                h-full w-full
                tracking-tight
                font-extrabold
                drop-shadow-1xl">
                {truncate(data?.title, 25)}
                </h1>

                <h2 className="__description
                text-[#e0e0e0] 
                text-[8px] md:text-lg lg:text-[22px]
                font-light
                mt-3 md:mt-5 lg:mt-5
                w-[38%] sm:w-[70%] md:w-[80%] lg:w-[37%] xl:w-[37%] 
                drop-shadow-xl
                ">
                {truncate(data?.description, 190)}
                </h2>

{/*                 <div className="flex flex-row items-center mt-3 md:mt-8 gap-3">
                    <button className="
                    bg-white
                    text-white
                    bg-opacity-30
                    rounded-md
                    py-1 md:py-2
                    px-2 md:px-4
                    w-auto
                    text-xs lg:text-lg
                    font-semibold
                    flex
                    flex-row
                    items-center
                    hover:bg-opacity-20
                    transition
                    ">
                        <BsFillPlayFill className="mr-1"/>
                        Play
                    </button>
                    <button className="
                    bg-white
                    text-white
                    bg-opacity-30
                    rounded-md
                    py-1 md:py-2
                    px-2 md:px-4
                    w-auto
                    text-xs lg:text-lg
                    font-semibold
                    flex
                    flex-row
                    items-center
                    hover:bg-opacity-20
                    transition
                    ">
                        <AiOutlineInfoCircle className="mr-1"/>
                        More Info
                    </button>
                </div> */}
            </div>
        </div>
    )
}

export default Billboard;