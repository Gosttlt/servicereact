import FooterLogo from './footerLogo'
import s from './s.module.css'

export default function Footer() {
    return (
        <div className={`container ${s.footerTopBlock}`}>
            <FooterLogo />
            <div className={s.tempExemple}>Новости</div>
            <div className={s.tempExemple}>Статьи</div>
        </div>
    )
}
