import s from './s.module.css'

export default function Footer() {
    return (
        <div className={`container ${s.footerTopBlock}`}>
            <div className={s.logo}>
                <div className={s.logoText}>Service24</div>
            </div>
            <div className={s.newsBlock}>Новости</div>
            <div className={s.articles}>Статьи</div>
        </div>
    )
}