/** @format */

import TopBlockPage from 'components/common/topBlockPage'
import TeblePriceContainer from 'components/cotegoryBlock/tablePrice/teblePriceContainer'
import ModelBlockContainer from 'components/cotegoryBlock/modelBlock/modelBlockContainer'
import s from './s.module.css'
import Preloader from 'components/common/preloader/preloader'
import CotegoryBlock from 'components/cotegoryBlock'

export default function Home({
  isLoading,
  advantagesItems,
  onActiveCompany,
  onActiveDivece,
  cotegoryCompony,
  cotegoryDevices,
  activityWatcher,
}) {
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
            <CotegoryBlock
              head='Выбирите фирму'
              cotegory={cotegoryCompony}
              activityWatcher={activityWatcher.compony}
              setActive={onActiveCompany}
              name='cotegoryBox'
              wh={100}
            />
            <CotegoryBlock
              head='Выберите device'
              cotegory={cotegoryDevices}
              activityWatcher={activityWatcher.device}
              setActive={onActiveDivece}
              name='divaces'
              wh={70}
            />
            <ModelBlockContainer head='Выберите модель' />
            <TeblePriceContainer />
          </>
        )}
      </div>
      <h1 className='container'>H1 + seo text</h1>
    </>
  )
}
