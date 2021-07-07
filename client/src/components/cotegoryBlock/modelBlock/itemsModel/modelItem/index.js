import React from 'react'
import s from './s.module.css'
import ModelIcon from './modelIcon'
import NameModel from './nameModel'

export default function ModelItem({ model, active, keyName, onClick, typeDevice }) {
    return (
        <div onClick={onClick} className={s.itemModel + ' ' + (active === keyName ? s.active : '')}>
            <ModelIcon icon={typeDevice} />
            <NameModel name={model} />
        </div>
    )
}

