import { SessionProvider } from 'next-auth/react'
import '../styles/globals.css'

import { GlobalLayout } from '../layouts'
import type { AppProps } from 'next/app'

// Use of the <SessionProvider> is mandatory to allow components that call
// `useSession()` anywhere in your application to access the `session` object.
export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session} refetchInterval={0}>
        <GlobalLayout>
          <Component {...pageProps} />
        </GlobalLayout>
    </SessionProvider>
  )
}
