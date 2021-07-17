import { authAPI } from "api";
import { SET_AUTH_LOGOUT, SET_AUTH_LOGIN, SET_ERROR_AUTH, SET_AUTH_REGISTR } from "./type";

const storageName = 'userData'

export const setAuthLogout = () => (dispatch) => {
    localStorage.removeItem(storageName)
    dispatch({ type: SET_AUTH_LOGOUT })
}

export const setLogin = (data) => ({ type: SET_AUTH_LOGIN, email: data.email, token: data.token })

const setError = (data) => ({ type: SET_ERROR_AUTH, message: data.message })

export const setAuthLogin = (payload) => async (dispatch) => {
    let data = await authAPI.getLogin(payload)

    if (!data.status) {
        return dispatch(setError(data))
    }

    dispatch(setLogin(data.payload))
    localStorage.setItem(storageName, JSON.stringify(data.payload))
}

export const setAuthRegister = (payload) => async (dispatch) => {
    const data = await authAPI.getRegister(payload)
    if (!data.status) {
        return dispatch(setError(data))
    }
    let pay = await authAPI.getLogin(payload)
    if (!pay.status) {
        return dispatch(setError(data))
    }
    dispatch(setLogin(pay.payload))
    localStorage.setItem(storageName, JSON.stringify(data.payload))
}
