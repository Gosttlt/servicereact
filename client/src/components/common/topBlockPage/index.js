import React from 'react'
import LeftBlock from './leftBlock'
import RightBlockImg from './rightBlockImg'
import s from './s.module.css'

export default function TopBlockPage({ h1Target, city, advantagesItems }) {
  return (
    <div className={s.topBlock}>
      <div className="container">
        <div className={s.topContainer}>
          <LeftBlock h1Target={h1Target} city={city} advantagesItems={advantagesItems} />
          <div></div>
        </div>
      </div>
      <RightBlockImg />
    </div>
  )
}
