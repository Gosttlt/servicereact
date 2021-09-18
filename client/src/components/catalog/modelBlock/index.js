import React, { useMemo } from 'react'
import ModelItem from './modelItem'
import s from './s.module.css'

export default React.memo(function ItemsModel({ data, active, setActive }) {
    console.log('ItemsModel');
    let items = useMemo(
        () => data.map(
            item => <ModelItem
                key={item.key}
                onClick={() => setActive(item.key)}
                keyName={item.key}
                icon={item.icon}
                model={item.name}
                active={active}
                typeDevice={item.typeDevice} />),
        [data, active, setActive])
    return (
        <div className={s.modelBlock}>
            {items}
        </div>
    )
})
