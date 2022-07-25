import type { GetServerSidePropsContext, NextPage } from 'next'
import Head from 'next/head'

import { getSession } from 'next-auth/react'

const notHittable: NextPage = () => {
  return (
    <div>
      <Head>
        <title>protected</title>
      </Head>
      protected route
    </div>
  )
}
export default notHittable

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getSession(context)

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: { session },
  }
}
