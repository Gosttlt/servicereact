import TopBlockPage from 'components/topBlockPage'

export default function ApplePage({ advantagesItems }) {
  return (
    <TopBlockPage
      h1Target='Apple'
      advantagesItems={advantagesItems}
      city='Тольятти'
    />
  )
}
