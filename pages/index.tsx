import Head from 'next/head'

import Intro from '../Components/Intro/Intro'

const Home : React.FC = () => (
    <>
      <Head>
        <title>Teodor Tkaczyk</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Intro />
    </>
)

export default Home