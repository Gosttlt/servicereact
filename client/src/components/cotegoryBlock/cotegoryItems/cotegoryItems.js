import s from 'components/cotegoryBlock/s.module.css'
import CotegoryItem from "components/cotegoryBlock/cotegoryItems/cotegoryItem"
import { useMemo } from "react"

export default function CotegoryItems({ cotegory, active, setActive, wh, name }) {

    const Item = useMemo(
        () => cotegory.map(
            r => <CotegoryItem
                key={r.key}
                onClick={() => { setActive(r.key, name) }}
                active={active}
                keyName={r.key}
                img={r.img}
                name={r.name}
                w={wh} h={wh} />), [cotegory, active, setActive, wh, name])

    return (
        <div className={s[name]}>
            {Item}
        </div>
    )
}