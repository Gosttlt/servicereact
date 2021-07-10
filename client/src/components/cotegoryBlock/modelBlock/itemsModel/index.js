import React, { useMemo } from 'react'
import ModelItem from './modelItem'
import s from './s.module.css'

export default function ItemsModel({ models, activityWatcher, setLoadServices }) {

    let items = useMemo(
        () => models.map(
            item => <ModelItem
                key={item.key}
                onClick={() => setLoadServices(item.key)}
                keyName={item.key}
                icon={item.icon}
                model={item.name}
                active={activityWatcher.model}
                typeDevice={item.typeDevice} />),
        [models, activityWatcher, setLoadServices])

    return (
        <div className={s.modelBlock}>
            {items}
        </div>
    )
}
