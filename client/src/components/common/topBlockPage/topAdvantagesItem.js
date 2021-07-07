import React from 'react'
import s from './s.module.css'

export default function TopAdvantagesItem({ title, img }) {
    return (
        <li className={s.advantages}>
            <div className={`${s.advantagesSvg} material-icons`}>{img}</div>
            {title}</li>
    )
}



