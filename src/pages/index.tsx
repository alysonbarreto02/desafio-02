import type { NextPage } from 'next'
import Head from '../components/Head/Head'
import Init from '../components/Init/Init'
import SobreMim from '../components/SobreMim/SobreMim'
import Experiencias from "../components/Experiencias/Experiencias"

const Home: NextPage = () => {
  return (
    <div>
      <Head />
      <Init />
      <SobreMim />
      <Experiencias />
    </div>
  )
}

export default Home
