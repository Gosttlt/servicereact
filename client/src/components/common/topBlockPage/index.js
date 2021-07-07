import React from 'react'
import s from './s.module.css'
import AdvantagesItems from "./advantagesItems";

export default function TopBlockPage({ h1Target, advantagesItems }) {
  return (
    <div className={s.topBlock}>
      <div className="container">
        <div className={s.topContainer}>
          <div className={s.topLeftBlock}>
            <h1>Ремонт {h1Target} в Тольяттии</h1>
            <div className={s.repairTime}>Починим при Вас за 20 минут</div>
            <AdvantagesItems advantagesItems={advantagesItems} />
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