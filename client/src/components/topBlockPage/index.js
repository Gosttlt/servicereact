import Container from 'components/shared/container'
import React from 'react'
import RightBlockImg from './rightBlockImg'
import s from './s.module.css'


export default function TopBlockPage({ children }) {
  return (
    <div className={s.topBlock}>
      <Container>
        <div className={s.topContainer}>
          {children}
          <div></div>
        </div>
      </Container>
      <RightBlockImg />
    </div>
  )
}
