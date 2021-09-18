import FooterLogo from './footerLogo/footerLogo'
import s from './s.module.css'
import React from 'react'
import Container from 'components/shared/container'

export default React.memo(function Footer() {
    return (
        <footer className={s.footer}>
            <Container>
                <div className={s.footerTopBlock}>
                    <FooterLogo />
                    <div className={s.tempExemple}>Новости</div>
                    <div className={s.tempExemple}>Статьи</div>
                </div>
            </Container>
        </footer>
    )
})
