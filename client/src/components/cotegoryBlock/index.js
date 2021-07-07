import s from './s.module.css'
import CotegoryItem from './cotegoryItem'
import { useMemo } from 'react'

export default function CotegoryBlock({ company, activityWatcher, setActiveCompany }) {

    const companyItem = useMemo(() => company.map(r => <CotegoryItem key={r.key} onClick={() => { setActiveCompany(r.key) }} active={activityWatcher.company} keyName={r.key} img={r.img} name={r.name} w="100" h="100" />), [company, activityWatcher, setActiveCompany])
    return (
        <div className={`container ${s.cotegoryBox}`}>
            {companyItem}
        </div>
    )
}