import { Movie } from "@/typings"
import Image from "next/image"

interface Props {
    // When using firebase
    // movie: Movie | DocumentData
    movie: Movie
}

function Thumbnail({movie}: Props) { 
  return (
    <div className="relative cursor-pointer transition duration-200 ease-out
      sm:min-h-[16rem] sm:min-w-[171px] min-h-[12rem] min-w-[131px] lg:min-h-[16rem] lg:min-w-[171px]
     md:hover:scale-105">
        <Image
        src={`https://image.tmdb.org/t/p/w500${
          /* movie.backdrop_path || */ movie.poster_path
        }`}
        className="rounded-[3px] object-cover sm:object-contain"
        fill
        alt=""
      />
    </div>
  )
}

export default Thumbnail