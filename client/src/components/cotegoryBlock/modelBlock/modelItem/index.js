import React from 'react'
import s from 'components/cotegoryBlock/modelBlock/s.module.css'

export default function ModelItem({ model, active, keyName, onClick, typeDevice }) {
    return (
        <div onClick={onClick} className={s.itemModel + ' ' + (active === keyName ? s.active : '')}>
            <span className={`material-icons ${s.materialIcons}`}>
                {typeDevice === 'mob' && 'stay_primary_portrait'}
                {typeDevice === 'tab' && 'tablet_mac'}
                {typeDevice === 'book' && 'laptop_mac'}
            </span>
            <p className={s.name}>{model}</p>
        </div>
    )
}