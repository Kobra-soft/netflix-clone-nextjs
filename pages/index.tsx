import { NextPageContext } from "next"
import { getSession} from "next-auth/react"

import useCurrentUser from "@/hooks/useCurrentUser";
import Navbar from "@/components/Navbar";
import Head from "next/head";

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
    <link rel="shortcut icon" href="/favicon/favicon2.ico" />
    </Head>

    <Navbar/>
   </>
  )
}
