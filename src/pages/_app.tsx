import { SessionProvider } from 'next-auth/react'
import { RecoilRoot } from 'recoil'

import type { AppProps } from 'next/app'

import '../styles/globals.css'

import { GlobalLayout } from '../layouts'

// Use of the <SessionProvider> is mandatory to allow components that call
// `useSession()` anywhere in your application to access the `session` object.
export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session} refetchInterval={0}>
      <RecoilRoot>
        <GlobalLayout>
          <Component {...pageProps} />
        </GlobalLayout>
      </RecoilRoot>
    </SessionProvider>
  )
}
