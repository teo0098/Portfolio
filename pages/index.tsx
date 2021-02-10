import Head from 'next/head'

import Intro from '../Components/Intro/Intro'
import Abilities from '../Components/Abilities/Abilities'

const Home : React.FC = () => (
    <>
      <Head>
        <title>Teodor Tkaczyk</title>
      </Head>
      <Intro />
      <Abilities />
    </>
)

export default Home