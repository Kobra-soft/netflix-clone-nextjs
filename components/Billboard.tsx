import useBillboard from "@/hooks/useBillboard";
import React, { useState } from "react";

import { AiOutlineInfoCircle } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";

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
            h-[54.25vw] sm:h-[54.25vw] md:h-[54.25vw] lg:h-[56.25vw] xl:h-[56.25vw] 2xl:h-[48.25vw]
            object-cover 
            brightness-[70%]"
        controls
        autoPlay
        muted
        loop
        poster={data?.thumbnailUrl}
        src={data?.videoUrl}
      ></video>

      <div
        className="absolute
            top-[26.5%] sm:top-[34.5%] md:top-[34.5%] lg:top-[36.5%] xl:top-[40%]
            ml-[1.04rem] sm:ml-[1.08rem] md:ml-[2.2rem] lg:ml-[2.84rem] xl:ml-[3.8rem]"
      >
        <h1
          className="
                text-white sm:text-white md:text-white lg:text-white xl:text-white
                text-sm sm:text-xl md:text-4xl lg:text-5xl xl:text-6xl
                h-full w-full
                tracking-tight
                font-extrabold
                drop-shadow-1xl
                "
        >
          {truncate(data?.title, 25)}
        </h1>

        <h2
          className="__description
                text-[#e0e0e0]
                text-[6px] md:text-[12px] lg:text-[15px] xl:text-[22px]
                font-light
                mt-3 md:mt-5 lg:mt-5
                w-[38%] sm:w-[42%] md:w-[38%] lg:w-[47%] xl:w-[37%]
                drop-shadow-xl
                "
        >
          {truncate(data?.description, 190)}
        </h2>

        <div className="flex flex-row items-center mt-3 md:mt-8 gap-2 lg:gap-3 xl:gap-3">
          <button
            className="flex flex-row items-center transition w-auto rounded-[4px]
                    bg-white bg-opacity-100 hover:bg-opacity-70
                    py-0.5 sm:py-0.5 md:py-0.5 lg:py-1
                    px-3.5 sm:px-3.5 md:px-3 lg:px-8 xl:px-8
                    text-black font-black
                    text-[10px] lg:text-[16px] xl:text-[22px]"
          >
            <BsFillPlayFill className="mr-1 h-6 w-6 md:h-8 md:w-8 lg:h-9 lg:w-9 xl:h-12 xl:w-12" />
            Play
          </button>

          <button
            className="flex flex-row items-center transition w-auto rounded-[2px]
                    bg-[#656a72] bg-opacity-100 hover:bg-opacity-70
                    py-1.5 sm:py-1.5 md:py-1.5 lg:py-2.5 xl:py-2.5
                    px-3.5 sm:px-3.5 md:px-5 lg:px-5 xl:px-8
                    text-white font-black 
                    text-[10px] lg:text-[16px] xl:text-[22px]"
          >
            <AiOutlineInfoCircle className="mr-2 h-4 w-4 md:h-6 md:w-6 lg:h-8s lg:w-8 xl:h-9 xl:w-9" />
            More Info
          </button>
        </div>

        {/*                 <div className="flex space-x-3">
                    <button className="bannerButton bg-white text-black">
                        <BsFillPlayFill className="h-4 w-4 text-black md:h-7 md:w-7"/> Play
                    </button>
                    <button className="bannerButton bg-white text-black">
                        <BsFillPlayFill className="h-4 w-4 text-black md:h-7 md:w-7"/> Play
                    </button>
                </div> */}
      </div>
    </div>
  );
};

export default Billboard;
