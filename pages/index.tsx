import { NextPageContext } from "next"
import { getSession} from "next-auth/react"

import useCurrentUser from "@/hooks/useCurrentUser";
import Navbar from "@/components/Navbar";

import Head from "next/head";
import Billboard from "@/components/Billboard";
import MovieList from "@/components/MovieList";
import useMovieList from "@/hooks/useMovieList";


export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      }
    }
  }

  return {
    props: {}
  }
}

export default function Home() {
  const { data: user } = useCurrentUser();
  const { data: movies = [] } = useMovieList();

  return (
   <>
    <Head>
    <title>Netflix - Clone</title>
    <meta name="description" content="Developed By Kobra_Soft" />
    <link rel="shortcut icon" href="/favicon/favicon2.ico" />
    </Head>

    <Navbar />
    
    <Billboard/>
    
    <div className="scrollHor2 pb-5 lg:pb-5">
      <MovieList title="Trending Now" data={movies}/>
    </div>
    <div className="lg:mt-[16.4rem]">
      <MovieList title="Recently Added" data={movies}/>
    </div>
{/*     <div className="lg:mt-[16.4rem]">
      <MovieList title="Sci-Fi Films" data={movies}/>
    </div>
    <div className="lg:mt-[16.4rem]">
      <MovieList title="My List" data={movies}/>
    </div> */}
   </>
  )
}
