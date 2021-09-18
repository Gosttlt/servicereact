import React from 'react'
import s from './s.module.css'

export default React.memo(function ModelIcon({ icon }) {
    console.log('icon');
    return (
        <span className={`material-icons ${s.materialIcons}`}>
            {icon === 'mob' && 'stay_primary_portrait'}
            {icon === 'tab' && 'tablet_mac'}
            {icon === 'book' && 'laptop_mac'}
        </span>
    )
})
