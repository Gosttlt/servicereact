import { SET_AUTH_LOGOUT, SET_AUTH_LOGIN, SET_ERROR_AUTH } from "./type";


let initialState = {
    token: null,
    userId: null,
    isAuth: false,
    userName: '',
    userEmail: '',
    isErrorAuth: '',
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_AUTH_LOGOUT:
            return {
                ...state,
                isAuth: false,
                userEmail: '',
                userName: '',
                isErrorAuth: '',
                token: null,
                userId: null,
            }
        case SET_AUTH_LOGIN:
            return {
                ...state,
                isAuth: true,
                userEmail: action.email,
                token: action.token,
                userId: null,
            }
        case SET_ERROR_AUTH:
            return {
                ...state,
                isErrorAuth: action.message
            }
        default:
            return state;
    }
}



export default authReducer