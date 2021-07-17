import s from './s.module.css'

export default function AppointCol({ head, text }) {
    return (
        <div className={s.colBox}>
            <div className={s.colHead}>{head}:</div>
            <div className={s.colText}>{text}</div>
        </div>
    )
}