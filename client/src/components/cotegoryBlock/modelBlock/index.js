import React, { useMemo } from 'react'
import s from './s.module.css'
import ModelItem from './modelItem'

export default function ModelBlock({ models, activityWatcher, setLoadServices }) {

    let items = useMemo(() => models.map(item => <ModelItem key={item.key} onClick={() => setLoadServices(item.key)} keyName={item.key} icon={item.icon} model={item.name} active={activityWatcher.model} typeDevice={item.typeDevice} />), [models, activityWatcher, setLoadServices])

    return (
        <div className="container">
            <div className={s.modelBlock}>
                {items}
            </div>
        </div>
    )
}