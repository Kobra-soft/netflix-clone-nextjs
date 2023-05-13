import { modalState, movieState } from "@/atoms/modalAtom";
import { Movie } from "@/typings"
import Image from "next/image"
import { useRecoilState } from "recoil";

interface Props {
    // When using firebase
    // movie: Movie | DocumentData
    movie: Movie
}

function Thumbnail({movie}: Props) { 
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState);

  return (
    <div className="relative cursor-pointer transition duration-200 ease-out
    sm:min-h-[16rem] sm:min-w-[171px] min-h-[11rem] min-w-[120px] lg:min-h-[16rem] lg:min-w-[171px]
     md:hover:scale-105"
     onClick={() => {
      setCurrentMovie(movie)
      setShowModal(true)
    }}
     >
        <Image
        src={`https://image.tmdb.org/t/p/w500${
          /* movie.backdrop_path || */ movie.poster_path
            }`}
        className="rounded-[4px] sm:rounded-[3px] md:rounded-[3px] object-cover sm:object-contain"
        fill
        /* sizes="sm:min-h-[16rem] sm:min-w-[171px] min-h-[11rem] min-w-[120px] lg:min-h-[16rem] lg:min-w-[171px]" */
        alt=""
      />
    </div>
  )
}

export default Thumbnail