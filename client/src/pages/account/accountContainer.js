import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAppointSuccess, setAppointSuccess } from 'store/accountReducer/actions'
import { getUsersAppoints } from "store/accountReducer/selectors"
import { getToken } from "store/authReducer/selectors"
import PersonalAccount from "."


const AccountContainer = () => {
    const dispatch = useDispatch()

    const token = useSelector(getToken)
    const userAppoints = useSelector(getUsersAppoints)

    const [form, setForm] = useState({ service: '', date: '', model: '', dateCreate: '2021-07-17T10:20:11.000Z' })

    useEffect(() => dispatch(getAppointSuccess(token)), [dispatch, token])

    const changeHandler = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const fetcher = async () => {
        dispatch(setAppointSuccess(token, form))
        setForm({ service: '', date: '', model: '' })
    }


    return (
        <PersonalAccount userAppoints={userAppoints} fetcher={fetcher} form={form} changeHandler={changeHandler} />
    )
}

export default AccountContainer