import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

import {BsChevronLeft, BsChevronRight} from "react-icons/bs"
import {BiChevronLeft, BiChevronRight} from "react-icons/bi"
import {BsChevronCompactLeft, BsChevronCompactRight} from "react-icons/bs"
import {FaChevronLeft, FaChevronRight} from "react-icons/fa"

import {HiOutlineChevronLeft, HiOutlineChevronRight} from "react-icons/hi"

import {IoChevronBackCircleSharp, IoChevronForwardCircleSharp, IoChevronBackCircleOutline, IoChevronForwardCircleOutline} from "react-icons/io5"

import {TbChevronsLeft, TbChevronsRight, TbCircleChevronsLeft, TbCircleChevronsRight} from "react-icons/tb"

/* import { DocumentData } from 'firebase/firestore' */
import { useRef, useState } from 'react'
import { Movie } from '../typings'
import Thumbnail from './Thumbnail'

interface Props {
  title: string
  movies: Movie[] /* | DocumentData[] */
}

function Row({ title, movies }: Props) {
  const rowRef = useRef<HTMLDivElement>(null)
  const [isMoved, setIsMoved] = useState(false)

  const handleClick = (direction: string) => {
    setIsMoved(true)
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current

      const scrollTo =
        direction === 'left'
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth
      rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
    }
  }

  return (

    /* #### added relative on parent div 
    to fix the issue of TRENDING NOW title 
    not displaying over the Banner Hero image */
    <div className="relative md:h-80 lg:h-80 xl:h-80
                    bottom-0 sm:bottom-10 md:bottom-10 lg:bottom-10 xl:bottom-10
                    top-64 md:top-3 lg:top-3 xl:top-3
                    mb-7 md:mb-14 
                    space-y-0.5 md:space-y-2.5">
      <h3 className="w-56 cursor-pointer 
      text-[17.333px] md:text-2xl lg:text-[25.5px]
      tracking-[0.025rem] font-semibold
      text-[#ffffff] md:text-[#e5e5e5] transition duration-200 hover:text-white">
        {title}
      </h3>
      <div className="group relative md:-ml-2">
        <HiOutlineChevronLeft
          className={`absolute top-0 bottom-0 left-2 z-40 m-auto
          h-6 w-6 md:h-9 md:w-9 lg:h-12 lg:w-12 xl:h-14 xl:w-14
          cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 ${
            !isMoved && 'hidden'
          }`}
          onClick={() => handleClick('left')}
        />
        {/* THUMBNAIL! */}
        <div
          className="flex items-center space-x-1.5 overflow-x-scroll scrollbar-hide md:space-x-[0.5rem] md:pl-2"
          ref={rowRef}
        >
          {movies.map((movie) => (
            <Thumbnail key={movie.id} movie={movie} />
          ))}
        </div>

        <HiOutlineChevronRight
          className="absolute top-0 bottom-0 right-2 z-40 m-auto 
          h-6 w-6 md:h-9 md:w-9 lg:h-12 lg:w-12 xl:h-14 xl:w-14
          cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100"
          onClick={() => handleClick('right')}
        />
      </div>
    </div>
  )
}

export default Row
