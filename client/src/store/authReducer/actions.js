import { authAPI } from "api";
import { SET_AUTH_LOGOUT, SET_AUTH_LOGIN, SET_ERROR_AUTH } from "./type";

const storageName = 'userData'

export const setAuthLogout = () => (dispatch) => {
    dispatch({ type: SET_AUTH_LOGOUT })
}

export const setLogin = (data, dispatch) => {
    data.status ?
        dispatch({ type: SET_AUTH_LOGIN, email: data.email, token: data.token }) :
        dispatch({ type: SET_ERROR_AUTH, message: data.message })
}

export const setAuthLogin = (payload) => async (dispatch) => {
    let data = await authAPI.getLogin(payload)
    localStorage.setItem(storageName, JSON.stringify(data))
    setLogin(data, dispatch)
}

export const setAuthRegister = (payload) => async (dispatch) => {
    const data = await authAPI.getRegister(payload)

    setLogin(data, dispatch)
}
