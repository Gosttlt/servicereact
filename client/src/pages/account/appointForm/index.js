import s from './s.module.css'
import Button from 'components/common/buttons'
import Input from 'components/common/inputs'

export default function AppointForm({ changeHandler, form, fetcher }) {
    return (
        <div className={s.formBox}>
            <Input label="Услуга" name="service" onChange={(e) => changeHandler(e)} value={form.service} />
            <Input label="Дата" name="date" onChange={(e) => changeHandler(e)} value={form.date} />
            <Input label="Модель" name="model" onChange={(e) => changeHandler(e)} value={form.model} />
            <Button name="Записаться" onClick={fetcher} />
        </div>
    )
}