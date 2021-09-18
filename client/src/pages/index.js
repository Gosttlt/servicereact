import CotegoryBlock from 'components/catalog'
import Layout from 'components/layout'
import TopBlockPage from 'components/topBlockPage'
import LeftBlock from 'components/topBlockPage/leftBlock'



export default function Home() {
  return (
    <Layout>
      <TopBlockPage>
        <LeftBlock h1Target="Телефонов" city="Тольятти" />
      </TopBlockPage>
      <CotegoryBlock />
    </Layout>
  )
}
