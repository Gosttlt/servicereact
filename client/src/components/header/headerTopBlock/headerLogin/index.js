import s from './s.module.css'
import { NavLink } from 'react-router-dom'

const noop = () => { }

export default function HeaderLogin({ icon, text, onClick = noop }) {
    return (
        <NavLink to="/auth" onClick={onClick}>
            <div className={s.login}>
                <span className={`material-icons ${s.loginIcon}`}>
                    {icon}
                </span>
                <div className={s.loginText}>{text}</div>
            </div>
        </NavLink>

    )
}