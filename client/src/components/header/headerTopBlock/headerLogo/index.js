import { NavLink } from 'react-router-dom'
import s from './s.module.css'
import logoImg from 'images/header/logo.jpeg'

export default function HeaderLogo() {
    return (
        <NavLink to="/">
            <div className={s.logo}>
                <img alt="logo" src={logoImg} width="50" height="50" />
                <div className={s.logoText}>Service24</div>
            </div>
        </NavLink>
    )

}
