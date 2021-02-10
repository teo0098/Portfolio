import Head from 'next/head'

import Intro from '../Components/Intro/Intro'
import Abilities from '../Components/Abilities/Abilities'
import Projects from '../Components/Projects/Projects'

const Home : React.FC = () => (
    <>
      <Head>
        <title>Teodor Tkaczyk</title>
      </Head>
      <Intro />
      <Abilities />
      <Projects />
    </>
)

export default Home