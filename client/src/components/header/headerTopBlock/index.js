import { NavLink } from 'react-router-dom'
import s from 'components/header/headerTopBlock/s.module.css'
import HeaderLogo from './headerLogo'
import HeaderAddress from './headerAddress'
import HeaderPhone from './headerPhone'
import HeaderWorkingHours from './headerWorkingHours'
import HeaderLogin from './headerLogin'

export default function HeaderTopBlock({ isAuth, userName, userEmail, setAuthLogout }) {

    return (
        <div className={`container ${s.headerTopBlock}`}>
            <HeaderLogo />
            <HeaderAddress address="Тополиная 1а" />
            <HeaderPhone phone="783-753" />
            <HeaderWorkingHours time="C 10-00 до 20-00" wokrWeek="Без выходных" />
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
                    <HeaderLogin icon="login" text="Вход" onClick={setAuthLogout} />
                </div>
            }
            {!isAuth &&
                <HeaderLogin icon="login" text="Вход" />
            }
        </div>
    )
}


