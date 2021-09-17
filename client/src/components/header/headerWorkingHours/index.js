import s from './s.module.css'
import React from 'react'


export default React.memo(function HeaderWorkingHours({ time, wokrWeek }) {
    return (
        <div className={s.workingHours}>
            <div className={s.timeBox}>
                <div>{time}</div>
                <div>{wokrWeek}</div>
            </div>
        </div>
    )
})