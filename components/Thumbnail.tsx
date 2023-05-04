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
     min-h-[16rem] min-w-[171px]
     md:hover:scale-105">
        <Image
        src={`https://image.tmdb.org/t/p/w500${
          /* movie.backdrop_path || */ movie.poster_path
        }`}
        className="rounded-[3px] object-cover"
        fill
        alt=""
      />
    </div>
  )
}

export default Thumbnail