import type { AppProps } from 'next/app'

import { SessionProvider } from 'next-auth/react'

import { ThemeProvider as DarkModeThemeProvider } from 'next-themes'

import { GlobalLayout } from 'layouts'
import { SkeletonTheme as SkeletonThemeProvider } from 'react-loading-skeleton'
import { RecoilRoot as StateManager } from 'recoil'

import 'styles/globals.css'

// Use of the <SessionProvider> is mandatory to allow components that call
// `useSession()` anywhere in your application to access the `session` object.
export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session} refetchInterval={0}>
      <StateManager>
        <DarkModeThemeProvider defaultTheme="system" attribute="class">
          <SkeletonThemeProvider>
            <GlobalLayout>
              <Component {...pageProps} />
            </GlobalLayout>
          </SkeletonThemeProvider>
        </DarkModeThemeProvider>
      </StateManager>
    </SessionProvider>
  )
}
