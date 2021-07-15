import Button from "components/common/buttons";
import Input from "components/common/inputs";
import { useState } from "react";
import { useDispatch } from "react-redux";
import s from './s.module.css'

export default function AuthPage({ setAuthLogin, setAuthRegister, isErrorAuth }) {

    const dispatch = useDispatch()

    const [form, setForm] = useState({ email: '', password: '' })

    const changeHandler = e => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const onSetAuthLogin = () => { dispatch(setAuthLogin(form)) }
    const onSetAuthRegister = () => { dispatch(setAuthRegister(form)) }


    return (
        <div className={`container ${s.authBox}`}>
            <div className={s.errorMessage}>
                {isErrorAuth &&
                    <>{isErrorAuth}</>
                }
            </div>
            <div>
                <Input onChange={changeHandler} placeholder="Введите e-mail" name="email" label="Email" />
                <Input onChange={changeHandler} placeholder="Введите пароль" name="password" label="Password" type="password" />
            </div>
            <Button onClick={onSetAuthLogin} name="Войти" />
            <Button onClick={onSetAuthRegister} name="Регистрация" />
        </div>
    )

}


