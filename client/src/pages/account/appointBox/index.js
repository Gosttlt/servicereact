import { useMemo } from 'react'
import AppointCol from './appointCol'
import s from './s.module.css'

export default function AppointBox({ userAppoints }) {
    let arr = useMemo(() => userAppoints.map((u, i) => (
        <div key={i} className={s.appoint}>
            <AppointCol head="Дата записи" text={u.date} />
            <AppointCol head="Услуга" text={u.service} />
            <AppointCol head="Модель" text={u.model} />
            <AppointCol head="Дата создания" text={u.dateCreate} />
        </div>
    )
    ), [userAppoints])

    return (
        <div className={s.appointBox}>
            {arr}
        </div>
    )
}