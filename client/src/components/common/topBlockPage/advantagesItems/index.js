import React, { useMemo } from 'react'
import AdvantagesItem from './advantagesItem'

export default function AdvantagesItems({ advantagesItems }) {

    let advantagesItemsArr = useMemo(
        () => advantagesItems.map(
            t => <AdvantagesItem key={t.title} title={t.title} icon={t.icon} />),
        [advantagesItems])

    return (
        <ul>
            {advantagesItemsArr}
        </ul>
    )
}







