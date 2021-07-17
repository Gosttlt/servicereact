import AppointBox from './appointBox'
import AppointForm from './appointForm'
import s from './s.module.css'

export default function PersonalAccount({ userAppoints, form, changeHandler, fetcher }) {

    return (
        <div className="container">
            <AppointForm form={form} changeHandler={changeHandler} fetcher={fetcher} />
            <div className={s.appointBox}>
                <div className={s.navBar}>
                    <div className={s.nav}>Ваши записи на ремонт</div>
                    <div className={s.nav + ' ' + s.activeNav}>История записей</div>
                </div>
                <AppointBox userAppoints={userAppoints} />
            </div>
        </div>
    )
}



