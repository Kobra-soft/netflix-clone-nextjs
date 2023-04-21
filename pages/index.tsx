import { NextPageContext } from "next"
import { getSession} from "next-auth/react"

import useCurrentUser from "@/hooks/useCurrentUser";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import Billboard from "@/components/Billboard";
import MovieList from "@/components/MovieList";

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

  return (
   <>
    <Head>
    <title>Netflix - Clone</title>
    <meta name="description" content="Developed B Kobra_Soft" />
    <link rel="shortcut icon" href="/favicon/favicon2.ico" />
    </Head>

    <Navbar />
    
    <Billboard/>
    <div className="pb-40">
      <MovieList />
    </div>
   </>
  )
}
