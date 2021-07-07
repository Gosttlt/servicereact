import { NavLink } from 'react-router-dom'
import s from 'components/header/headerTopBlock/s.module.css'
import logoImg from 'images/header/logo.jpeg'

export default function HeaderTopBlock({ isAuth, userName, userEmail, setAuthLogout }) {

    return (
        <div className={`container ${s.headerTopBlock}`}>
            <HeaderLogo />
            <HeaderAddress address="Тополиная 1а" />
            <HeaderPhone phone="783-753" />
            <WorkingHours time="C 10-00 до 20-00" wokrWeek="Без выходных" />
            {isAuth &&
                <div className={s.lkLoginBlock}>
                    <NavLink to="/lk" className={s.faceNameBox}>
                        <span className={`material-icons ${s.accountIcon}`}>
                            account_circle
                        </span>
                        <div className={s.accountName}>
                            {userName || userEmail}
                        </div>
                    </NavLink>
                    <NavLink to="/auth" onClick={setAuthLogout}>
                        <div className={s.login}>
                            <span className={`material-icons ${s.loginIcon}`}>
                                logout
                            </span>
                            <div className={s.loginText}>Выход</div>
                        </div>
                    </NavLink>
                </div>
            }
            {!isAuth &&
                <NavLink to="/auth">
                    <div className={s.login}>
                        <span className={`material-icons ${s.loginIcon}`}>
                            login
                        </span>
                        <div className={s.loginText}>Вход</div>
                    </div>
                </NavLink>
            }
        </div>
    )
}


function HeaderLogo() {
    return (
        <NavLink to="/">
            <div className={s.logo}>
                <img alt="logo" src={logoImg} width="50" height="50" />
                <div className={s.logoText}>Service24</div>
            </div>
        </NavLink>
    )

}
function HeaderAddress({ address }) {
    return (
        <div className={s.address}>{address}</div>
    )
}
function HeaderPhone({ phone }) {
    return (
        <div className={s.phoneBox}>
            <span className={`material-icons ${s.phoneImg}`}>
                phone_in_talk
            </span>
            <div className={s.phone}>{phone}</div>
        </div>
    )
}
function WorkingHours({ time, wokrWeek }) {
    return (
        <div className={s.workingHours}>
            <div className={s.timeBox}>
                <div>{time}</div>
                <div>{wokrWeek}</div>
            </div>
        </div>
    )
}
