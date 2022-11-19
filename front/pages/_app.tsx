import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Layout } from '../layouts/layout'

function MyApp({ Component, pageProps }: AppProps) {
  // return <Component {...pageProps} />
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp