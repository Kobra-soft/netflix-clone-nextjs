import { NextPageContext } from "next"
import Head from "next/head";
import Header from "@/components/Header";

import { getSession} from "next-auth/react"
import useCurrentUser from "@/hooks/useCurrentUser";
import Navbar from "@/components/Navbar";

import Billboard from "@/components/Billboard";
import MovieList from "@/components/MovieList";
import useMovieList from "@/hooks/useMovieList";
import { Text } from "@chakra-ui/react";


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
   <div className="relative h-screen bg-gradient-to-b from-gray-900/10
   to-[#010511] lg:h-[140vh]">
    <Head>
    <title>Netflix - Clone</title>
    <meta name="description" content="Developed By Kobra_Soft" />
    <link rel="shortcut icon" href="/favicon/favicon2.ico" />
    </Head>

    <Header/>

    <main>
      { /* Banner */ }
      <section>
      { /* Row */ }
      { /* Row */ }
      { /* Row */ }
      { /* Row */ }
      { /* Row */ }
      { /* Row */ }
      </section>
    </main>
    { /* Modal */ }

    {/* <Navbar />  */}
    
    {/* <Billboard/> */}

    {/*     
      <div className="pb-5 lg:pb-5 text-white">
      <MovieList title="Trending Now" data={movies}/>
      <Text className="text-white">Trending Now</Text>
      </div> */}

      </div>
  )
}