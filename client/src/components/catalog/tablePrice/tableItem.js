import React from 'react'
import s from './s.module.css'

export default function TableItem({ service, time, price, present, oldPrice, discountContent }) {

    return (
        <ul className={s.tableRow}>
            <li>{service}
                {present === 'glass' && <PresentGlass />}
            </li>
            <li>{time}</li>
            {oldPrice ?
                <OldPrice oldPrice={oldPrice} price={price} discountContent={discountContent} /> :
                <li>{price}</li>
            }
        </ul>
    )
}
function OldPrice({ oldPrice, price, discountContent }) {

    return (
        <li>
            <div className={s.priceBlock}>
                <span className={s.newPrice}>{price}</span>
                <span className={s.oldPrice}>{oldPrice}</span>
            </div>
            <div className={s.discountContent}>{discountContent}</div>
        </li>
    )

}
function PresentGlass() {
    return (
        <span className={s.protectionGift}>
            <span className={`material-icons ${s.protectionIcon}`}>gpp_good</span>
            + защита в подарок
        </span>
    )

}