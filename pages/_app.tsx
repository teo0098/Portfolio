import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from '../styles/globalStyles'
import Theme from '../styles/theme'
import Layout from '../Components/Layout/Layout'

export const MyApp : React.FC<{ Component : React.FC, pageProps : any }> = ({ Component, pageProps }) => (
  <>
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="Description" content="Teodor Tkaczyk - Fronted Developer. Let's make a brilliant website together!" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Balsamiq+Sans&family=Kalam&display=swap" rel="stylesheet" />
        <link rel="manifest" href="/manifest.json" />
    </Head>
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  </>
)

export default MyApp