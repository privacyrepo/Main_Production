import type { NextPage } from 'next'
import Head from 'next/head'

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const loadingSkeleton: NextPage = () => {
  return (
    <>
      <Head>
        <title>loadingSkeleton</title>
      </Head>
      <Skeleton count={5} />
    </>
  )
}
export default loadingSkeleton
