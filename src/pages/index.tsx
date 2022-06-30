import type { NextPage } from 'next'
import Head from '../components/Head/Head'
import Init from '../components/Init/Init'
import SobreMim from '../components/SobreMim/SobreMim'

const Home: NextPage = () => {
  return (
    <div>
      <Head />
      <Init />
      <SobreMim />
    </div>
  )
}

export default Home
