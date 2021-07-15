import Button from 'components/common/buttons'
import Input from 'components/common/inputs'
import s from './s.module.css'

export default function PersonalAccount({ userEmail }) {
    const [form, setForm] = useState({ service: '', })

    return (
        <div className="container">
            <div className={s.accountPageBox}>
                <ul>
                    <li>{userEmail} Вы записанны на:</li>
                    <li>1 июня на 20:00</li>
                </ul>
            </div>
            <div className={s.formBox}>
                <Input label="Услуга" />
                <Input label="Дата" />
                <Button name="Записаться" />
            </div>
        </div>
    )
}