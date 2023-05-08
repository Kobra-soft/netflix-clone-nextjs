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

import { Movie } from '../typings'
import requests from "@/utils/requests";
import Banner from "@/components/Banner";
import Row from "@/components/Row";

/* export async function getServerSideProps(context: NextPageContext) {
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
} */

/* export default function Home() {
  const { data: user } = useCurrentUser();
  const { data: movies = [] } = useMovieList();
} */


interface Props {
  netflixOriginals: Movie[]
  trendingNow: Movie[]
  topRated: Movie[]
  actionMovies: Movie[]
  comedyMovies: Movie[]
  horrorMovies: Movie[]
  romanceMovies: Movie[]
  documentaries: Movie[]

  animationMovies: Movie[]
  familyMovies: Movie[]
  scifiMovies: Movie[]
}

const Home = ({
  netflixOriginals,
  actionMovies,
  comedyMovies,
  documentaries,
  horrorMovies,
  romanceMovies,
  topRated,
  trendingNow,

  animationMovies,
  familyMovies,
  scifiMovies,
}: Props) => {

  return (

      <div className="relative h-screen bg-gradient-to-b from-gray-900/10
      to-[#010511] lg:h-[140vh]">
        <Head>
        <title>Netflix - Clone</title>
        <meta name="description" content="Developed By Kobra_Soft" />
        <link rel="shortcut icon" href="/favicon/favicon2.ico" />
        </Head>

        <Header/>

        <main className="relative">
        {/* <Header/> */}
          {/* <Banner netflixOriginals={netflixOriginals} /> */}
          <Banner netflixOriginals={scifiMovies} />
          <section className="pl-4 sm:pl-4 md:pl-9 lg:pl-11 xl:pl-14">
          <Row title="Trending Now" movies={trendingNow} />
          <Row title="Top Rated" movies={topRated} />
          <Row title="Action" movies={actionMovies} />
          <Row title="Horror" movies={horrorMovies} />
          {/* My List */}
          <Row title="Comedies" movies={comedyMovies} />
          {/* <Row title="Romance Movies" movies={romanceMovies} /> */}
          {/* <Row title="Documentaries" movies={documentaries} /> */}

          {/* <Row title="Animation" movies={animationMovies} /> */}
          <Row title="Family" movies={familyMovies} />
          <Row title="Netflix Originals" movies={netflixOriginals} />
          <Row title="Sci-Fi & Fantasy" movies={scifiMovies} />
          </section>
        </main>
        { /* Modal */ }

      </div>
    )
  }

export default Home;

export const getServerSideProps = async () => {

    const [
      netflixOriginals,
      trendingNow,
      topRated,
      actionMovies,
      comedyMovies,
      horrorMovies,
      romanceMovies,
      documentaries,

      animationMovies,
      familyMovies,
      scifiMovies,
    ] = await Promise.all([
      fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
      fetch(requests.fetchTrending).then((res) => res.json()),
      fetch(requests.fetchTopRated).then((res) => res.json()),
      fetch(requests.fetchActionMovies).then((res) => res.json()),
      fetch(requests.fetchComedyMovies).then((res) => res.json()),
      fetch(requests.fetchHorrorMovies).then((res) => res.json()),
      fetch(requests.fetchRomanceMovies).then((res) => res.json()),
      fetch(requests.fetchDocumentaries).then((res) => res.json()),

      fetch(requests.fetchAnimation).then((res) => res.json()),
      fetch(requests.fetchFamilyMovies).then((res) => res.json()),
      fetch(requests.fetchSciFiMovies).then((res) => res.json()),
    ])

    return {
      props: {
        netflixOriginals: netflixOriginals.results,
        trendingNow: trendingNow.results,
        topRated: topRated.results,
        actionMovies: actionMovies.results,
        comedyMovies: comedyMovies.results,
        horrorMovies: horrorMovies.results,
        romanceMovies: romanceMovies.results,
        documentaries: documentaries.results,

        animationMovies: animationMovies.results,
        familyMovies: familyMovies.results,
        scifiMovies: scifiMovies.results,
      },
    }
}