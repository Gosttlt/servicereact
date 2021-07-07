import s from './s.module.css'
import { NavLink } from 'react-router-dom'

export default function AccountIconHeader({ icon, userName, userEmail }) {
    return (
        <NavLink to="/lk" className={s.faceNameBox}>
            <span className={`material-icons ${s.accountIcon}`}>
                {icon}
            </span>
            <div className={s.accountName}>
                {userName || userEmail}
            </div>
        </NavLink>
    )
}