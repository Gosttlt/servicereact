/** @format */

import TopBlockPage from 'components/common/topBlockPage'
import CotegoryBlockContainer from 'components/cotegoryBlock/cotegoryBlockContainer'
import DevicesBlockContainer from 'components/cotegoryBlock/devicesBlock/devicesBlockContainer'
import TeblePriceContainer from 'components/cotegoryBlock/tablePrice/teblePriceContainer'
import ModelBlockContainer from 'components/cotegoryBlock/modelBlock/modelBlockContainer'
import s from './s.module.css'
import { useEffect } from 'react'
import Preloader from 'components/common/preloader/preloader'

export default function Home({
  setLoadCompanyAndDevice,
  isLoading,
  advantagesItems,
}) {
  useEffect(() => {
    setLoadCompanyAndDevice()
  }, [setLoadCompanyAndDevice])

  return (
    <>
      <TopBlockPage
        h1Target='телефонов'
        advantagesItems={advantagesItems}
        city='Тольятти'
      />
      <div className={s.serviceBox}>
        {isLoading ? (
          <Preloader />
        ) : (
          <>
            <div className='h1 container'>Выбирите фирму</div>
            <CotegoryBlockContainer />
            <div className='h3 container'>Выберите device:</div>
            <DevicesBlockContainer />
            <div className='h3 container'>Выберите модель:</div>
            <ModelBlockContainer />
            <TeblePriceContainer />
          </>
        )}
      </div>
      <h1 className='container'>H1 + seo text</h1>
    </>
  )
}
