import useBillboard from "@/hooks/useBillboard";
import React from "react";

import { AiOutlineInfoCircle } from "react-icons/ai"
import { BsFillPlayFill} from "react-icons/bs"

const Billboard = () => {
    const { data } = useBillboard();

    return (
        <div className="relative h-[56.25vw]">
            <video 
            className="
            w-full
            h-[50.25vw]
            object-cover
            brightness-[70%]
            " 
            autoPlay
            muted
            loop
            poster={data?.thumbnailUrl} 
            src={data?.videoUrl}>
            </video>
            <div className="absolute top-[61%] md:top-[31%] lg:top-[40%] ml-4 md:ml-8 lg:ml-14">
                <h1 className="text-white text-2xl md:text-5xl h-full w-[55%] lg:text-6xl tracking-tight font-extrabold drop-shadow-1xl">
                    {data?.title}
                </h1>
                <h2 className="
                text-white 
                text-[8px] 
                md:text-lg
                lg:text-[22px]
                font-light
                mt-3
                md:mt-5
                lg:mt-5
                w-[90%]
                md:w-[80%]
                lg:w-[37%]
                drop-shadow-xl
                ">
                    {data?.description}
                </h2>
                <div className="flex flex-row items-center mt-3 md:mt-8 gap-3">
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
                </div>
            </div>

        </div>
    )
}

export default Billboard;