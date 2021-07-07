import React from 'react'
import s from 'components/cotegoryBlock/modelBlock/itemsModel/modelItem/s.module.css'

export default function NameModel({ name }) {
    return (
        <p className={s.name}>{name}</p>
    )
}