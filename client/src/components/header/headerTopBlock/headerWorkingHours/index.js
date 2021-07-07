import s from './s.module.css'


export default function HeaderWorkingHours({ time, wokrWeek }) {
    return (
        <div className={s.workingHours}>
            <div className={s.timeBox}>
                <div>{time}</div>
                <div>{wokrWeek}</div>
            </div>
        </div>
    )
}