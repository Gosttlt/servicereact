import React from 'react'
import s from 'components/cotegoryBlock/s.module.css'


export default function CotegoryItem({ img, name, w, h, active, keyName, onClick }) {
    let pathImg = require(`images/categories/${img}`)
    return (
        <div onClick={onClick} className={s.cotegoryItem + ' ' + (active === keyName ? s.active : '')}>
            <img alt={name} src={pathImg.default} width={w} height={h} />
            <div className={s.cotegoryName}>{name}</div>
        </div>
    )
}