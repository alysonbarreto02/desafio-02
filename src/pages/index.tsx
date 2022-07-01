import type { NextPage } from 'next'
import Head from '../components/Head/Head'
import Init from '../components/Init/Init'
import SobreMim from '../components/SobreMim/SobreMim'
import Experiencias from "../components/Experiencias/Experiencias"
import Projetos from '../components/Projetos/Projetos'

const Home: NextPage = () => {
  return (
    <div>
      <Head />
      <Init />
      <SobreMim />
      <Experiencias />
      <Projetos />
    </div>
  )
}

export default Home
