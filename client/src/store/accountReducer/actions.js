
import { appointAPI } from "api";
import { GET_APPOINT, SET_APPOINT } from "./type";




const getAppoint = (data) => ({ type: GET_APPOINT, data })
const setAppoint = (data) => ({ type: SET_APPOINT, data })


export const getAppointSuccess = (token) => async (dispatch) => {
    const data = await appointAPI.getAppoint(token)
    dispatch(getAppoint(data))
}
export const setAppointSuccess = (token, form) => async (dispatch) => {
    const data = await appointAPI.setAppoint(token, form)
    console.log(data);
    dispatch(setAppoint(data))
}