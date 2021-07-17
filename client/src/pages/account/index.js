import Button from 'components/common/buttons'
import Input from 'components/common/inputs'
import s from './s.module.css'

export default function PersonalAccount({ userAppoints, form, changeHandler, fetcher }) {
    let arr = userAppoints.map((u, i) => (
        <div key={i} className={s.appoint}>
            <AppointCol head="Дата записи" text={u.date} />
            <AppointCol head="Услуга" text={u.service} />
            <AppointCol head="Модель" text={u.model} />
            <AppointCol head="Дата создания" text="20/20/20" />
        </div>
    )
    )

    return (
        <div className="container">
            <AppointBox form={form} changeHandler={changeHandler} fetcher={fetcher} />
            <div>
                <div className={s.appointBox}>
                    {arr}
                </div>
            </div>
        </div>
    )
}

function AppointCol({ head, text }) {
    return (
        <div className={s.colBox}>
            <div className={s.colHead}>{head}:</div>
            <div className={s.colText}>{text}</div>
        </div>
    )
}

function AppointBox({ changeHandler, form, fetcher }) {
    return (
        <div className={s.formBox}>
            <Input label="Услуга" name="service" onChange={(e) => changeHandler(e)} value={form.service} />
            <Input label="Дата" name="date" onChange={(e) => changeHandler(e)} value={form.date} />
            <Input label="Модель" name="model" onChange={(e) => changeHandler(e)} value={form.model} />
            <Button name="Записаться" onClick={fetcher} />
        </div>
    )
}