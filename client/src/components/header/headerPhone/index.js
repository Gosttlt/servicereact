import s from './s.module.css'
import React from 'react'

export default React.memo(function HeaderPhone({ phone }) {
    return (
        <div className={s.phoneBox}>
            <span className={`material-icons ${s.phoneImg}`}>
                phone_in_talk
            </span>
            <div className={s.phone}>{phone}</div>
        </div>
    )
})
