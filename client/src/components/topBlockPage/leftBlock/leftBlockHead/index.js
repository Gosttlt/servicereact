import s from './s.module.css'

export default function LeftBlockHead({ h1Target, city }) {
    return (
        <h1 className={s.h1}>Ремонт {h1Target} в {city}</h1>
    )
}