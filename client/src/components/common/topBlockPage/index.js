import React from 'react'
import s from './s.module.css'
import TopAdvantagesItem from "./topAdvantagesItem";

export default function TopBlockPage({ h1Target, AdvantagesItems }) {
  let newArr = AdvantagesItems.map(t => <TopAdvantagesItem key={t.title} title={t.title} img={t.img} />)
  return (
    <div className={s.topBlock}>
      <div className="container">
        <div className={s.topContainer}>
          <div className={s.topLeftBlock}>
            <h1>Ремонт {h1Target} в Тольяттии</h1>
            <div className={s.repairTime}>Починим при Вас за 20 минут</div>
            <ul>
              {newArr}
            </ul>
          </div>
          <div className={s.topRightBlock}>
          </div>
        </div>
      </div>
      <div className={s.topRightBlockImg}>
      </div>
    </div>
  )
}