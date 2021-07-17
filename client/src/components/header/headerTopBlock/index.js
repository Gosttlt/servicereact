import s from 'components/header/headerTopBlock/s.module.css'
import HeaderLogo from './headerLogo'
import HeaderAddress from './headerAddress'
import HeaderPhone from './headerPhone'
import HeaderWorkingHours from './headerWorkingHours'
import HeaderLogin from './headerLogin'
import AccountIconHeader from './accountIconHeader'


export default function HeaderTopBlock({ isAuth, userName, userEmail, setAuthLogout }) {

    return (
        <div className={`container ${s.headerTopBlock}`}>
            <HeaderLogo />
            <HeaderAddress address="Тополиная 1а" />
            <HeaderPhone phone="783-753" />
            <HeaderWorkingHours time="C 10-00 до 20-00" wokrWeek="Без выходных" />
            {isAuth ?
                <div className={s.lkLoginBlock} >
                    <AccountIconHeader icon="account_circle" userName={userName} userEmail={userEmail} />
                    <HeaderLogin icon="logout" text="Выход" onClick={setAuthLogout} />
                </div> :
                <HeaderLogin icon="login" text="Вход" />
            }
        </div>
    )
}


