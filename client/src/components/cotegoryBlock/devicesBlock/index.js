import CotegoryItem from "components/cotegoryBlock/cotegoryItem"
import s from 'components/cotegoryBlock/s.module.css'
import { useMemo } from "react"




export default function DevicesBlock({ device, activityWatcher, setActiveDevice }) {

    const devices = useMemo(() => device.map(r => <CotegoryItem key={r.key} onClick={() => { setActiveDevice(r.key) }} active={activityWatcher.device} keyName={r.key} img={r.img} name={r.name} w="70" h="70" />), [device, activityWatcher, setActiveDevice])

    return (
        <div className={`container ${s.divaces}`}>
            {devices}
        </div>
    )
}