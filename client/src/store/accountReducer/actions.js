
import { appointAPI } from "api";
import { SET_AUTH_LOGOUT } from "store/authReducer/type";
import { GET_APPOINT, SET_APPOINT } from "./type";

const storageName = 'userData'


const getAppoint = (data) => ({ type: GET_APPOINT, data })
const setAppoint = (data) => ({ type: SET_APPOINT, data })


export const getAppointSuccess = (token) => async (dispatch) => {
    const data = await appointAPI.getAppoint(token)
    if (!data.status) {
        localStorage.removeItem(storageName)
        return dispatch({ type: SET_AUTH_LOGOUT })
    }
    dispatch(getAppoint(data.data))
}
export const setAppointSuccess = (token, form) => async (dispatch) => {
    const data = await appointAPI.setAppoint(token, form)
    console.log(data);
    dispatch(setAppoint(data))
}