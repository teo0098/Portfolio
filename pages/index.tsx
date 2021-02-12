import Head from 'next/head'

import Intro from '../Components/Intro/Intro'
import Abilities from '../Components/Abilities/Abilities'
import Projects from '../Components/Projects/Projects'
import Contact from '../Components/Contact/Contact'

const Home : React.FC = () => (
    <>
      <Head>
        <title>Teodor Tkaczyk</title>
      </Head>
      <Intro />
      <Abilities />
      <Projects />
      <Contact />
    </>
)

export default Home