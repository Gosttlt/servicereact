import React from 'react'
import s from './s.module.css'
import ModelIcon from './modelIcon'

export default function ModelItem({ model, active, keyName, onClick, typeDevice }) {
    const isActive = active === keyName ? s.active : ''
    console.log('ModelItem');
    return (
        <div onClick={onClick} className={s.itemModel + ' ' + isActive}>
            <ModelIcon icon={typeDevice} />
            <p className={s.name}>{model}</p>
        </div>
    )
}

