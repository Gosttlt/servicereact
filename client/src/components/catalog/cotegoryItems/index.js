import s from 'components/catalog/s.module.css'
import CotegoryItem from 'components/catalog/cotegoryItems/cotegoryItem'
import React, { useMemo } from 'react'

export default React.memo(function CotegoryItems({ data, active, setActive, wh, cotegory }) {

    const Item = useMemo(
        () => data.map(
            r => <CotegoryItem
                key={r.key}
                onClick={() => { setActive(r.key) }}
                active={active}
                keyName={r.key}
                img={r.img}
                name={r.name}
                wh={wh} />), [data, active, setActive, wh])

    return (
        <div className={s[cotegory]}>
            {Item}
        </div>
    )
})