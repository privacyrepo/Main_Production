import { SessionProvider } from 'next-auth/react'
import '../styles/globals.css'

import { ThemeProvider as ComponentProvider } from '@material-tailwind/react'

import type { AppProps } from 'next/app'

// Use of the <SessionProvider> is mandatory to allow components that call
// `useSession()` anywhere in your application to access the `session` object.
export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session} refetchInterval={0}>
      <ComponentProvider>
        <Component {...pageProps} />
      </ComponentProvider>
    </SessionProvider>
  )
}
