import s from './s.module.css'
import HeaderLogo from './headerLogo'
import HeaderAddress from './headerAddress'
import HeaderPhone from './headerPhone'
import HeaderWorkingHours from './headerWorkingHours'
import AccountIconHeader from './accountIconHeader'
import Container from 'components/shared/container'
import React from 'react'

export default React.memo(function Header({ isAuth, userName, userEmail, setAuthLogout }) {

    return (
        <header className={s.header}>
            <Container>
                <div className={s.header__box}>
                    <HeaderLogo />
                    <HeaderAddress address="Тополиная 1а" />
                    <HeaderPhone phone="783-753" />
                    <HeaderWorkingHours time="C 10-00 до 20-00" wokrWeek="Без выходных" />
                    {true ?
                        <div className={s.lkLoginBlock} >
                            <AccountIconHeader
                                icon="login"
                                userName="Войти"
                                userEmail="userEmail"
                                url="/auth" />
                        </div> :
                        <div className={s.lkLoginBlock} >
                            <AccountIconHeader
                                icon="account_circle"
                                userName="Войти"
                                userEmail="userEmail"
                                url="/lk" />
                        </div>
                    }
                </div>
            </Container>
        </header>
    )
})


