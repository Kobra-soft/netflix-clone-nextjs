import MuiModal from "@mui/material/Modal"
import { useRecoilState } from "recoil"
import { modalState, movieState } from "@/atoms/modalAtom";
import { PlusIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { Movie } from "@/typings";
import { set } from "lodash";
import { Element } from "@/typings";
import { Genre } from "@/typings";
import ReactPlayer from "react-player";
import { FaPlay, FaThumbsUp } from "react-icons/fa";
import { BsVolumeOff, BsVolumeUp } from "react-icons/bs";

function Modal() {
    const [showModal, setShowModal] = useRecoilState(modalState);
    const [movie, setMovie] = useRecoilState(movieState);
    const [data, setData] = useState();
    const [ trailer, setTrailer ] = useState('');
    const [genres, setGenres] = useState<Genre[]>([]);
    const [muted, setMuted] = useState(false);

    useEffect(() => {
      if (!movie) return
      
      async function fetchMovie() {
        const data = await fetch(
          `https://api.themoviedb.org/3/${
            movie?.media_type === 'tv' ? 'tv' : 'movie'
          }/${movie?.id}?api_key=${
            process.env.NEXT_PUBLIC_API_KEY
          }&language=en-US&append_to_response=videos`
        ).then((response) => response.json())

        setData(data)

        if (data?.videos) {
          const index = data.videos.results.findIndex((element: Element) => element.type === 'Trailer')
          setTrailer(data.videos.results[index]?.key)
       /* console.log(data) */
        } 

        if (data?.genres) {
          setGenres(data.genres)
        }
      }

        fetchMovie()
    }, [movie])

    const handleClose = () => {
        setShowModal(false);
    }

    /* console.log(trailer) */

  return (
    <MuiModal 
    open={showModal} 
    onClose={handleClose}
    className="fixed !top-7 left-0 right-0 z-50 mx-auto w-full max-w-5xl overflow-hidden overflow-y-scroll rounded-md scrollbar-hide" 
    >
        <>
        <button onClick={handleClose}
                className="modalButton absolute right-5 top-5 !z-40 h-9 w-9 bg-[#181818] hover:bg-[#181818]">
          <XMarkIcon className="h-6 w-6" />
        </button>

        <div className="relative pt-[56.25%]">
          <ReactPlayer 
          url={`https://www.youtube.com/watch?v=${trailer}`}
          width='100%'
          height='100%'
          style={{ position: 'absolute', top: 0, left: 0 }}
          playing
          muted={muted}
          controls={false}
          />

        <div className="absolute bottom-10 flex w-full items-center justify-between px-10">
          <div className="flex space-x-2">
            <button className="flex items-center gap-x-2 rounded bg-white px-8 text-xl
            font-bold text-black transition hover:bg-[#e6e6e6]">
              <FaPlay className="h-7 w-7 text-black" />
              Play
            </button>

            <button className="modalButton">
              <PlusIcon className="h-7 w-7" />
            </button>

            <button className="modalButton">
              <FaThumbsUp className="h-5 w-5" />
            </button>
          </div>

          <button onClick={() => setMuted(!muted)}>
            {muted ? (
              <BsVolumeOff className="h-11 w-11"/>
            ) : (
              <BsVolumeUp className="h-11 w-11"/>
            )}
          </button>
        </div>

        </div>

        </>
    </MuiModal>
  )
}

export default Modal