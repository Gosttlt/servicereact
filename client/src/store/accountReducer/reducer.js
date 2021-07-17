import { GET_APPOINT, SET_APPOINT } from "./type";


let initialState = {
    user: [{ service: 'Замена стекла', date: '16/07/21', model: 'iPhone 5s', dateCreate: '2021-07-17T10:20:11.000Z' }]
}

const accountReducer = (state = initialState, action) => {

    switch (action.type) {

        case GET_APPOINT:
            return {
                ...state,
                user: [...action.data]
            }
        case SET_APPOINT:
            return {
                ...state,
                user: [action.data, ...state.user]
            }

        default:
            return state;
    }
}



export default accountReducer