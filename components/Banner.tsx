import { baseUrl } from '@/constants/movie';
import { Movie } from '@/typings';
import Image from 'next/image';
import { useEffect, useState } from 'react';

/* import useBillboard from "@/hooks/useBillboard"; */

import { AiOutlineInfoCircle } from "react-icons/ai"
import { BsFillPlayFill} from "react-icons/bs"

interface Props {
    netflixOriginals: Movie[];
}

function Banner({netflixOriginals}: Props) {
    const [movie, setMovie] = useState<Movie | null>(null);

    useEffect(() => {
        setMovie(netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)])
    }, [netflixOriginals])

    console.log(movie);

    function truncate(string: string, n: number) {
        return string?.length > n ? string.substr(0, n - 1) + "..." : string;
      }

      /* const { data } = useBillboard(); */

    return (
        <div className='relative h-[43.40vw]'>

            <div className='w-full 
            h-[124.25vw] sm:h-[54.25vw] md:h-[54.25vw] lg:h-[56.25vw] xl:h-[56.25vw] 2xl:h-[48.25vw]
            object-fill
            brightness-[70%]'>
            {/* <div className='absolute top-0 left-0 -z-10 h-[95vh] w-screen'> */}
                <Image src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`} 
                alt=''
                fill
                className=''
                
                />
            </div>

            <div className="absolute
            top-[26.5%] sm:top-[26.5%] md:top-[26.5%] lg:top-[26.5%] xl:top-[30%]
            ml-[1.04rem] sm:ml-[1.08rem] md:ml-[2.2rem] lg:ml-[2.84rem] xl:ml-[3.8rem]">

            <h1 className="
            text-white sm:text-white md:text-white lg:text-white xl:text-white
            text-sm sm:text-xl md:text-4xl lg:text-5xl xl:text-5xl
            h-full w-full
            tracking-tight
            font-extrabold
            drop-shadow-1xl">
            {movie?.title || movie?.name || movie?.original_name}
            {/* {truncate(movie?.title || movie?.name || movie?.original_name, 26)} */}
            {/* {truncate(data?.title, 25)} */}
            </h1>

            {/* <p>{movie?.overview}</p> */}
            <h2 className="__description
            text-[#e0e0e0] text-shadow
            text-[5px] sm:text-[12px] md:text-[12px] lg:text-[15px] xl:text-[22px]
            font-light
            mt-3 md:mt-5 lg:mt-5
            w-[52%] sm:w-[62%] md:w-[52%] lg:w-[37%] xl:w-[37%]
            drop-shadow-xl">{movie?.overview}</h2>
            {/* {truncate(movie?.overview, 225)}</h2> */}
            {/* {truncate(data?.description, 190)} */}

            <div className="flex flex-row items-center mt-3 md:mt-8 gap-1 lg:gap-3 xl:gap-3">
                    
                    <button 
                    className="flex flex-row items-center transition w-auto rounded-[4px]
                    bg-white bg-opacity-100 hover:bg-opacity-70
                    py-0.4 sm:py-0.5 md:py-0.5 lg:py-1
                    px-[11px] sm:px-3.5 md:px-3 lg:px-8 xl:px-8
                    text-black font-semibold md:font-black lg:font-black xl:font-black
                    text-[9px] lg:text-[16px] xl:text-[22px]">

                        <BsFillPlayFill className="mr-0.5 md:mr-1 lg:mr-1 xl:mr-1 h-5 w-5 md:h-8 md:w-8 lg:h-9 lg:w-9 xl:h-12 xl:w-12"/>
                        Play

                    </button>

                    <button 
                    className="flex flex-row items-center transition w-auto rounded-[4px]
                    bg-[#797a7b] bg-opacity-80 hover:bg-opacity-50
                    py-[3.0px] sm:py-1.5 md:py-1.5 lg:py-2.5 xl:py-2.5
                    px-[11px] sm:px-3.5 md:px-5 lg:px-5 xl:px-8
                    text-white font-medium md:font-black lg:font-black xl:font-black
                    text-[9px] lg:text-[16px] xl:text-[22px]">

                        <AiOutlineInfoCircle className="mr-1.5 md:mr-2 lg:mr-2 xl:mr-2 h-3.5 w-3.5 md:h-6 md:w-6 lg:h-8s lg:w-8 xl:h-9 xl:w-9"/>
                        More Info

                    </button>
                    
            </div>

            </div>

        </div>
    )
}

export default Banner;