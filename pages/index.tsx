import Head from 'next/head'
import dynamic from 'next/dynamic'

const Abilities = dynamic(
  () => import('../Components/Abilities/Abilities'),
  { loading: () => <p style={{textAlign: 'center'}}>Loading...</p> }
)

const Contact = dynamic(
  () => import('../Components/Contact/Contact'),
  { loading: () => <p style={{textAlign: 'center'}}>Loading...</p> }
)

const Projects = dynamic(
  () => import('../Components/Projects/Projects'),
  { loading: () => <p style={{textAlign: 'center'}}>Loading...</p> }
)

import Intro from '../Components/Intro/Intro'

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