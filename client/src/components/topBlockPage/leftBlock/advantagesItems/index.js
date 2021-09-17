import React, { useMemo } from 'react'
import AdvantagesItem from './advantagesItem'

const advantagesItems = [
    { title: 'Ремонт от 490 руб!', icon: 'account_balance_wallet' },
    { title: 'Оригинальные комплектующие!', icon: 'settings' },
    { title: '100% гарантия!', icon: 'fact_check' },
    { title: '10 опыта!', icon: 'manage_accounts' },
    { title: 'Цены ниже в среднем на 10%!', icon: 'analytics' },
]

export default function AdvantagesItems() {

    let advantagesItemsArr = advantagesItems.map(t => <AdvantagesItem key={t.title} title={t.title} icon={t.icon} />)

    return (
        <ul>
            {advantagesItemsArr}
        </ul>
    )
}







