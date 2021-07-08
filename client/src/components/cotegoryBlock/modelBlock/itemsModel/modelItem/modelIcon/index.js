import React from 'react'
import s from 'components/cotegoryBlock/modelBlock/itemsModel/modelItem/s.module.css'

export default function ModelIcon({ icon }) {
    return (
        <span className={`material-icons ${s.materialIcons}`}>
            {icon === 'mob' && 'stay_primary_portrait'}
            {icon === 'tab' && 'tablet_mac'}
            {icon === 'book' && 'laptop_mac'}
        </span>
    )
}
