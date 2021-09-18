import s from './s.module.css'
import React from 'react'

export default React.memo(function CotegoryHead({ head }) {
    return (
        <div className={s.head}>- {head} -</div>
    )
})