import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from '../styles/globalStyles'
import Theme from '../styles/theme'
import Layout from '../Components/Layout/Layout'

export const MyApp : React.FC<{ Component : React.FC, pageProps : any }> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default MyApp