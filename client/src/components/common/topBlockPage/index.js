import React from 'react'
import s from './s.module.css'
import AdvantagesItems from "./advantagesItems";
import RepairTime from './repairTime';
import LeftBlockHead from './repairTime/leftBlockHead';

export default function TopBlockPage({ h1Target, city, advantagesItems }) {
  return (
    <div className={s.topBlock}>
      <div className="container">
        <div className={s.topContainer}>
          <div className={s.topLeftBlock}>
            <LeftBlockHead h1Target={h1Target} city={city} />
            <RepairTime text="Починим при Вас за 20 минут" />
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

