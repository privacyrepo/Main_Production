import { GlobalLayout } from 'layouts'
import { SessionProvider } from 'next-auth/react'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import 'styles/globals.css'

// Use of the <SessionProvider> is mandatory to allow components that call
// `useSession()` anywhere in your application to access the `session` object.
export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session} refetchInterval={0}>
      <RecoilRoot>
        <GlobalLayout>
          <ThemeProvider defaultTheme="system" attribute="class">
            <Component {...pageProps} />
          </ThemeProvider>
        </GlobalLayout>
      </RecoilRoot>
    </SessionProvider>
  )
}
